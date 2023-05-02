import { RichTextProps, CaptionProps} from "./general"

enum PictureType {
  External = "external",
  File = "file"
}

interface File {
  url: string;
}

export interface PictureProps {
  pictureBlock: {
    caption: CaptionProps[];
    rich_text: RichTextProps[];
    type: PictureType;
    external?: File;
    file?: File;
  },
  pictureStyles?: React.CSSProperties;
}
