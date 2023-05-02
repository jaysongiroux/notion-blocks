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

| Prop               | type    | Description                                                                                              |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------------- |
| blocks             | object  | list of blocks that can be acquired from Notion's API                                                    |
| codeTheme          | string  | `light` or `dark`                                                                                        |
| containerStyle     | object  | Object to style container where blocks are rendered                                                      |
| codeOverlay        | boolean | To Show overlay in code block that allows users to copy code, and see the language within the code block |
| headerStyles       | object  | Style overrides for headers, These overrides do not include toggle headers                               |
| toggleHeaderStyles | object  | Style overrides for toggle headers. These styles do not include the content within the headers           |
| toggleStyles       | object  | Style overrides for toggle lists. These styles do not include the content within the headers             |
| codeStyles         | object  | styles placed onto the code block container.                                                             |
| pictureStyles      | object  | styles for pictures                                                                                      |
| calloutStyles      | object  | styles for callout container                                                                             |
| quoteStyles        | object  | styles for quote container                                                                               |
| listStyles         | object  | styles for individual block container                                                                    |
| columnStyles       | object  | styles for column container                                                                              |
| bookmarkStyles     | object  | styles for bookmark container                                                                            |

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
  - Toggle Header
    - Nesting
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
    - Text Color
    - Background Color
    - Bold
    - Italic
    - Link
    - Code
    - Underline
    - Strike Through
    - equations
- Lists
  - Numbered
  - Bulleted
  - TODO Lists
  - Toggle + Nesting
- Images
- Call Out
- Quote
- Divider
- Mentions
- Columns
  - 2 columns
  - 3 columns
- Equations
  - Note: Not all formats are supported yet
    - Example: `\sqrt[3]{27}` is not supported
    - Example: `dS >= 0` Some Comparison operators are not supported yet. 

TODO:
- Tables
- Make columns mobile responsive
# Toggles
Due to Notion's API limitations, Toggle Item's content is not provided by querying a page's blocks.
**Example**

```js
const { Client } = require("@notionhq/client");
const notion = new Client({
	auth: process.env.NOTION_KEY,
});

await notion.blocks.children.list({ block_id: postID });
```

If you would like to include the toggle's content, query the individual parent block ID

```js
const CHILDREN_OF_TOGGLE_BLOCK = await notion.blocks.children.list({
	block_id: TOGGLE_BLOCK_ID,
});

console.log(CHILDREN_OF_TOGGLE_BLOCK);

// {
//   object: 'list',
//   results: [
//     {
//       object: 'block',
//       has_children: false,
//       archived: false,
//       type: 'paragraph',
//       paragraph: [Object]
//     }
//   ],
//   next_cursor: null,
//   has_more: false,
//   type: 'block',
//   block: {}
// }
```

Once you query the Toggle and get the children, place them in the toggle's block:

```js
  // Toggle Header Object
  {
    "has_children": true,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
        "rich_text": [
            {
                "type": "text",
                "text": {
                    "content": "Toggle H1",
                    "link": null
                },
                "annotations": {
                    "bold": false,
                    "italic": false,
                    "strikethrough": false,
                    "underline": false,
                    "code": false,
                    "color": "default"
                },
                "plain_text": "Toggle H1",
                "href": null
            }
        ],
        "is_toggleable": true,
        "color": "default"
    },
    // Added field for children blocks within toggle field
    "children": [
      {
        "object": 'block',
        "has_children": false,
        "type": 'paragraph',
        "paragraph": [Object]
      },
      {
        "object": 'block',
        "has_children": false,
        "archived": false,
        "type": 'paragraph',
        "paragraph": {
          "color": "default",
          "rich_text": [
              {
                "type": 'text',
                "text": {
                  "content": "foo",
                  "link": null
                },
                "annotations": {
                  "bold": false,
                  "italic": false,
                  "strikethrough": false,
                  "underline": false,
                  "code": false,
                  "color": "default"
                },
                "plain_text": 'simple content',
                "href": null
              },
              ...
            ],
        }
      },
      ...
    ]
  },
```

---

# 2 & 3 Columns

Due to Notion's API limitations, Column Item's content is not provided by querying a page's blocks.

Note: Column Width is not supported. Each Width will be equal.

**Example**

```js
const { Client } = require("@notionhq/client");
const notion = new Client({
	auth: process.env.NOTION_KEY,
});

await notion.blocks.children.list({ block_id: postID });
```

If you would like to include the column's content, query the individual parent block ID

```js
const CHILDREN_OF_COLUMN_CONTENT = await notion.blocks.children.list({
	block_id: COLUMN_BLOCK_ID,
});

console.log(CHILDREN_OF_COLUMN_CONTENT);
// {
//   "children": [
//     {
//       "object": "block",
//       "type": "column_list",
//       "column_list": {
//         "children": [
//           {
//             "object": "block",
//             "type": "column",
//             "column": {
//               "children": [
//                 {
//                   "object": "block",
//                   "type": "paragraph",
//                   "paragraph": {
//                     "text": [
//                       {
//                         "type": "text",
//                         "text": {
//                           "content": "some text here"
//                         }
//                       }
//                     ]
//                   }
//                 }
//               ]
//             }
//           },
//           {
//             "object": "block",
//             "type": "column",
//             "column": {
//               "children": [
//                 {
//                   "object": "block",
//                   "type": "paragraph",
//                   "paragraph": {
//                     "text": [
//                       {
//                         "type": "text",
//                         "text": {
//                           "content": "some text here"
//                         }
//                       }
//                     ]
//                   }
//                 }
//               ]
//             }
//           }
//         ]
//       }
//     }
//   ]
// }
```

Once you have queried the column and have a list of the children within the colum, structure the block as below

```json
{
	"object": "block",
	"id": "abc123",
	"has_children": true,
	"archived": false,
	"type": "column_list",
	"column_list": {},
	"children": [
		{
			"object": "block",
			"type": "column_list",
			"column_list": {
				"children": [
					{
						"object": "block",
						"type": "column",
						"column": {
							"children": [
								{
									"object": "block",
									"type": "paragraph",
									"paragraph": {
										"text": [
											{
												"type": "text",
												"text": {
													"content": "some text here"
												}
											}
										]
									}
								}
							]
						}
					},
					{
						"object": "block",
						"type": "column",
						"column": {
							"children": [
								{
									"object": "block",
									"type": "paragraph",
									"paragraph": {
										"text": [
											{
												"type": "text",
												"text": {
													"content": "some text here"
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
}
```

# Development

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
