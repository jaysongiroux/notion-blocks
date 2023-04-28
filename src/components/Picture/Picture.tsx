import React from "react";
import { PictureProps } from "../types/picture";
import { CaptionProps } from "../types/general";
import { constructCaptionFromBlocks } from "../helpers/captions";

const Picture = (props: PictureProps) => {
  const resolveImageURL = () => {
    const url: string | undefined = props?.pictureBlock[props?.pictureBlock?.type]?.url
    if (url) {
      return url
    }
    return null
  }

  const style = {
    width: "100%",
    borderRadius: "4px",
    marginTop: 8
  }

  const url = resolveImageURL()
  const captionBlocks: CaptionProps[] = props?.pictureBlock?.caption
  return (
    <>
      {url && (
        <img style={ style} src={url} alt={""} />
      )}
      {captionBlocks.length > 0 && (
        constructCaptionFromBlocks(captionBlocks)
      )}
    </>
  )
};

export default Picture;
