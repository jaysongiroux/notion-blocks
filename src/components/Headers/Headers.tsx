import React from 'react'
import { HeaderProps } from '../types/headers'

const Headers = (props: HeaderProps) => {
  const headingContent = props?.headerBlock?.rich_text?.plain_text
  const headingColor = props?.headerBlock?.color

  const generalStyles = {
    fontWeight: "bold",
    fontFamily: "'Roboto', sansserif",
    color: headingColor === "default" ? "#000000" : headingColor
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

  
  const headerStyles = {
    'heading_1': header1Styles,
    'heading_2': header2Styles,
    'heading_3': header3Styles
  }

  switch (props?.type) { 
    case ("heading_1"):
      return <h1 style={headerStyles.heading_1}>{headingContent}</h1>
    case ("heading_2"):
      return <h2 style={headerStyles.heading_2}>{headingContent}</h2>
    case ("heading_3"):
      return <h3 style={headerStyles.heading_3}>{headingContent}</h3>
    default:
      return <div>{props?.type}, { headingContent}</div>
  }
}

export default Headers
