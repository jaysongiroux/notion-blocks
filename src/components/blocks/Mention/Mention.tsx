import React from "react";
import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";
import { constructText, handleColor } from "../../helpers/utils";
import { MentionProps } from "../../types/mention";

const Mention = (props: MentionProps) => {
	const { text, overrides, colorOverride } = props;
	const {
		getArrowProps,
		getTooltipProps,
		setTooltipRef,
		setTriggerRef,
		visible,
	} = usePopperTooltip();
	return (
		<div>
			<a
				type="button"
				ref={setTriggerRef}
				className="NotionBlocksMentionTriggerContainer"
			>
				{constructText(
					text,
					overrides,
					handleColor(text?.annotations?.color, colorOverride)
				)}
			</a>
			{visible && (
				<div
					ref={setTooltipRef}
					{...getTooltipProps({ className: "tooltip-container" })}
				>
					<div {...getArrowProps({ className: "tooltip-arrow" })} />
					<div className="NotionBlocksMentionTooltipContentContainer">
						<img
							src={text?.mention?.user?.avatar_url}
							alt={text?.mention?.user?.name}
							className="NotionBlocksMentionOverlayAvatarImage"
						/>
						<span className="NotionBlocksMentionOverlayUserName">
							{text?.mention?.user?.name}
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Mention;
