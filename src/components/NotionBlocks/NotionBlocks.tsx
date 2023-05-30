import React from "react";
import Entry from "./Entry";
import { NotionBlocksProps } from "../types/general";
import { processNotionBlocks } from "../helpers/utils";
import { ThemeEnum } from "../types/code";
import HandleComponent from "../helpers/handler";

const NotionBlocks = (props: NotionBlocksProps) => {
	const blocks = processNotionBlocks(props?.blocks);

	if (!blocks || blocks?.length === 0 || blocks === undefined) return <></>;

	return (
		<Entry styles={props?.containerStyles}>
			<>
				{blocks?.map((block: any, index: number) => {
					return (
						<div
							className="NotionBlocksEntry"
							key={index}
							style={props.blockContainerStyles}
						>
							<HandleComponent block={block} additionalProps={props} />
						</div>
					);
				})}
			</>
		</Entry>
	);
};

NotionBlocks.defaultProps = {
	blocks: [],
	codeTheme: ThemeEnum.Light,
	codeOverlay: true,
	blockContainerStyles: {},
	containerStyles: {},
	headerStyles: {},
	toggleHeaderStyles: {},
	toggleStyles: {},
	codeStyles: {},
	pictureStyles: {},
	calloutStyles: {},
	quoteStyles: {},
	listStyles: {},
	columnStyles: {},
	bookmarkStyles: {},
	equationStyles: {},
	childPageStyles: {},
	onChildPageClick: (id: string, title: string) => {},
};

export default NotionBlocks;
