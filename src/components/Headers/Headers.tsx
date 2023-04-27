import React from 'react'
import { HeaderProps, HeaderStylesProps } from '../types/headers'
import { getStyles } from '../helpers/generalStyles'

const Headers = (props: HeaderProps) => {
  const richText = props?.headerBlock?.rich_text

  const constructContent = (rt: any) => {
    const headerLink = rt?.href
    let headingContent: JSX.Element = <>{rt?.plain_text}</>
    const styles = getStyles(rt?.annotations, rt?.annotations?.color, !!rt?.href)
    
    if (headerLink) {
      headingContent = <a href={headerLink} style={styles}>{headingContent}</a>
    }

    return <span style={styles}>{headingContent}</span>
  }

  return (
    <>
      {props?.type === "heading_1" && <h1>{richText?.map((rt: any, index: number) => {
        return <span key={index}>{constructContent(rt)}</span>
      })}</h1>}

      {props?.type === "heading_2" && <h2>{richText?.map((rt: any, index: number) => {
        return <span key={index}>{constructContent(rt)}</span>
      })}</h2>}

      {props?.type === "heading_3" && <h3>{richText?.map((rt: any, index: number) => {
        return <span key={index}>{constructContent(rt)}</span>
      })}</h3>}
    </>
  )
}

export default Headers
