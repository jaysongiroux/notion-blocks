export interface ParagraphProps { 
  paragraphBlock: {
    rich_text: [{
      plain_text: string,
      annotations: {
        color: string,
        italic: boolean,
        bold: boolean,
        strikethrough: boolean,
        underline: boolean,
        code: boolean
      },
      href: string | null
    }],
    color: string
  },
}

export interface RichTextProps {
  href: string | null,
  plain_text: string | null,
  annotations: {
    color: string,
    italic: boolean,
    bold: boolean,
    strikethrough: boolean,
    underline: boolean,
    code: boolean
  },
}