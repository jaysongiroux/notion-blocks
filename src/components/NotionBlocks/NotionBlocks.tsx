import React from 'react'
import Headers from '../Headers/Headers'

export interface NotionBlocksProps { 
  blocks: any[]
}

const NotionBlocks = (props: NotionBlocksProps) => {
  
  const handleComponent = (block: any) => { 
    return <div>hello world</div>
    switch (block?.type) {
      case 'heading_1':
        return <Headers headerBlock={block?.heading_1} type="h1"/>
      case 'heading_2':
        return <Headers headerBlock={block?.heading_2} type="h2"/>
      case 'heading_3':
        return <Headers headerBlock={block?.heading_3} type="h3"/>
      default:
        return null
    }
  }

  if(!props?.blocks || props?.blocks?.length === 0) return <></>

  return (
    <div>
      {props?.blocks?.map((block: any, index: number) => (
        <div key={index}>
          {handleComponent(block)}
        </div>
      ))}
    </div>
  )
}

export default NotionBlocks
