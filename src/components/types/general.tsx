export interface AnnotationsProps {
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: string;
}

export interface StylesProps {
	fontWeight?: string;
	fontStyle?: string;
	textDecoration?: string;
	color?: string;
	backgroundColor?: string;
	borderRadius?: number;
	width?: string;
	padding?: number;
	fontFamily?: string;
	backdropFilter?: string;
	paddingLeft?: string;
	paddingRight?: string;
}

export interface RichTextProps {
	plain_text: string;
	href: string | null;
	annotations: AnnotationsProps;
	text: TextProps;
}

export interface NumberedListBlock {
	archived: boolean;
	has_children: boolean;
	numbered_list_item: {
		color: CombinedColor;
		rich_text: RichTextProps[];
	};
}

export interface CaptionProps {
	href: string | null;
	plain_text: string;
	text: TextProps;
	type: string;
	annotations: AnnotationsProps;
}

export interface TextProps {
	content: string;
	link: null | string;
}
export enum BackgroundColor {
	Blue_Background = "blue_background",
	Brown_Background = "brown_background",
	gray_Background = "gray_background",
	Green_Background = "green_background",
	Orange_Background = "orange_background",
	Pink_Background = "pink_background",
	Purple_Background = "purple_background",
	Red_Background = "red_background",
	Yellow_Background = "yellow_background",
	Default = "default",
}

export enum Color {
	Blue = "blue",
	Brown = "brown",
	Default = "default",
	Gray = "gray",
	Green = "green",
	Orange = "orange",
	Yellow = "yellow",
	Pink = "pink",
	Purple = "purple",
	Red = "red",
}

export enum CombinedColor {
	Color,
	BackgroundColor,
	undefined
}

export interface NotionBlocksProps {
	blocks: any[];
}

export interface GeneralBlockProps {
	type: string;
	[block: string]: any;
}