import React, { useState } from "react";
import { ToggleHeaderProps, DrawerProps } from "../../types/headers";
import { constructHeaderTags } from "../../helpers/headers";
import AnimateHeight from "react-animate-height";
import NotionBlocks from "../../NotionBlocks/NotionBlocks";

import "./toggleHeaders.css";

const ToggleHeaders = (props: ToggleHeaderProps) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div
				className="ToggleHeaderTitleContainer"
				onClick={() => setOpen(!open)}
			>
				<div className="ToggleHeaderBackgroundButton">
					<svg
						width="14"
						height="14"
						className={`ToggleHeaderTriangleIcon ${
							open && "ToggleHeaderTriangleIconOpen"
						}`}
					>
						<polygon className="ToggleHeaderTriangleIconOpenIcon" points="7 1, 1 12, 12 12" fill="#000" />
					</svg>
				</div>
				<div className="ToggleHeaderContainer">
					{constructHeaderTags(
						props?.type,
						props?.toggleHeaderBlock?.rich_text
					)}
				</div>
			</div>
			<div className="ToggleHeaderDrawerContainer">
				<Drawer open={open} drawerContents={props?.children} />
			</div>
		</>
	);
};

const Drawer = (props: DrawerProps) => {
	const open = props?.open;

	return (
		<AnimateHeight duration={500} height={open ? "auto" : 0}>
			{props?.drawerContents && <NotionBlocks blocks={props?.drawerContents} />}
		</AnimateHeight>
	);
};

export default ToggleHeaders;
