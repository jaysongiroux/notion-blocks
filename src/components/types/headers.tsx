import { CombinedColor, RichTextProps } from "./general";

export type HeaderType = "heading_1" | "heading_2" | "heading_3" | "toggle";

export interface HeaderProps {
	headerBlock: {
		rich_text: RichTextProps[];
		color: CombinedColor;
		is_toggleable: boolean | undefined;
	};
	type: HeaderType;
	headerStyles?: React.CSSProperties;
}

export interface ToggleHeaderProps {
	toggleHeaderBlock: {
		rich_text: RichTextProps[];
		color: CombinedColor;
		is_toggleable: boolean | undefined;
		children?: [any];
	};
	type: HeaderType;
	toggleHeaderStyles?: React.CSSProperties;
}

export interface HeaderStylesProps {
	heading_1: object;
	heading_2: object;
	heading_3: object;
}
