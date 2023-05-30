export const toggleHeadersBlocks = [
	{
		has_children: true,
		archived: false,
		type: "heading_1",
		heading_1: {
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
									content: "simple content",
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
								plain_text: "simple content",
								href: null,
							},
						],
						color: "default",
					},
				},
			],
			rich_text: [
				{
					type: "text",
					text: {
						content: "Empty Toggle H1",
						link: null,
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: "blue",
					},
					plain_text: "Empty Toggle H1",
					href: null,
				},
			],
			is_toggleable: true,
			color: "default",
		},
	},
	{
		has_children: true,
		archived: false,
		type: "heading_1",
		heading_1: {
			rich_text: [
				{
					type: "text",
					text: {
						content: "Toggle H1",
						link: null,
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: "blue",
					},
					plain_text: "Toggle H1",
					href: null,
				},
			],
			is_toggleable: true,
			color: "default",
		},
	},
	{
		has_children: true,
		archived: false,
		type: "heading_2",
		heading_2: {
			rich_text: [
				{
					type: "text",
					text: {
						content: "Toggle H2",
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
					plain_text: "Toggle H2",
					href: null,
				},
			],
			is_toggleable: true,
			color: "default",
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
	},
	{
		has_children: true,
		archived: false,
		type: "heading_2",
		heading_2: {
			rich_text: [
				{
					type: "text",
					text: {
						content:
							"Lorem ipsum dolor sit amet. Id cumque eligendi et dolorem nesciunt aut doloremque molestiae aut magnam minima. Ut sapiente ullam aut voluptates ducimus 33 dolores voluptatem. Quo porro perferendis qui impedit unde hic recusandae asperiores ut quia officiis qui beatae cumque aut rerum voluptas! Et molestiae deleniti non commodi earum sit soluta voluptatibus?",
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
					plain_text:
						"Lorem ipsum dolor sit amet. Id cumque eligendi et dolorem nesciunt aut doloremque molestiae aut magnam minima. Ut sapiente ullam aut voluptates ducimus 33 dolores voluptatem. Quo porro perferendis qui impedit unde hic recusandae asperiores ut quia officiis qui beatae cumque aut rerum voluptas! Et molestiae deleniti non commodi earum sit soluta voluptatibus?",
					href: null,
				},
			],
			is_toggleable: true,
			color: "default",
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
	},
	{
		has_children: true,
		archived: false,
		type: "heading_3",
		heading_3: {
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
									content: "simple content",
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
								plain_text: "simple content",
								href: null,
							},
							{
								type: "text",
								text: {
									content: "strike through",
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
								plain_text: "strike through",
								href: null,
							},
						],
						color: "default",
					},
				},
				{
					has_children: false,
					archived: false,
					type: "image",
					image: {
						caption: [],
						type: "external",
						external: {
							url: "https://images.unsplash.com/photo-1682511366293-c34ecd291e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
						},
					},
				},
				{
					object: "block",
					has_children: true,
					archived: false,
					type: "heading_2",
					heading_2: {
						rich_text: [
							{
								type: "text",
								text: {
									content: "Headers H2",
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
								plain_text: "Headers H2",
								href: null,
							},
						],
						is_toggleable: true,
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
											content: "simple content",
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
										plain_text: "simple content",
										href: null,
									},
									{
										type: "text",
										text: {
											content: "strike \nthrough",
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
										plain_text: "strike \nthrough",
										href: null,
									},
								],
								color: "default",
							},
						},
					],
				},
			],
			rich_text: [
				{
					type: "text",
					text: {
						content: "Toggle H3",
						link: null,
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: "green",
					},
					plain_text: "Toggle H3",
					href: null,
				},
			],
			is_toggleable: true,
			color: "default",
		},
	},
];
