import React from "react";

import { getStyles } from "./generalStyles";
import { RichTextProps } from "../types/general";
import "../helpers/general.css";

export const constructHeaderContent = (rt: any) => {
	const headerLink = rt?.href;
	let headingContent: JSX.Element = <>{rt?.plain_text}</>;
	const styles = getStyles(rt?.annotations, rt?.annotations?.color, !!rt?.href);

	if (headerLink) {
		headingContent = (
			<a href={headerLink} style={styles}>
				{headingContent}
			</a>
		);
	}

	headingContent = <span style={styles}>{headingContent}</span>;

	return headingContent;
};

export const constructHeaderTags = (
	type: string,
	richText: RichTextProps[],
) => {
	if (type === "toggle")
		return (
			<pre className="NotionBlocksPreTagLineBreak">
				{richText?.map((rt: any, index: number) => {
					return <span key={index}>{constructHeaderContent(rt)}</span>;
				})}
			</pre>
		);
	return (
		<pre className="NotionBlocksPreTagLineBreak">
			{type === "heading_1" && (
				<h1>
					{richText?.map((rt: any, index: number) => {
						return <span key={index}>{constructHeaderContent(rt)}</span>;
					})}
				</h1>
			)}

			{type === "heading_2" && (
				<h2>
					{richText?.map((rt: any, index: number) => {
						return <span key={index}>{constructHeaderContent(rt)}</span>;
					})}
				</h2>
			)}

			{type === "heading_3" && (
				<h3>
					{richText?.map((rt: any, index: number) => {
						return <span key={index}>{constructHeaderContent(rt)}</span>;
					})}
				</h3>
			)}
		</pre>
	);
};
