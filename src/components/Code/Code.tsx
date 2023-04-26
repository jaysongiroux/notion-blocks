import React from 'react'
import { CodeProps} from '../types/code'
import { codeStyles } from '../styles/general'
import {codeBlockGeneralStyles} from '../styles/general'

const Code = (props: CodeProps) => {
  const richText: Array<object> = props?.codeBlock?.rich_text

  const constructContent = (rt: any) => {
    const plainText = rt?.text?.content
    
    return <pre style={{tabSize: 2}}>{plainText}</pre>
  }

  // TODO: code syntax highlighting
  // TODO: captions
  return (
    <>
      {}
    <div style={codeBlockGeneralStyles}>
        {richText?.map((rt: object, key: number) => {
          return (
            <div key={key} style={{whiteSpace: "pre-line"}}>
              {constructContent(rt)}
            </div>
          )
      })}
    </div>
    </>
  )
}

export default Code
