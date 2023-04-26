export interface CodeProps {
  codeBlock: {
    language: string,
    caption: [{
    }],
    rich_text: [{
      plain_text: string,
      href: string | null,
      annotations: {
        bold : boolean
        italic : boolean
        strikethrough : boolean
        underline : boolean
        code : boolean
        color : string
      },
      text: {
        content: string,
        link: null | string
      }
    }]
  }
}