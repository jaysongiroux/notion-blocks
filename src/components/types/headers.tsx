
type HeaderType = 'heading_1' | 'heading_2' | 'heading_3'

export interface HeaderProps { 
  headerBlock: {
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
  type: HeaderType
}

export interface HeaderStylesProps {
  heading_1: object,
  heading_2: object,
  heading_3: object,
}
