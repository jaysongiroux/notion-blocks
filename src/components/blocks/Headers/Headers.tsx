import { HeaderProps } from '../../types/headers'
import { constructHeaderTags } from '../../helpers/headers'
import '../../helpers/general.css'

const Headers = (props: HeaderProps) => {
  const richText = props?.headerBlock?.rich_text
  return constructHeaderTags(props?.type, richText, props?.headerStyles)
}

export default Headers
