import React from "react";
import {
	GeneralBlockProps,
	RichTextProps,
	StylesProps,
} from "../types/general";
import { getStyles } from "./generalStyles";

/**
 * recursive function that adds 'isChild' property to all children
 * @param block
 * @returns block with 'isChild' property
 */
const processChildren = (block: any) => {
	// if there are children
	if (block?.has_children) {
		// loop through each child
		block[block.type]?.children?.forEach((child: any) => {
			child.isChild = true; // add 'isChild' property to child
			processChildren(child); // recursively call processChildren on child
		});
	}

	return block;
};

export const processNotionBlocks = (numberListBlocks: any[]) => {
	const transformedListItems: any[] = [];

	let currentNumberedListItem: null | any = null;
	let currentNumberedListItemIndex = -1;

	numberListBlocks?.forEach((notionBlock: GeneralBlockProps) => {
		if (notionBlock.type === "numbered_list_item") {
			const block = processChildren(notionBlock);
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
				currentNumberedListItem.blocks.push(block);
			}
		} else {
			currentNumberedListItem = null;
			currentNumberedListItemIndex = -1;
			transformedListItems.push(notionBlock);
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
