import React from 'react'
import { ParagraphProps } from '../types/paragraph'
import { getStyles } from '../helpers/generalStyles'
import { RichTextProps } from '../types/general'

const Paragraph = (props: ParagraphProps) => {
  const richText: Array<any> = props?.paragraphBlock?.rich_text

  const constructContent = (rt: RichTextProps) => {
    const contentLink = rt?.href
    const styles = getStyles(rt?.annotations, rt?.annotations?.color, !!contentLink)
    const content: string | null = rt?.plain_text

    if (contentLink) {
      return <a style={styles} href={contentLink}>{content}</a>
    }

    return <span style={styles}>{content}</span>
  }

  return (
    <>
      {richText?.map((rt: any, index: number) => <span key={index}>{constructContent(rt)}</span>)}
      {richText?.length === 0 && <div style={{ minHeight: "1em" }} />}
    </>
  )
}

export default Paragraph
