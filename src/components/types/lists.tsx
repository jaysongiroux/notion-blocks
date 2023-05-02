import { CombinedColor, RichTextProps, NumberedListBlock } from "./general";
import { HeaderType } from "./headers";

export interface BulletListProps {
	bulletedListBlock: {
		rich_text: RichTextProps[];
		color: CombinedColor;
	};
	listStyles?: React.CSSProperties;
}

export interface NumberListProps {
	numberedNumberBlock: NumberedListBlock[];
	listStyles?: React.CSSProperties;
}

export interface toDoListProps {
	todoListProps: {
		rich_text: RichTextProps[];
		checked: boolean;
		color: CombinedColor;
	};
	listStyles?: React.CSSProperties;
}

export interface ToggleListProps {
	toggleListBlock: {
		rich_text: RichTextProps[];
		color: CombinedColor;
		is_toggleable: boolean | undefined;
		children: any[];
	};
	type: HeaderType;
}
