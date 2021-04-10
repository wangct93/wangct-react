"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _history = require("history");

var _globalUtil = require("../utils/globalUtil");

var history = (0, _globalUtil.getConfig)('history');

if (!history) {
  history = (0, _globalUtil.getConfig)('historyMode') === 'hash' ? (0, _history.createHashHistory)() : (0, _history.createBrowserHistory)();
  (0, _globalUtil.setConfig)('history', history);
}

var _default = history;
exports["default"] = _default;