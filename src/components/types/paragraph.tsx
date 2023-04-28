import { CombinedColor, RichTextProps } from "./general"

export interface ParagraphProps { 
  paragraphBlock: {
    rich_text: RichTextProps[],
    color: CombinedColor
  },
}
