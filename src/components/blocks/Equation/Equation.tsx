import React from "react";
import { EquationProps } from "../../types/equation";
import TeX from "@matejmazur/react-katex";

import "./equation.css";

const Equation = (props: EquationProps) => {
	return (
		<div className="EquationContainer" style={props?.equationStyles}>
			<TeX block math={props?.equationBlock?.expression} />
		</div>
	);
};

export default Equation;
