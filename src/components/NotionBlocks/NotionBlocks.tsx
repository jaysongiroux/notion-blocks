import React from 'react'
import Headers from '../Headers/Headers'

export interface NotionBlocksProps { 
  blocks: any[]
}

const NotionBlocks = (props: NotionBlocksProps) => {
  
  const handleComponent = (block: any) => { 
    switch (block?.type) {
      case 'heading_3':
      case 'heading_2':
      case 'heading_1':
        return <Headers headerBlock={block[block?.type]} type={block?.type} />
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
