import React from "react";
import { toDoListProps } from "../../../types/lists";
import { constructTextFromBlocks } from "../../../helpers/text";
import { RichTextProps } from "../../../types/general";
import "./todoList.css";

interface CheckBoxProps {
	checked: boolean;
}

const ToDoList = (props: toDoListProps) => {
	const listItems: RichTextProps[] = props?.todoListProps?.rich_text;
	const checked: boolean = props?.todoListProps?.checked;

	const checkedStyle = checked
		? {
				textDecoration: "line-through",
		  }
		: {};

	return (
		<pre className="TodoListOverallContainer" style={props?.listStyles}>
			<CheckBox checked={checked} />

			{constructTextFromBlocks(
				listItems,
				checkedStyle,
				checked ? "gray" : "black"
			)}
		</pre>
	);
};

const CheckBox = (props: CheckBoxProps) => {
	const checked = props?.checked;
	const checkedColor = "#338bff";
	const boxStyle = {
		border: checked
			? `1.5px solid ${checkedColor}`
			: "1.5px solid rgba(0,0,0,0.8)",
	};

	const checkedStyle = {
		backgroundColor: checkedColor,
	};

	const check = (
		<>
			<div className="ToDoListCheckRight" />
			<div className="ToDoListCheckLeft" />
		</>
	);
	return (
		<div style={boxStyle} className="ToDoListCheckContainer">
			{checked && (
				<div className="ToDoListCheckCheckContainer" style={checkedStyle}>
					{check}
				</div>
			)}
		</div>
	);
};

export default ToDoList;
