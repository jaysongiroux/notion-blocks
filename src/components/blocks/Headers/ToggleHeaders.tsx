import React from "react";
import { ToggleHeaderProps } from "../../types/headers";
import { constructHeaderTags } from "../../helpers/headers";
import AnimateHeight from "react-animate-height";
import HandleComponent from "../../helpers/handler";
import "./toggleHeaders.css";

const ToggleHeaders = (props: ToggleHeaderProps) => {
	const [open, setOpen] = React.useState(false);

	const constructProps = (parentProps: any) => {
		const propsWithoutBlocks = Object.assign({}, parentProps);
		delete propsWithoutBlocks?.blocks;
		delete propsWithoutBlocks?.children;
		delete propsWithoutBlocks?.toggleHeaderBlock;
		delete propsWithoutBlocks?.type;
		return propsWithoutBlocks;
	};

	const height = open === true ? "auto" : 0;
	const hasChildren = props?.children ? props?.children?.length > 0 : false;

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
				<AnimateHeight duration={500} height={height}>
					{hasChildren && (
						<>
							{props?.children?.map((block: any, index: number) => {
								return (
									<HandleComponent
										key={index}
										block={block}
										additionalProps={constructProps(props)}
									/>
								);
							})}
						</>
					)}
				</AnimateHeight>
			</div>
		</>
	);
};

export default ToggleHeaders;
