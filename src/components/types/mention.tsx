import { RichTextProps } from "./general";

export interface MentionProps {
  text: RichTextProps
  overrides?: {};
  colorOverride: string | null;
}
