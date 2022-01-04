"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Svg = exports.LinearInnerBar = exports.LinearBarContainer = exports.CircleBg = exports.Circle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const LinearBarContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tbackground-color: ", ";\n\tborder-radius: 13px;\n\twidth: ", ";\n\tpadding: ", "; ;\n"])), props => props.containerBGColor ? props.containerBGColor : "#222", props => props.width ? props.width : "100%", props => props.height ? props.height : "3px");

exports.LinearBarContainer = LinearBarContainer;

const LinearInnerBar = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tbackground-color: ", ";\n\twidth: ", ";\n\theight: ", ";\n\tborder-radius: 10px;\n\ttransition: width 850ms ease-in-out;\n"])), props => props.barColor ? props.barColor : "#050", props => props.completed !== "undefined" ? props.completed + "%" : "40px", props => props.height ? props.height : "20px");

exports.LinearInnerBar = LinearInnerBar;

const Svg = _styledComponents.default.svg(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tmargin: 20px auto;\n\tmax-width: 100%;\n"])));

exports.Svg = Svg;

const CircleBg = _styledComponents.default.circle(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\tfill: none;\n"])));

exports.CircleBg = CircleBg;

const Circle = _styledComponents.default.circle(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\tfill: none;\n"])));

exports.Circle = Circle;

const Text = _styledComponents.default.text(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n\tfont-size: 2rem;\n\ttext-anchor: middle;\n\tfill: #fff;\n"])));

exports.Text = Text;