# Notion-Blocks

<div align="center">

![alt text](https://github.com/jaysongiroux/notion-blocks/blob/master/assets/notionBlocks-white-bg.png?raw=true)

[![semantic-release: React](https://img.shields.io/badge/semantic--release-react-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
![Main Workflow](https://github.com/jaysongiroux/notion-blocks/actions/workflows/main.yml/badge.svg)
[![npm version](https://badge.fury.io/js/notion-blocks.svg)](https://badge.fury.io/js/notion-blocks)
[![Badge](https://202o2716cl9w.runkit.sh)](http://notion-blocks.jasongiroux.com)

</div>
A React component package to be given the `blocks` from the notion API to render in browser

[NPM PACKAGE](https://www.npmjs.com/package/notion-blocks)

[LIVE DEMO](http://notion-blocks.jasongiroux.com)

## Use

### NotionBlocks

```js
import {NotionBlocks} from 'notion-blocks'
import 'notion-blocks/dist/styles/katex.css'


export const example = () => {
  const blocks = BLOCKS_FROM_NOTION_API;

  return (
    <NotionBlocks blocks={blocks}>
  )
}
```

### FetchNotionBlocks

```js
import { FetchNotionBlocks } from 'notion-blocks';

const { cover, response, blocks } = await FetchNotionBlocks({
  notionkey: process.env.NOTION_KEY,
  notionPageId: PAGE_ID,
});
```

## API

### NotionBlocks

| Prop               | type     | Description                                                                                              |
| ------------------ | -------- | -------------------------------------------------------------------------------------------------------- |
| blocks             | object   | list of blocks that can be acquired from Notion's API                                                    |
| codeTheme          | string   | `light` or `dark`                                                                                        |
| containerStyle     | object   | Object to style container where blocks are rendered                                                      |
| codeOverlay        | boolean  | To Show overlay in code block that allows users to copy code, and see the language within the code block |
| headerStyles       | object   | Style overrides for headers, These overrides do not include toggle headers                               |
| toggleHeaderStyles | object   | Style overrides for toggle headers. These styles do not include the content within the headers           |
| toggleStyles       | object   | Style overrides for toggle lists. These styles do not include the content within the headers             |
| codeStyles         | object   | styles placed onto the code block container.                                                             |
| pictureStyles      | object   | styles for pictures                                                                                      |
| calloutStyles      | object   | styles for callout container                                                                             |
| quoteStyles        | object   | styles for quote container                                                                               |
| listStyles         | object   | styles for individual block container                                                                    |
| columnStyles       | object   | styles for column container                                                                              |
| bookmarkStyles     | object   | styles for bookmark container                                                                            |
| equationStyles     | object   | styles for Equation container                                                                            |
| childPageStyles    | object   | styles for child page container                                                                          |
| tableStyle         | object   | styles for table container                                                                               |
| tableRowStyle      | object   | styles for all table rows except headers                                                                 |
| tableHeaderStyle   | object   | styles for table headers row and columns                                                                  |
| onChildPageClick   | function | function to be called if user clicks on child page block. `(id, title) => console.log(id, title)`        |

### FetchNotionBlocks

Function to only be used on the backend where secrets are not exposed to the client

| prop         | type   | description                    |
| ------------ | ------ | ------------------------------ |
| notionKey    | string | notion secret key              |
| notionPageId | string | ID of page you'd like to fetch |

## Not Supported

- link to page (not to be confused with child page or embedded pages which are supported)

# Development

## Local Setup

### Setup

Install dependencies

```bash
yarn
```

### local StoryBook

```bash
yarn storybook
```

### Building

```bash
yarn rollup
```
