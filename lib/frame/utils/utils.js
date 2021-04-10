"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobalConfig = getGlobalConfig;
exports.setGlobalConfig = setGlobalConfig;
exports.showLoading = showLoading;
exports.getElem = getElem;
exports.openConfirm = openConfirm;
exports.setLocalStore = setLocalStore;
exports.getLocalStore = getLocalStore;
exports.isDevEnv = isDevEnv;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

var _util = require("@wangct/util");

var _react = _interopRequireDefault(require("react"));

var _state = require("./state");

var _Loading = _interopRequireDefault(require("../components/Loading"));

var _util2 = require("@wangct/util/lib/util");

var _globalUtil = require("./globalUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 获取全局配置
 */
function getGlobalConfig(key) {
  return (0, _globalUtil.getConfig)(key);
}
/**
 * 设置全局配置
 * @param key
 * @param value
 */


function setGlobalConfig(key, value) {
  (0, _globalUtil.setConfig)(key, value);
}
/**
 * 显示加载中
 * @param promise
 * @param message
 * @returns {Q.Promise<T> | Promise<any> | Promise<T>}
 */


function showLoading(promise) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '操作处理中，请稍候...';

  var content = _react["default"].createElement(_Loading["default"], {
    key: (0, _util2.random)(),
    loading: true,
    title: message
  });

  (0, _state.addFragment)(content);
  return (0, _util.toPromise)(promise)["finally"](function () {
    (0, _state.removeFragment)(content);
  });
}
/**
 * 获取元素
  * @param elem
 * @returns {HTMLElement}
 */


function getElem(elem) {
  return (0, _util.isStr)(elem) ? document.getElementById(elem) : elem;
}
/**
 * 确认弹窗
  * @param options
 */


function openConfirm(options) {
  _modal["default"].confirm(_objectSpread({}, options));
}
/**
 * 设置本地缓存
 * @param key
 * @param value
 */


function setLocalStore(key, value) {
  if (!(0, _util.isStr)(value)) {
    value = JSON.stringify(value);
  }

  localStorage.setItem(key, value);
}
/**
 * 获取本地缓存
 * @param key
 */


function getLocalStore(key) {
  var value = localStorage.getItem(key);
  return (0, _util2.catchError)(function () {
    return JSON.parse(value);
  }, value);
}
/**
 * 是否为开发环境
 * @author wangchuitong
 */


function isDevEnv() {
  var isDev = getGlobalConfig('isDev');

  if (isDev == null) {
    try {
      isDev = define_isDevEnv;
    } catch (e) {}
  }

  return isDev;
}