import React from "react";
import "./ChildPage.css";

interface ChildPageProps {
	childPageBlock: {
		child_page: {
			title: string;
		};
		id: string;
	};
	onChildPageClick: (childPageID: string, childPageTitle: string) => void;
}

const ChildPage = (props: ChildPageProps) => {
	const title: string = props?.childPageBlock?.child_page?.title;

	return (
		<div
			className="ChildPageContainer"
			onClick={() => props.onChildPageClick(props?.childPageBlock.id, title)}
		>
			<span>
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 24 24"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="none"
						stroke="#000"
						strokeWidth="2"
						d="M14,1 L14,8 L21,8 M21,23 L3,23 L3,1 L15,1 L18,4 L21,7 L21,23 L21,23 L21,23 Z"
					/>
				</svg>
			</span>
			<span className="ChildPageText">{title}</span>
		</div>
	);
};

export default ChildPage;
