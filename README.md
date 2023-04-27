# Notion-Blocks
<div align="center">

  ![alt text](https://github.com/jaysongiroux/notion-blocks/blob/master/assets/notionBlocks.png?raw=true)

  [![semantic-release: React](https://img.shields.io/badge/semantic--release-react-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
  ![Main Workflow](https://github.com/jaysongiroux/notion-blocks/actions/workflows/main.yml/badge.svg)
  [![npm version](https://badge.fury.io/js/notion-blocks.svg)](https://badge.fury.io/js/notion-blocks)
  [![Badge](https://202o2716cl9w.runkit.sh)](http://notion-blocks.jasongiroux.com)

</div>
A React component package to be given the `blocks` from the notion API to render in browser

[NPM PACKAGE](https://www.npmjs.com/package/notion-blocks)

[LIVE DEMO](http://notion-blocks.jasongiroux.com)

## Use
```js
import {NotionBlocks} from 'notion-blocks'

export const example = () => {
  const blocks = BLOCKS_FROM_NOTION_API;

  return (
    <NotionBlocks blocks={blocks}>
  )
}
```

### API
|  Prop  |  type  |  Description  |
| ------ | ------ | ------------- |
|blocks  |object  |list of blocks that can be acquired from Notion's API|


## Supports
- Headers
  - Text Color
  - Background Color
  - Bold
  - Italic
  - Link
  - Code
  - Underline
  - Strike Through
- Paragraph
  - Text Color
  - Background Color
  - Bold
  - Italic
  - Link
  - Code
  - Underline
  - Strike Through
- Code Block
  - All Notion Supported Languages
  - Syntax Highlighting
  - Copy Button on Hover
  - Language Label On Hover
  - Stylized Captions
    -  Text Color
    - Background Color
    - Bold
    - Italic
    - Link
    - Code
    - Underline
    - Strike Through

TODO:
- Lists
  - Bulleted
  - Numbered
  - TODO Lists
  - Toggle
- Headers
  - Toggle Header
- Toggle
- Call Out
- Quote
- Images
- Tables
- Component Nesting (Ex. Toggle inside a toggle)
- General Styling/Polishing
- Storybook organization
- Exporting all components
- Additional Props to individually style components
  - example: `codeStyles = {backgroundColor: "Black"}`


## Local Setup + Contributing
**This is a work in process** that is purposefully written to be easily integrated with Notion's API.

### Setup
Install dependencies
```bash
yarn
```

### local StoryBook
[Live Demo](http://notion-blocks.jasongiroux.com)
```bash
yarn storybook
```

### Building
```bash
yarn rollup
```