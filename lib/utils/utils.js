"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMounted = isMounted;
exports.getText = getText;
exports.getValue = getValue;
exports.getInputCom = getInputCom;
exports.getDivProps = getDivProps;
exports.getIconScriptUrl = getIconScriptUrl;
exports.setIconScriptUrl = setIconScriptUrl;
exports.setConfig = setConfig;
exports.getConfig = getConfig;

var _Input = _interopRequireDefault(require("../Input"));

var _Select = _interopRequireDefault(require("../Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 判断组件是否在DOM树里
 * @param target
 * @returns {*}
 */
function isMounted(target) {
  return target.updater && target.updater.isMounted && target.updater.isMounted(target);
}
/**
 * 获取文本
 * @param target
 * @param data
 */


function getText(target, data) {
  data = data || {};
  var formatter = target.getProp ? target.getProp('textFormatter') : this.props.textFormatter;

  if (formatter) {
    return formatter(data.text, data);
  }

  return data.text;
}
/**
 * 获取文本
 * @param target
 * @param data
 */


function getValue(target, data) {
  data = data || {};
  var formatter = target.getProp ? target.getProp('valueFormatter') : this.props.valueFormatter;

  if (formatter) {
    return formatter(data.value, data);
  }

  return data.value;
}
/**
 * 获取输入组件
 * @param type
 * @returns {*}
 */


function getInputCom(type) {
  var map = {
    input: _Input["default"],
    select: _Select["default"]
  };
  return map[type];
}
/**
 * 获取div的属性
 * @param props
 */


function getDivProps(props) {
  var newProps = _objectSpread({}, props);

  var fields = ['column', 'verticalCenter', 'wrap', 'draw', 'data', 'showList', 'showPreview'];
  fields.forEach(function (field) {
    delete newProps[field];
  });
  return newProps;
}

function getIconScriptUrl() {
  return getConfig('iconScriptUrl');
}

function setIconScriptUrl(url) {
  setConfig('iconScriptUrl', url);
}

var cacheConfig = {};

function setConfig(key, value) {
  cacheConfig[key] = value;
}

function getConfig(key) {
  return cacheConfig[key];
}