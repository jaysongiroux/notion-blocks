import React from "react";
import { RichTextProps } from "../types/general";
import Mention from "../blocks/Mention/Mention";
import { constructText, handleColor } from "./utils";
import { Equation, EquationOptions, defaultErrorHandler } from "react-equation";
import { defaultVariables, defaultFunctions } from "equation-resolver";

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
								<EquationOptions
									variables={defaultVariables}
									functions={defaultFunctions}
									errorHandler={defaultErrorHandler}
								>
									<Equation value={text?.plain_text} />
								</EquationOptions>
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
