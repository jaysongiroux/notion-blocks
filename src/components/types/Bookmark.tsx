import { CaptionProps } from "./general"

export interface BookmarkProps { 
  bookmarkBlock: {
    caption: CaptionProps[]
    url: string
  }
  bookmarkStyles?: React.CSSProperties
}