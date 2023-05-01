import React from 'react'
import { HeaderProps } from '../../types/headers'
import { constructHeaderTags } from '../../helpers/headers'

const Headers = (props: HeaderProps) => {
  const richText = props?.headerBlock?.rich_text
  return constructHeaderTags(props?.type, richText)
}

export default Headers
