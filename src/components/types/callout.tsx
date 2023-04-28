import { CombinedColor, RichTextProps} from "./general"

export interface CalloutProps {
  calloutBlock: CalloutBlocksProps;
}

export interface CalloutBlocksProps {
  rich_text: RichTextProps[];
  color: CombinedColor;
  icon: {
    type: string;
    emoji: string;
  }
}
