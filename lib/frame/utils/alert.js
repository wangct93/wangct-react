"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertSucInfo = alertSucInfo;
exports.alertErrInfo = alertErrInfo;

require("antd/es/message/style/css");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _stringUtil = require("@wangct/util/lib/stringUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 提示正确信息
 * @param msg
 */
function alertSucInfo(msg) {
  _message2["default"].success((0, _stringUtil.toStr)(msg));
}
/**
 * 提示错误信息
 * @param msg
 */


function alertErrInfo(msg) {
  _message2["default"].error((0, _stringUtil.toStr)(msg));
}