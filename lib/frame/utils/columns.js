"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textOverflowRender = textOverflowRender;

require("antd/lib/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _react = _interopRequireDefault(require("react"));

var _columns = _interopRequireDefault(require("./columns.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 省略文本提示渲染
 * @param v
 */
function textOverflowRender(v) {
  return _react["default"].createElement("div", {
    className: _columns["default"].text_overflow
  }, _react["default"].createElement(_tooltip["default"], {
    title: v
  }, _react["default"].createElement("div", {
    className: _columns["default"].text_overflow_content
  }, v)));
}