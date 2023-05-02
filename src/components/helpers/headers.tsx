import React from "react";
import { getStyles } from "./generalStyles";
import { RichTextProps } from "../types/general";

import "../helpers/general.css";

export const constructHeaderContent = (rt: any, styleOverrides: React.CSSProperties = {}) => {
	const headerLink = rt?.href;
	let headingContent: JSX.Element = <>{rt?.plain_text}</>;
	const styles = getStyles(rt?.annotations, rt?.annotations?.color, !!rt?.href);

	if (headerLink) {
		headingContent = (
			<a href={headerLink} style={{...styles, ...styleOverrides}}>
				{headingContent}
			</a>
		);
	}

	headingContent = <span style={{...styles, ...styleOverrides}}>{headingContent}</span>;

	return headingContent;
};

export const constructHeaderTags = (
	type: string,
	richText: RichTextProps[],
	styleOverrides?: React.CSSProperties
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
				<h1 className="NotionBlocksHeader1Tag">
					{richText?.map((rt: any, index: number) => {
						return <span key={index}>{constructHeaderContent(rt, styleOverrides)}</span>;
					})}
				</h1>
			)}

			{type === "heading_2" && (
				<h2 className="NotionBlocksHeader2Tag">
					{richText?.map((rt: any, index: number) => {
						return <span key={index}>{constructHeaderContent(rt, styleOverrides)}</span>;
					})}
				</h2>
			)}

			{type === "heading_3" && (
				<h3 className="NotionBlocksHeader3Tag">
					{richText?.map((rt: any, index: number) => {
						return <span key={index}>{constructHeaderContent(rt, styleOverrides)}</span>;
					})}
				</h3>
			)}
		</pre>
	);
};
