import React from "react";
import Headers from "../Headers/Headers";
import Paragraph from "../Paragraph/Paragraph";
import Code from "../Code/Code";
import Picture from "../Picture/Picture";
import Callout from "../Callout/Callout";
import Quote from "../Quote/Quote";
import BulletList from "../BulletList/BulletList";
import NumberList from "../NumberList/NumberList";
import Divider from '../Divider/Divider'
import { NotionBlocksProps } from "../types/general";
import { processNotionBlocks } from "../helpers/utils";

const NotionBlocks = (props: NotionBlocksProps) => {
	const handleComponent = (block: any) => {
		switch (block?.type) {
			case "heading_3":
			case "heading_2":
			case "heading_1":
				return <Headers headerBlock={block[block?.type]} type={block?.type} />;
			case "paragraph":
				return <Paragraph paragraphBlock={block?.paragraph} />;
			case "code":
				return <Code codeBlock={block?.code} />;
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
				return <Divider />
			default:
				return null;
		}
	};
	
	const blocks = processNotionBlocks(props?.blocks)

  if (!blocks || blocks?.length === 0) return <></>;
  
	return (
		<div>
      {blocks?.map((block: any, index: number) => {
				return (
          <div className="NotionBlocksEntry" key={index}>
						{handleComponent(block)}
					</div>
				);
			})}
		</div>
	);
};

export default NotionBlocks;
