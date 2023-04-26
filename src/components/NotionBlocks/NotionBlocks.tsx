import React from 'react'
import Headers from '../Headers/Headers'
import Paragraph from '../Paragraph/Paragraph'
import Code from '../Code/Code'

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
      case 'paragraph':
        return <Paragraph paragraphBlock={block?.paragraph} />
      case 'code':
        return <Code codeBlock={block?.code} />
      default:
        return null
    }
  }

  if (!props?.blocks || props?.blocks?.length === 0) return <></>

  return (
    <div>
      {props?.blocks?.map((block: any, index: number) => (
        <div className="NotionBlocksEntry" key={index}>
          {handleComponent(block)}
        </div>
      ))}
    </div>
  )
}

export default NotionBlocks
