import React from "react";
import { BulletListProps } from "../../../types/lists";
import { RichTextProps } from "../../../types/general";
import { constructTextFromBlocks } from "../../../helpers/text";
import HandleComponent from "../../../helpers/handler";
import "./bulletList.css";

const BulletList = (props: BulletListProps) => {
	const listItems: RichTextProps[] = props?.bulletedListBlock?.rich_text;

	return (
		<pre className="BulletListPreContainer" style={props?.listStyles}>
			{constructTextFromBlocks(listItems)}
			{props?.bulletedListBlock?.children?.map((block: any, key: number) => (
				<HandleComponent key={key} block={block} additionalProps={props} />
			))}
		</pre>
	);
};

export default BulletList;
