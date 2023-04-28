import { CombinedColor, RichTextProps, NotionBlocksProps, NumberedListBlock } from "./general";

export interface BulletListProps {
	bulletedListBlock: {
		rich_text: RichTextProps[];
		color: CombinedColor;
	};

}
export interface NumberListProps {
	numberedNumberBlock: NumberedListBlock[];
}