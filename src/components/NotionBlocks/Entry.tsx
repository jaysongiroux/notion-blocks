import React from 'react'
import "./notionBlocksEntry.css"

interface EntryProps {
  children: any;
  styles?: React.CSSProperties;
}

const Entry = (props: EntryProps) => {
  return (
    <div className="notionBlocksEntry" style={props?.styles}>
      {props.children}
    </div>
  )
}

export default Entry;