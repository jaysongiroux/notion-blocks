import { GeneralBlockProps, NotionBlocksProps } from "../types/general";


export const processNotionBlocks =(numberListBlocks:any[]) =>{
	const transformedListItems: any[] = [];

  let currentNumberedListItem: null | any= null;
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
}