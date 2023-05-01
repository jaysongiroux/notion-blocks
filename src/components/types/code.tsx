import { RichTextProps, CaptionProps} from "./general"

enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export interface CodeProps {
  codeBlock: {
    language: string,
    caption: CaptionProps[],
    rich_text:RichTextProps[] 
  },
  theme: Theme;
  index: number;
}
