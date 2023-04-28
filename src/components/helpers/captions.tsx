import React from "react";
import { getStyles } from "../helpers/generalStyles";
import { CaptionProps, RichTextProps, StylesProps } from "../types/general";
import "./caption.css";


export const constructCaptionFromBlocks = (captionBlocks: CaptionProps[]|RichTextProps[]) => {
  return (
    <div className="CaptionCaptionBox">
      {captionBlocks?.map((caption: CaptionProps|RichTextProps, key: number) => {
        return <span key={key}>{ constructCaption(caption)}</span>
      })}
    </div>
  )
}
export const constructCaption = (co: CaptionProps|RichTextProps) => {
	const styles: StylesProps= getStyles(
		co?.annotations,
		co?.annotations?.color,
		!!co?.href,
		true
  );
  
	const plainText = co?.plain_text;
	
  if (co?.href)
		return (
			<a style={styles} href={co?.href}>
				{plainText}
			</a>
		);

	return <span style={styles}>{plainText}</span>;
};
