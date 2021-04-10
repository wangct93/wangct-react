"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathJoin = pathJoin;
exports.pathTo = pathTo;
exports.pathMatch = pathMatch;

var _util = require("@wangct/util");

var _history = _interopRequireDefault(require("../modules/history"));

var _state = require("./state");

var _stringUtil = require("@wangct/util/lib/stringUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 路径合并
 * @param args
 * @returns {string}
 */
function pathJoin() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.join('/').replace(/\/+/g, '/');
}
/**
 * 路径跳转
 * @param path
 * @param qsParams
 * @param hash
 */


function pathTo(path) {
  var qsParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var hash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var qsString = (0, _util.isObj)(qsParams) ? (0, _util.stringify)(qsParams) : qsParams ? location.search.substr(1) : '';

  if (qsString) {
    path += path.includes('?') ? '&' : '?';
    path += qsString;
  }

  if (hash) {
    path += (0, _util.isStr)(hash) ? '#' + hash : location.hash;
  }

  return _history["default"].push(path);
}
/**
 * 路径匹配
  * @param targetPath
 * @param pathanme
 * @returns {boolean}
 */


function pathMatch(targetPath) {
  var pathanme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _state.getPathname)();
  return ('/' + (0, _stringUtil.toStr)(pathanme) + '/').startsWith('/' + (0, _stringUtil.toStr)(targetPath) + '/');
}