import React from "react";
import { NumberListProps } from "../../../types/lists";
import { NumberedListBlock } from "../../../types/general";
import { constructTextFromBlocks } from "../../../helpers/text";
import NotionBlocks from "../../../NotionBlocks/NotionBlocks";
import "./numberList.css";

const NumberList = (props: NumberListProps) => {
	const blocks: NumberedListBlock[] = props?.numberedNumberBlock;

	return (
		<ol className="NumberListOLContainer" style={props?.listStyles}>
			{blocks?.map((block: NumberedListBlock, key: number) => (
				<div key={key}>
					<pre
						className={`NumberListPreTag ${
							block?.isChild && "NumberListPreChild "
						}`}
					>
						{constructTextFromBlocks(block?.numbered_list_item?.rich_text)}
					</pre>
					<ul className={`NumberListSubList`}>
						{block?.numbered_list_item?.children?.map(
							(childBlock: any, key: number) => {
								return (
									<li key={key} className={"NumberListSubList"}>
										<NotionBlocks blocks={[childBlock]} {...props} />
									</li>
								);
							}
						)}
					</ul>
				</div>
			))}
		</ol>
	);
};

export default NumberList;
