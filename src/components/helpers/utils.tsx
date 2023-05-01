import React from "react";
import {
	GeneralBlockProps,
	NotionBlocksProps,
	RichTextProps,
	StylesProps,
} from "../types/general";
import { getStyles } from "./generalStyles";

export const processNotionBlocks = (numberListBlocks: any[]) => {
	const transformedListItems: any[] = [];

	let currentNumberedListItem: null | any = null;
	let currentNumberedListItemIndex = -1;

	numberListBlocks.forEach((block: GeneralBlockProps) => {
		if (block.type === "numbered_list_item") {
			if (currentNumberedListItem === null) {
				// start a new numbered list item
				currentNumberedListItem = {
					type: "numbered_list_item",
					blocks: [block],
				};
				currentNumberedListItemIndex = transformedListItems.push(
					currentNumberedListItem
				);
				currentNumberedListItemIndex--;
			} else {
				// add to current numbered list item
				currentNumberedListItem.blocks.push(block);
			}
		} else {
			currentNumberedListItem = null;
			currentNumberedListItemIndex = -1;
			transformedListItems.push(block);
		}
	});

	return transformedListItems;
};

export const constructText = (
	co: RichTextProps,
	overrides = {},
	colorOverride: string | null = "black"
) => {
	const styles: StylesProps = getStyles(
		co?.annotations,
		co?.annotations?.color,
		!!co?.href,
		true
	);

	styles && Object.assign(styles, overrides);
	if (colorOverride) styles.color = colorOverride;

	const plainText = co?.plain_text;

	if (co?.href)
		return (
			<a style={styles} href={co?.href}>
				{plainText}
			</a>
		);

	return <span style={styles}>{plainText}</span>;
};

export const handleColor = (
	listItemColor: string,
	colorOverride: string | null
) => {
	if (listItemColor === "default" && colorOverride) return colorOverride;
	return null;
};
