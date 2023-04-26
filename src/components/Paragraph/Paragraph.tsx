import React from 'react'
import { ParagraphProps, RichTextProps } from '../types/paragraph'
import {codeStyles} from '../styles/general'

const Paragraph = (props: ParagraphProps) => {
  const richText: Array<any> = props?.paragraphBlock?.rich_text
  console.log("richText",richText)
  const styles = {
    fontFamily: "sans-serif",
    minHeight: '1em'
  }

  const constructContent = (rt: RichTextProps) => {
    const contentLink = rt?.href
    let textDecoration: string = ""
    let Content: JSX.Element = <>{rt?.plain_text}</>
    const color = rt?.annotations?.color
    let headingColor: string = color === "default" ? "black" : color
    let backgroundColor: object = {}

    if (headingColor?.includes("_background")) {
      headingColor = "black"
      backgroundColor = {
        backgroundColor: color?.replace("_background", ""),
        borderRadius: 2,
        width: "fit-content",
      }
    }


    if (rt?.annotations?.code) {
      backgroundColor = {
        ...codeStyles
      }
    }

    if (rt?.annotations?.strikethrough) {
      textDecoration = textDecoration + " line-through "
    }
    
    if (rt?.annotations?.underline) {
      textDecoration = textDecoration + " underline "
    }

    const generalStyles = {
      fontFamily: "sans-serif",
      textDecoration: textDecoration,
      fontStyle: rt?.annotations?.italic ? "italic" : "unset",
      color: headingColor === "default" ? "#black" : headingColor,
      ...backgroundColor
    }

    if (contentLink) {
      Content = <a href={contentLink}>{Content}</a>
    }

    return <span style={generalStyles}>{Content}</span>
  }

  return (
    <>
      {richText?.map((rt: any, index: number) => {
        return <span key={index}>{constructContent(rt)}</span>
      })}
      {richText?.length === 0 && <div style={{ minHeight: "1em" }} />}
    </>
  )
}

export default Paragraph
