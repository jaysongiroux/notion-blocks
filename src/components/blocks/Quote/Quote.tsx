import React from "react";
import { RichTextProps } from "../../types/general";
import "./quote.css"
import { constructTextFromBlocks } from "../../helpers/text";
import { QuoteProps } from "../../types/quote";

const Quote = (props: QuoteProps) => {
  const quoteBlocks: RichTextProps[]= props?.quoteBlock?.rich_text
  return (
    <pre className="QuoteContainer" style={props.quoteStyles}>
      {constructTextFromBlocks(quoteBlocks)}
    </pre>
  )
};

export default Quote;
