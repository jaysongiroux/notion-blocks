import React from "react";
import { RichTextProps } from "../types/general";
import Mention from "../blocks/Mention/Mention";
import { constructText, handleColor } from "./utils";
import TeX from "@matejmazur/react-katex";

import "../helpers/general.css";

export const constructTextFromBlocks = (
	textBlocks: RichTextProps[],
	overrides = {},
	colorOverride: string | null = null
) => {
	return (
		<span className="TextBlockContainer">
			{!!textBlocks?.length ? (
				textBlocks?.map((text: RichTextProps, key: number) => {
					if (text?.type === "mention") {
						return (
							<Mention
								key={key}
								text={text}
								overrides={overrides}
								colorOverride={colorOverride}
							/>
						);
					} else if (text?.type === "equation") {
						return (
							<span key={key}>
								<TeX math={text?.plain_text} />
							</span>
						);
					}
					return (
						<span key={key}>
							{constructText(
								text,
								overrides,
								handleColor(text?.annotations?.color, colorOverride)
							)}
						</span>
					);
				})
			) : (
				<span style={{ minHeight: "1em" }} />
			)}
		</span>
	);
};
