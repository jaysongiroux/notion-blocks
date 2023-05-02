import React from "react";
import { ColumnsProps } from "../types/columns";
import NotionBlocks from "../NotionBlocks/NotionBlocks";
import "./columns.css";

const Columns = (props: ColumnsProps) => {
	const columns = props?.columnBlock;
	const numberOfColumns = columns?.length;
	const columnWidth = 100 / numberOfColumns;

	const constructProps = (blocks: any[]) => {
		return {
			...props,
			blocks,
		};
	};
	return (
		<div className="NotionBlocksColumnsContainer" style={props?.columnStyles}>
			{columns?.map((column: any, key: number) => {
				return (
					<div key={key} style={{ width: `${columnWidth}%` }}>
						<NotionBlocks {...constructProps(column?.children)} />
					</div>
				);
			})}
		</div>
	);
};

export default Columns;
