import React from "react";
import { CalloutProps } from "../../types/callout";
import { RichTextProps } from "../../types/general";
import { constructTextFromBlocks } from "../../helpers/text";
import "./callout.css";

const Callout = (props: CalloutProps) => {
	const calloutBlocks: RichTextProps[] = props?.calloutBlock?.rich_text;
	const emoji: string = props?.calloutBlock?.icon?.emoji;

	return (
		<div style={{ width: "100%", ...props.calloutStyles }}>
			<pre className="CalloutContainer">
				<span className="CalloutEmoji">{emoji}</span>
				{constructTextFromBlocks(calloutBlocks)}
			</pre>
		</div>
	);
};

export default Callout;
