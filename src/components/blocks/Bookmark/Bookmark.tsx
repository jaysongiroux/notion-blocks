import React from "react";
import { BookmarkProps } from "../../types/Bookmark";
import { constructCaptionFromBlocks } from "../../helpers/captions";

import "./bookmark.css";

const Bookmark = (props: BookmarkProps) => {
	const { url, caption } = props?.bookmarkBlock;

	return (
		<>
			<a
				style={props?.bookmarkStyles}
				className="NotionBlocksBookMarkATag"
				href={url}
			>
				{url
					.replaceAll("https://", "")
					.replaceAll("http://", "")
					.replaceAll("www.", "")}
			</a>
			<div className="NotionBlocksBookMarkCaption">
				{constructCaptionFromBlocks(caption)}
			</div>
		</>
	);
};

export default Bookmark;
