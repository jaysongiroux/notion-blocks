export const childPageBlocks = [
  {
    id: "abc123",
    object: "block",
    has_children: true,
    archived: false,
    type: "child_page",
    child_page: {
      title: "EXAMPLE EMBEDDED PAGE",
    },
    children: [
      {
        object: "block",
        has_children: false,
        archived: false,
        type: "paragraph",
        paragraph: {
          rich_text: [
            {
              type: "text",
              text: {
                content: "HELLO WORLD",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "HELLO WORLD",
              href: null,
            },
          ],
          color: "default",
        },
      },
    ],
  },
];
