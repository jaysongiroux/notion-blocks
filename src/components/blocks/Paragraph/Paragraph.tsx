import React from "react";
import { ParagraphProps } from "../../types/paragraph";
import { constructTextFromBlocks } from "../../helpers/text";
import '../../helpers/general.css'

const Paragraph = (props: ParagraphProps) => {
	const richText = props?.paragraphBlock?.rich_text;

	if (!richText.length) return <p style={{ minHeight: "1.75em", marginBlockStart: 0, marginBlockEnd: 0 }} />;
	return (
		<pre className={"NotionBlocksPreTagLineBreak NotionBlocksParagraphPreTag"}>
			{constructTextFromBlocks(richText, props.paragraphStyles)}
		</pre>
	);
};

export default Paragraph;
