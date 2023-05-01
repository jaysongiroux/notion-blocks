import React from "react";
import { BulletListProps } from "../../../types/lists";
import { RichTextProps } from "../../../types/general";
import { constructTextFromBlocks } from "../../../helpers/text";
import "./bulletList.css";

const BulletList = (props: BulletListProps) => {
	const listItems: RichTextProps[] = props?.bulletedListBlock?.rich_text;
	return (
		<pre className="BulletListPreContainer">
			{constructTextFromBlocks(listItems)}
		</pre>
	);
};

export default BulletList;
