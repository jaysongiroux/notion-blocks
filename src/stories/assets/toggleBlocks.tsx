export const toggleListBlocks = [
	{
		has_children: true,
		archived: false,
		type: "toggle",
		toggle: {
			rich_text: [
				{
					type: "text",
					text: {
						content: "This is a toggle list ",
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
					plain_text: "This is a toggle list ",
					href: null,
				},
			],
			color: "default",
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
								content: "simple \n content\n\n",
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
							plain_text: "simple\n content\n",
							href: null,
						},
						{
							type: "text",
							text: {
								content: "strike\n\n through",
								link: null,
							},
							annotations: {
								bold: true,
								italic: false,
								strikethrough: true,
								underline: false,
								code: false,
								color: "default",
							},
							plain_text: "strike\n\n through",
							href: null,
						},
					],
					color: "default",
				},
			},
		],
	},
	{
		has_children: true,
		archived: false,
		type: "toggle",
		toggle: {
			rich_text: [
				{
					type: "text",
					text: {
						content: "This is a second toggle list ",
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
					plain_text: "This is a second toggle list ",
					href: null,
				},
			],
			color: "default",
		},
	},
];
