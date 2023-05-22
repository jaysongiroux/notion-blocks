import React from "react";
import { ToggleHeaderProps } from "../../types/headers";
import { constructHeaderTags } from "../../helpers/headers";
import NotionBlocks from "../../NotionBlocks/NotionBlocks";

import "./toggleHeaders.css";

const ToggleHeaders = (props: ToggleHeaderProps) => {
	const constructProps = (parentProps: any) => {
		const propsWithoutBlocks = Object.assign({}, parentProps);
		delete propsWithoutBlocks?.blocks;
		delete propsWithoutBlocks?.children;
		delete propsWithoutBlocks?.toggleHeaderBlock;
		delete propsWithoutBlocks?.type;
		return propsWithoutBlocks;
	};

	const hasChildren = props?.children && props?.children?.length > 0;

	return (
		<>
			<div className="ToggleHeaderTitleContainer">
				<div className="ToggleHeaderBackgroundButton">
					<svg
						width="14"
						height="14"
						className={`ToggleHeaderTriangleIcon ToggleHeaderTriangleIconOpen`}
					>
						<polygon
							className="ToggleHeaderTriangleIconOpenIcon"
							points="7 1, 1 12, 12 12"
							fill="#000"
						/>
					</svg>
				</div>
				<div className="ToggleHeaderContainer">
					{constructHeaderTags(
						props?.type,
						props?.toggleHeaderBlock?.rich_text,
						props?.toggleHeaderStyles
					)}
				</div>
			</div>
			<div className="ToggleHeaderDrawerContainer">
				{hasChildren && (
					<NotionBlocks blocks={props?.children} {...constructProps(props)} />
				)}
			</div>
		</>
	);
};

export default ToggleHeaders;
