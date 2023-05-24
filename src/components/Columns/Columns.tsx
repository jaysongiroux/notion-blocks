import React from "react";
import { ColumnsProps } from "../types/columns";
import HandleComponent from "../helpers/handler";

import "./columns.css";

const Columns = (props: ColumnsProps) => {
	const columns = props?.columnBlock;
	const numberOfColumns = columns?.length;
	const columnWidth = 100 / numberOfColumns;

	return (
		<div className="NotionBlocksColumnsContainer" style={props?.columnStyles}>
			{columns?.map((column: any, key: number) => {
				return (
					<div key={key} style={{ width: `${columnWidth}%` }}>
						{column?.children?.map((block: any, index: number) => (
							<HandleComponent
								block={block}
								key={index}
								additionalProps={props}
							/>
						))}
					</div>
				);
			})}
		</div>
	);
};

export default Columns;
