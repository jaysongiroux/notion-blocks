import { CombinedColor, RichTextProps, NumberedListBlock } from "./general";
import { HeaderType } from "./headers";

export interface BulletListProps {
	bulletedListBlock: {
		rich_text: RichTextProps[];
		color: CombinedColor;
	};
}

export interface NumberListProps {
	numberedNumberBlock: NumberedListBlock[];
}

export interface toDoListProps {
	todoListProps: {
		rich_text: RichTextProps[];
		checked: boolean;
		color: CombinedColor;
	};
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
