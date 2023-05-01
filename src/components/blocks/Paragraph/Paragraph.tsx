import React from "react";
import { ParagraphProps } from "../../types/paragraph";
import { constructTextFromBlocks } from "../../helpers/text";
import "../../styles/general";

const Paragraph = (props: ParagraphProps) => {
	const richText = props?.paragraphBlock?.rich_text;

	if (!richText.length) return <p style={{ minHeight: "1em" }} />;
	return (
		<pre className={"NotionBlocksPreTagLineBreak"}>
			{constructTextFromBlocks(richText, { lineHeight: "1.3em" })}
		</pre>
	);
};

export default Paragraph;
