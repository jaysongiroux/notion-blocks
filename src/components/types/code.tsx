import { RichTextProps, CaptionProps} from "./general"

export enum ThemeEnum {
  Light = 'light',
  Dark = 'dark'
}

export interface CodeProps {
  codeBlock: {
    language: string,
    caption: CaptionProps[],
    rich_text:RichTextProps[] 
  },
  theme?: ThemeEnum;
  codeOverlay?: boolean;
  codeStyles?: React.CSSProperties;
}
