import React from "react";
import { getStyles } from "../helpers/generalStyles";
import { RichTextProps, StylesProps } from "../types/general";

export const constructTextFromBlocks = (textBlocks: RichTextProps[]) => {
	return (
		<div className="TextBlockContainer">
			{!!textBlocks?.length ? (
				textBlocks?.map((text: RichTextProps, key: number) => {
					return <span key={key}>{constructText(text)}</span>;
				})
			) : (
				<div style={{ minHeight: "1em" }} />
			)}
		</div>
	);
};

export const constructText = (co: RichTextProps) => {
	const styles: StylesProps = getStyles(
		co?.annotations,
		co?.annotations?.color,
		!!co?.href,
		true
	);

	const plainText = co?.plain_text;

	if (co?.href)
		return (
			<a style={styles} href={co?.href}>
				{plainText}
			</a>
		);

	return <span style={styles}>{plainText}</span>;
};
