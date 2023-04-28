import React from "react";
import { NumberListProps } from "../types/lists";
import { NumberedListBlock } from "../types/general";
import { constructTextFromBlocks } from "../helpers/text";
import "./numberList.css"

const NumberList = (props: NumberListProps) => {
  const blocks: NumberedListBlock[] = props?.numberedNumberBlock
  return (
    <ol>
      {blocks?.map((block: NumberedListBlock, key: number) => (
        <pre className={"NumberListPreTag"} key={key}>{constructTextFromBlocks(block?.numbered_list_item?.rich_text)}</pre>
      ))}
    </ol>
	);
};

export default NumberList;
