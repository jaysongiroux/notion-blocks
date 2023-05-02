export const bookmarkBlocks = [
	{
		has_children: false,
		archived: false,
		type: "bookmark",
		bookmark: {
			caption: [],
			url: "http://google.com",
		},
	},
	{
		has_children: false,
		archived: false,
		type: "bookmark",
		bookmark: {
			caption: [
				{
					type: "text",
					text: {
						content: "This is a ",
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
					plain_text: "This is a ",
					href: null,
				},
				{
					type: "text",
					text: {
						content: "caption",
						link: null,
					},
					annotations: {
						bold: true,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: "default",
					},
					plain_text: "caption",
					href: null,
				},
			],
			url: "http://facebook.com",
		},
	},
	{
		has_children: false,
		archived: false,
		type: "bookmark",
		bookmark: {
			caption: [],
			url: "http://yahoo.com",
		},
	},
];
