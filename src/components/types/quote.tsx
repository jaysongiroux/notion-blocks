import { RichTextProps, CombinedColor} from "./general"


export interface QuoteProps {
  quoteBlock: {
    rich_text: RichTextProps[];
    color: CombinedColor;
  },
}
