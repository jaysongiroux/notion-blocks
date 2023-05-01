import React from "react";
import { getStyles } from "../helpers/generalStyles";
import { CaptionProps, RichTextProps, StylesProps } from "../types/general";
import { Equation, EquationOptions, defaultErrorHandler } from "react-equation";
import { defaultVariables, defaultFunctions } from "equation-resolver";

import "./caption.css";

export const constructCaptionFromBlocks = (
	captionBlocks: CaptionProps[] | RichTextProps[]
) => {
	return (
		<div className="CaptionCaptionBox">
			{captionBlocks?.map(
				(caption: CaptionProps | RichTextProps, key: number) => {
					return <span key={key}>{constructCaption(caption)}</span>;
				}
			)}
		</div>
	);
};

export const constructCaption = (co: CaptionProps | RichTextProps) => {
	const styles: StylesProps = getStyles(
		co?.annotations,
		co?.annotations?.color,
		!!co?.href,
		true
	);

	const plainText = co?.plain_text;

	if (co?.href) {
		return (
			<a style={styles} href={co?.href}>
				{plainText}
			</a>
		);
	}

	if (co?.type === "equation") {
		return (
			<span>
				<EquationOptions
					variables={defaultVariables}
					functions={defaultFunctions}
					errorHandler={defaultErrorHandler}
					style={styles}
				>
					<Equation value={co?.plain_text} />
				</EquationOptions>
			</span>
		);
	}
	return <span style={styles}>{plainText}</span>;
};
