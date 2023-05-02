import React from "react";
import { constructText, handleColor } from "../../helpers/utils";
import { MentionProps } from "../../types/mention";

const Mention = (props: MentionProps) => {
	const { text, overrides, colorOverride } = props;
	return (
		<div>
			<a
				type="button"
				className="NotionBlocksMentionTriggerContainer"
			>
				{constructText(
					text,
					overrides,
					handleColor(text?.annotations?.color, colorOverride)
				)}
			</a>
		</div>
	);
};

export default Mention;
