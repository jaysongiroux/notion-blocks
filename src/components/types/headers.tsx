
type HeaderType = 'heading_1' | 'heading_2' | 'heading_3'

export interface HeaderProps { 
  headerBlock: {
    rich_text: {
      plain_text: string,
    }
    color: string
  },
  type: HeaderType
}
