"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Bars = require("./Bars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinearBar(props) {
  return /*#__PURE__*/_react.default.createElement(_Bars.LinearBarContainer, {
    containerBGColor: props.containerBGColor,
    width: props.width,
    height: "3px"
  }, /*#__PURE__*/_react.default.createElement(_Bars.LinearInnerBar, {
    barColor: props.barColor,
    completed: props.completed,
    height: props.height
  }));
}

LinearBar.defaultProps = {
  containerBGColor: "#222",
  width: "400px",
  height: "20px",
  barColor: "#020",
  completed: 0
};
var _default = LinearBar;
exports.default = _default;