import styled from "styled-components";

const LinearBarContainer = styled.div`
	background-color: ${(props) =>
		props.containerBGColor ? props.containerBGColor : "#222"};
	border-radius: 13px;
	width: ${(props) => (props.width ? props.width : "100%")};
	padding: ${(props) => (props.height ? props.height : "3px")}; ;
`;

const LinearInnerBar = styled.div`
	background-color: ${(props) => (props.barColor ? props.barColor : "#050")};
	width: ${(props) =>
		props.completed !== "undefined" ? props.completed + "%" : "40px"};
	height: ${(props) => (props.height ? props.height : "20px")};
	border-radius: 10px;
	transition: width 850ms ease-in-out;
`;

const Svg = styled.svg`
	display: block;
	margin: 20px auto;
	max-width: 100%;
`;

const CircleBg = styled.circle`
	fill: none;
`;

const Circle = styled.circle`
	fill: none;
`;

const Text = styled.text`
	font-size: 2rem;
	text-anchor: middle;
	fill: #fff;
`;

export { LinearBarContainer, LinearInnerBar, Circle, CircleBg, Text, Svg };
