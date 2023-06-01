import { ThemeEnum } from "./code";

export interface AnnotationsProps {
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: string;
}

export interface StylesProps {
	fontWeight?: string | number;
	fontStyle?: string;
	textDecoration?: string;
	color?: string;
	backgroundColor?: string;
	borderRadius?: number;
	width?: string;
	padding?: number;
	fontFamily?: string;
	backdropFilter?: string;
	paddingLeft?: string | number;
	paddingRight?: string | number;
	paddingTop?: string | number;
	paddingBottom?: string | number;
}

export interface MentionProps {
	type: string;
	user: {
		object: string;
		id: string;
		name: string;
		avatar_url: string;
		type: string;
		person: {};
	};
}
export interface MentionOverlayProps {
	mention?: MentionProps;
}

export interface RichTextProps {
	plain_text: string;
	href: string | null;
	annotations: AnnotationsProps;
	text: TextProps;
	type?: string;
	mention?: MentionProps;
}

export interface NumberedListBlock {
	archived: boolean;
	has_children: boolean;
	isChild?: boolean;
	numbered_list_item: {
		color: CombinedColor;
		rich_text: RichTextProps[];
		children: any[];
	};
	children: any[];
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
	undefined,
}

export interface NotionBlocksProps {
	blocks: any[];
	codeTheme?: ThemeEnum;
	codeOverlay?: boolean;
	containerStyles?: React.CSSProperties;
	blockContainerStyles?: React.CSSProperties;
	headerStyles?: React.CSSProperties;
	toggleHeaderStyles?: React.CSSProperties;
	toggleStyles?: React.CSSProperties;
	paragraphStyles?: React.CSSProperties;
	codeStyles?: React.CSSProperties;
	pictureStyles?: React.CSSProperties;
	calloutStyles?: React.CSSProperties;
	quoteStyles?: React.CSSProperties;
	listStyles?: React.CSSProperties;
	columnStyles?: React.CSSProperties;
	bookmarkStyles?: React.CSSProperties;
	equationStyles?: React.CSSProperties;
	childPageStyles?: React.CSSProperties;
	tableStyle?:React.CSSProperties;
	tableRowStyle?:React.CSSProperties;
	tableHeaderStyle?:React.CSSProperties;
}

export interface GeneralBlockProps {
	type: string;
	[block: string]: any;
}
