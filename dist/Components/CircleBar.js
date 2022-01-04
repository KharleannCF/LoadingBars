"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Bars = require("./Bars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CircleBar = props => {
  const {
    size,
    strokeWidth,
    backgroundColor,
    barColor,
    progress
  } = props;
  const [offset, setOffset] = (0, _react.useState)(0);
  const circleRef = (0, _react.useRef)(null);
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  (0, _react.useEffect)(() => {
    setOffset((100 - progress) / 100 * circumference);
    circleRef.current.style = "transition: stroke-dashoffset 850ms ease-in-out;";
  }, [setOffset, circumference, progress, offset]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Bars.Svg, {
    width: size,
    height: size
  }, /*#__PURE__*/_react.default.createElement(_Bars.CircleBg, {
    stroke: backgroundColor,
    cx: center,
    cy: center,
    r: radius,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/_react.default.createElement(_Bars.Circle, {
    ref: circleRef,
    stroke: barColor,
    cx: center,
    cy: center,
    r: radius,
    strokeWidth: strokeWidth,
    strokeDasharray: circumference,
    strokeDashoffset: offset
  }), /*#__PURE__*/_react.default.createElement(_Bars.Text, {
    x: center,
    y: center
  }, progress)));
};

CircleBar.defaultPros = {
  progress: 0,
  size: 500,
  strokeWidth: 15,
  backgroundColor: "#222",
  barColor: "#7ea9e1"
};
var _default = CircleBar;
exports.default = _default;