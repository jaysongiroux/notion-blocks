import React from 'react'
import { ParagraphProps } from '../types/paragraph'
import { getStyles } from '../helpers/generalStyles'
import { RichTextProps } from '../types/general'
import { constructTextFromBlocks } from '../helpers/text'

const Paragraph = (props: ParagraphProps) => {
  const richText = props?.paragraphBlock?.rich_text

  const constructContent = (rt: RichTextProps) => {
    const contentLink = rt?.href
    const styles = getStyles(rt?.annotations, rt?.annotations?.color, !!contentLink)
    const content: string | null = rt?.plain_text

    if (contentLink) {
      return <a style={styles} href={contentLink}>{content}</a>
    }

    return <span style={styles}>{content}</span>
  }

  return constructTextFromBlocks(richText)

}

export default Paragraph
