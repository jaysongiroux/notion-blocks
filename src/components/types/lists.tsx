import { CombinedColor, RichTextProps, NumberedListBlock } from "./general";
import { HeaderType } from "./headers";

export interface BulletListProps {
	bulletedListBlock: {
		rich_text: RichTextProps[];
		color: CombinedColor;
		children?: any[];
	};
	listStyles?: React.CSSProperties;
	has_children?: boolean;
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
		children: any[];
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
