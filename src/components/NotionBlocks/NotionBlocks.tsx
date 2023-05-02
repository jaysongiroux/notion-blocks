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
import Columns from "../Columns/Columns";
import Entry from "./Entry";
import { NotionBlocksProps } from "../types/general";
import { processNotionBlocks } from "../helpers/utils";
import { ToggleHeaders } from "../blocks/Headers";
import { ThemeEnum } from "../types/code";
import { Bookmark } from "../blocks/Bookmark";

const HEADERS = ["heading_1", "heading_2", "heading_3"];

const NotionBlocks = (props: NotionBlocksProps) => {
	const handleComponent = (block: any) => {
		if (HEADERS.includes(block?.type) && block[block?.type]?.is_toggleable) {
			return (
				<ToggleHeaders
					toggleHeaderBlock={block[block?.type]}
					type={block?.type}
					children={block?.children}
					{...props}
				/>
			);
		}

		if (block?.type === "toggle") {
			return (
				<ToggleHeaders
					toggleHeaderBlock={block?.toggle}
					type={block?.type}
					children={block?.children}
					{...props}
				/>
			);
		}

		switch (block?.type) {
			case "heading_3":
			case "heading_2":
			case "heading_1":
				return (
					<Headers
						headerStyles={props?.headerStyles}
						headerBlock={block[block?.type]}
						type={block?.type}
					/>
				);
			case "paragraph":
				return (
					<Paragraph
						paragraphStyles={props?.paragraphStyles}
						paragraphBlock={block?.paragraph}
					/>
				);
			case "code":
				return (
					<Code
						codeBlock={block?.code}
						theme={props.codeTheme ?? ThemeEnum.Light}
						codeOverlay={props.codeOverlay ?? true}
						codeStyles={props?.codeStyles}
					/>
				);
			case "image":
				return <Picture pictureBlock={block?.image} pictureStyles={props?.pictureStyles} />;
			case "callout":
				return <Callout calloutStyles={props?.calloutStyles} calloutBlock={block?.callout} />;
			case "quote":
				return <Quote quoteStyles={props?.quoteStyles} quoteBlock={block?.quote} />;
			case "bulleted_list_item":
				return <BulletList listStyles={props?.listStyles} bulletedListBlock={block?.bulleted_list_item} />;
			case "numbered_list_item":
				return <NumberList listStyles={props?.listStyles} numberedNumberBlock={block?.blocks} />;
				case "to_do":
					return <ToDoList listStyles={props?.listStyles} todoListProps={block?.to_do} />;
			case "divider":
				return <Divider />;
			case "column_list":
				return <Columns
					columnBlock={block?.children}
					{...props}
				/>;
			case "bookmark":
				return <Bookmark bookmarkBlock={block?.bookmark} bookmarkStyles={props?.bookmarkStyles}/>;
			default:
				return null;
		}
	};

	const blocks = processNotionBlocks(props?.blocks);

	if (!blocks || blocks?.length === 0) return <></>;

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
							{handleComponent(block)}
						</div>
					);
				})}
			</>
		</Entry>
	);
};

NotionBlocks.defaultProps = {
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
};

export default NotionBlocks;
