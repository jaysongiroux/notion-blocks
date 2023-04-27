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
	text: TextProps
}

export interface CaptionProps {
	href: string | null;
	plain_text: string;
	text: TextProps
	type: string;
	annotations: AnnotationsProps;
}

export interface TextProps {
	content: string;
	link: null | string;
}
