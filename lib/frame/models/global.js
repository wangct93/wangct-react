"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _history = _interopRequireDefault(require("../modules/history"));

var _config = _interopRequireDefault(require("../config/config"));

var _dic = require("../json/dic");

var _util = require("@wangct/util/lib/util");

var _state = require("../utils/state");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initState = {
  pathname: _history["default"].location.pathname,
  isTabRouter: _config["default"].isTabRouter,
  resizeSign: (0, _util.random)()
};
var namespace = _dic.Fields.globalNamespace;
var _default = {
  namespace: namespace,
  state: initState,
  effects: {},
  reducers: {},
  subscriptions: {
    listenPathname: listenPathname,
    windowResize: windowResize
  }
};
/**
 * 窗口大小改变监听事件
 */

exports["default"] = _default;

function windowResize() {
  window.addEventListener('resize', function () {
    (0, _state.updateModel)(namespace, {
      resizeSign: (0, _util.random)()
    });
  });
}
/**
 * 监听路径改变事件
 */


function listenPathname() {
  _history["default"].listen(function (match) {
    (0, _state.updateModel)(namespace, {
      pathname: match.pathname
    });
  });
}