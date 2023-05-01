import { AnnotationsProps, StylesProps } from "../types/general";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
const tinycolor = require("tinycolor2");

export const getStyles = (
	annotations: AnnotationsProps,
	color: string,
	link: boolean = false,
	caption: boolean = false,
	colorOverride = null
) => {
	const styles: StylesProps = {
		fontFamily: "sans-serif",
		textDecoration: "",
	};

	if (annotations?.bold) {
		styles.fontWeight = "bold";
	}

	if (annotations?.italic) {
		styles.fontStyle = "italic";
	}

	if (annotations?.strikethrough) {
		styles.textDecoration = "line-through";
	}

	if (annotations?.underline) {
		styles.textDecoration = styles?.textDecoration + " underline ";
	}

	if (color?.includes("_background")) {
		styles.color = "black";
		styles.backgroundColor = color?.replace("_background", "");
		styles.paddingLeft = "2px";
		styles.paddingRight = "2px";
		styles.borderRadius = 2;
		styles.width = "fit-content";
		if (caption) {
			const tColor = tinycolor(styles.backgroundColor);
			tColor.setAlpha(0.25);
			styles.backgroundColor = tColor;
		}
	} else {
		styles.color = color === "default" ? "black" : color;
	}

	if (annotations?.code) {
		styles.backgroundColor = "rgb(230 230 230)";
		styles.paddingTop = 2;
		styles.paddingBottom = 2;
		styles.paddingLeft = 3;
		styles.paddingRight = 3;
		styles.borderRadius = 1;
		styles.width = "fit-content";
		styles.color = "#ff7070";
		styles.fontFamily = "monospace";
		styles.fontWeight = 100;
	}

	if (link && !annotations?.code) {
		if (styles?.color === undefined || color === "default") {
			styles.color = "blue";
		}
	}

	return styles;
};

export const getCodeTheme = (theme: string) => {
	switch (theme) {
		case "dark":
			return oneDark;
		default:
		case "light":
			return prism;
	}
};
