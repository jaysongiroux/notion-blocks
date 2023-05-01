import React from "react";
import Headers from "../blocks/Headers/Headers";
import Paragraph from "../blocks/Paragraph/Paragraph";
import Code from "../blocks/Code/Code";
import Picture from "../blocks/Picture/Picture";
import Callout from "../blocks/Callout/Callout";
import Quote from "../blocks/Quote/Quote";
import BulletList from "../blocks/Lists/BulletList/BulletList";
import NumberList from "../blocks/Lists/NumberList/NumberList";
import Divider from "../blocks/Divider/Divider";
import ToDoList from "../blocks/Lists/ToDoList/ToDoList";
import { NotionBlocksProps } from "../types/general";
import { processNotionBlocks } from "../helpers/utils";
import { ToggleHeaders } from "../blocks/Headers";
import Columns from "../Columns/Columns";


const HEADERS = ["heading_1", "heading_2", "heading_3"];

const NotionBlocks = (props: NotionBlocksProps) => {
	const handleComponent = (block: any, index: number) => {
		if (HEADERS.includes(block?.type) && block[block?.type]?.is_toggleable) {
			return (
				<ToggleHeaders
					toggleHeaderBlock={block[block?.type]}
					type={block?.type}
					children={block?.children}
				/>
			);
		}

		if (block?.type === "toggle") {
			return (
				<ToggleHeaders
					toggleHeaderBlock={block?.toggle}
					type={block?.type}
					children={block?.children}
				/>
			);
		}

		switch (block?.type) {
			case "heading_3":
			case "heading_2":
			case "heading_1":
				return <Headers headerBlock={block[block?.type]} type={block?.type} />;
			case "paragraph":
				return <Paragraph paragraphBlock={block?.paragraph} />;
			case "code":
				return <Code codeBlock={block?.code} index={index} />;
			case "image":
				return <Picture pictureBlock={block?.image} />;
			case "callout":
				return <Callout calloutBlock={block?.callout} />;
			case "quote":
				return <Quote quoteBlock={block?.quote} />;
			case "bulleted_list_item":
				return <BulletList bulletedListBlock={block?.bulleted_list_item} />;
			case "numbered_list_item":
				return <NumberList numberedNumberBlock={block?.blocks} />;
			case "divider":
				return <Divider />;
			case "to_do":
				return <ToDoList todoListProps={block?.to_do} />;
			case "column_list":
				return <Columns columnBlock={block?.children} />;
			default:
				return null;
		}
	};

	const blocks = processNotionBlocks(props?.blocks);

	if (!blocks || blocks?.length === 0) return <></>;

	return (
		<div>
			{blocks?.map((block: any, index: number) => {
				return (
					<div className="NotionBlocksEntry" key={index}>
						{handleComponent(block, index)}
					</div>
				);
			})}
		</div>
	);
};

export default NotionBlocks;
