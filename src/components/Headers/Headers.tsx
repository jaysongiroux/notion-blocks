import React from 'react'
import { HeaderProps, HeaderStylesProps } from '../types/headers'

const Headers = (props: HeaderProps) => {
  const richText = props?.headerBlock?.rich_text

  const constructContent = (rt: any, type: string) => {
    const headerLink = rt?.href
    let headingContent: JSX.Element = <>{rt?.plain_text}</>
    const color = rt?.annotations?.color
    let headingColor: string = color === "default" ? "black" : color
    let backgroundColor: object = {}
    let textDecoration: string = ""

    if (headingColor?.includes("_background")) {
      headingColor = "black"
      backgroundColor = {
        backgroundColor: color?.replace("_background", ""),
        borderRadius: 2,
        width: "fit-content",
      }
    }

    if (rt?.annotations?.strikethrough) {
      textDecoration = textDecoration + " line-through "
    }
    
    if (rt?.annotations?.underline) {
      textDecoration = textDecoration + " underline "
    }

    if (rt?.annotations?.code) {
      backgroundColor = {
        backgroundColor: "rgb(211 211 211)",
        padding: 5,
        borderRadius: 2,
        width: "fit-content",
        color: "#ff3838",
        fontFamily: "monospace"
      }
    }

    const generalStyles = {
      fontWeight: "bold",
      fontFamily: "sans-serif",
      color: headingColor === "default" ? "#black" : headingColor,
      textDecoration: textDecoration,
      fontStyle: props?.headerBlock?.rich_text[0]?.annotations?.italic ? "italic" : "unset",
      ...backgroundColor
    }

    const header1Styles = {
      fontSize: 32,
      ...generalStyles
    }

    const header2Styles = {
      fontSize: 24,
      ...generalStyles
    }

    const header3Styles = {
      fontSize: 20,
      ...generalStyles
    }

    const headerStyles: HeaderStylesProps = {
      heading_1: header1Styles,
      heading_2: header2Styles,
      heading_3: header3Styles
    }

    if (headerLink) {
      headingContent = <a href={headerLink} style={{color: "unset"}}>{headingContent}</a>
    }

    return <span style={headerStyles[type as keyof HeaderStylesProps]}>{headingContent}</span>
  }

  return (
    <>
      {props?.type === "heading_1" && <h1>{richText?.map((rt: any, index: number) => {
        return <span key={index}>{constructContent(rt, props.type)}</span>
      })}</h1>}

      {props?.type === "heading_2" && <h2>{richText?.map((rt: any, index: number) => {
        return <span key={index}>{constructContent(rt, props.type)}</span>
      })}</h2>}

      {props?.type === "heading_3" && <h3>{richText?.map((rt: any, index: number) => {
        return <span key={index}>{constructContent(rt, props.type)}</span>
      })}</h3>}
    </>
  )
}

export default Headers
