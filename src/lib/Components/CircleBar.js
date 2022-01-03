import React, { useState, useEffect, useRef } from "react";
import propTypes from "prop-types";
import { CircleBg, Circle, Text, Svg } from "./Bars";

const CircleBar = (props) => {
	const { size, strokeWidth, backgroundColor, barColor, progress } = props;

	const [offset, setOffset] = useState(0);
	const circleRef = useRef(null);
	const center = size / 2;
	const radius = size / 2 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;
	useEffect(() => {
		setOffset(((100 - progress) / 100) * circumference);
		circleRef.current.style =
			"transition: stroke-dashoffset 850ms ease-in-out;";
	}, [setOffset, circumference, progress, offset]);

	return (
		<>
			<Svg width={size} height={size}>
				<CircleBg
					stroke={backgroundColor}
					cx={center}
					cy={center}
					r={radius}
					strokeWidth={strokeWidth}
				/>
				<Circle
					ref={circleRef}
					stroke={barColor}
					cx={center}
					cy={center}
					r={radius}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={offset}
				/>
				<Text x={center} y={center}>
					{progress}
				</Text>
			</Svg>
		</>
	);
};

CircleBar.defaultPros = {
	progress: 0,
	size: 500,
	strokeWidth: 15,
	backgroundColor: "#222",
	barColor: "#7ea9e1",
};

export default CircleBar;
