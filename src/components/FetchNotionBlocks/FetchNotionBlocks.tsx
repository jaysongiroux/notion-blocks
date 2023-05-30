const { Client } = require("@notionhq/client");

export interface FetchNotionBlocksProps {
	notionKey: string;
	notionPageId: string;
}

/**
 * Fetches the children of a block
 * @param {String} blockId
 * @returns {List[Object]}
 */
const fetchBlockChildren = async (blockId: string, notion: any) => {
	const { results } = await notion.blocks.children.list({
		block_id: blockId,
	});
	const fetchPromises = results.map(async (block: any) => {
		if (block.has_children) {
			block[block.type].children = await fetchBlockChildren(block.id, notion);
		}
		return block;
	});
	return Promise.all(fetchPromises);
};

const FetchNotionBlocks = async (props: FetchNotionBlocksProps) => {
	// throw error if ran in frontend
	if (typeof window !== "undefined") {
		throw new Error("FetchNotionBlocks cannot be run in frontend");
	}

	// throw error if notionKey is not provided
	if (!props.notionKey) {
		throw new Error("notionKey is required");
	}

	// throw error if notionPageId is not provided
	if (!props.notionPageId) {
		throw new Error("notionPageId is required");
	}

	const { notionKey, notionPageId } = props;

	const notion = new Client({
		auth: notionKey,
	});

	try {
		const { results } = await notion.blocks.children.list({
			block_id: notionPageId,
		});
		const response = await notion.pages.retrieve({
			page_id: notionPageId,
		});

		const fetchPromises = results.map(async (block: any) => {
			if (block.has_children) {
				block[block.type].children = await fetchBlockChildren(block.id, notion);
			}
			return block;
		});

		const fetchedResults = await Promise.all(fetchPromises);

		return {
			cover: response?.cover,
			response,
			blocks: fetchedResults ?? [],
		};
	} catch (error: any) {
		throw new Error(error);
	}
};

// default props
FetchNotionBlocks.defaultProps = {};

export default FetchNotionBlocks;
