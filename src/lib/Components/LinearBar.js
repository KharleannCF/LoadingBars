import React from "react";
import propTypes from "prop-types";
import { LinearBarContainer, LinearInnerBar } from "./Bars";

function LinearBar(props) {
	return (
		<LinearBarContainer
			containerBGColor={props.containerBGColor}
			width={props.width}
			height="3px"
		>
			<LinearInnerBar
				barColor={props.barColor}
				completed={props.completed}
				height={props.height}
			/>
		</LinearBarContainer>
	);
}

LinearBar.defaultProps = {
	containerBGColor: "#222",
	width: "400px",
	height: "20px",
	barColor: "#020",
	completed: 0,
};

export default LinearBar;
