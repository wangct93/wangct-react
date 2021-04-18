"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTabRouter = isTabRouter;
exports.getFrameState = getFrameState;
exports.setFrameState = setFrameState;
exports.getPathname = getPathname;
exports.setStore = setStore;
exports.getStore = getStore;
exports.getState = getState;
exports.reduxConnect = reduxConnect;
exports.getResizeSign = getResizeSign;
exports.getRoutes = getRoutes;
exports.setRoutes = setRoutes;
exports.getFragmentList = getFragmentList;
exports.setFragmentList = setFragmentList;
exports.addFragment = addFragment;
exports.removeFragment = removeFragment;
exports.updateModel = updateModel;
exports.getDispatch = getDispatch;
exports.dispatch = dispatch;

var _reactRedux = require("react-redux");

var _utils = require("./utils");

var _dic = require("../json/dic");

var _util = require("@wangct/util");

var _arrayUtil = require("@wangct/util/lib/arrayUtil");

var _store = require("../modules/store");

var _util2 = require("@wangct/util/lib/util");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * 是否为选项卡路由
  */
function isTabRouter() {
  return getFrameState().isTabRouter;
}
/**
 * 获取框架state
 * @returns {*|{}}
 */


function getFrameState() {
  return getState(_dic.Fields.globalNamespace);
}
/**
 * 设置框架state
 * @returns {*|{}}
 */


function setFrameState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return updateModel(_dic.Fields.globalNamespace, state);
}
/**
 * 获取路径
 * @returns {*|{}}
 */


function getPathname() {
  return getFrameState().pathname;
}
/**
 * 设置store
 * @param store
 */


function setStore(store) {
  return (0, _utils.setGlobalConfig)('store', store);
}
/**
 * 获取store
 * @returns {{}}
 */


function getStore() {
  return (0, _utils.getGlobalConfig)('store');
}
/**
 * 获取state
 * @param namespace
 * @returns {*|{}}
 */


function getState() {
  var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var store = getStore();

  if (!store) {
    return {};
  }

  var state = store.getState();
  var namespaceState = namespace ? state[namespace] : state;
  return namespaceState || {};
}

window.getState = getState;
/**
 * connect别名
 * @param args
 */

function reduxConnect() {
  return _reactRedux.connect.apply(void 0, arguments);
}
/**
 * 获取窗口标志
 */


function getResizeSign() {
  return getFrameState().resizeSign;
}
/**
 * 获取路由
 */


function getRoutes() {
  return (0, _arrayUtil.toAry)(getFrameState().routes);
}
/**
 * 设置路由
 * @param routes
 */


function setRoutes(routes) {
  setFrameState({
    routes: routes
  });
}
/**
 * 获取内容片段
 */


function getFragmentList() {
  return (0, _arrayUtil.toAry)(getFrameState().fragmentList);
}
/**
 * 设置内容片段
 * @param fragmentList
 */


function setFragmentList(fragmentList) {
  setFrameState({
    fragmentList: (0, _arrayUtil.toAry)(fragmentList)
  });
}
/**
 * 添加内容片段
 */


function addFragment(content) {
  if (!_react["default"].isValidElement(content)) {
    var Com = content;
    content = _react["default"].createElement(Com, {
      key: (0, _util2.random)()
    });
  }

  setFragmentList([].concat(_toConsumableArray(getFragmentList()), [content]));
  return {
    close: function close() {
      removeFragment(content);
    }
  };
}
/**
 * 删除内容片段
 * @param content
 */


function removeFragment(content) {
  var fragmentList = getFragmentList().filter(function (item) {
    return item !== content;
  });
  setFragmentList(fragmentList);
}
/**
 * 更新model
 * @param namespace
 * @param type
 * @param data
 */


function updateModel() {
  var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';
  var type = arguments.length > 1 ? arguments[1] : undefined;
  var data = arguments.length > 2 ? arguments[2] : undefined;
  var dispatch = (0, _store.getStoreDispatch)(getStore(), namespace);

  if ((0, _util.isObj)(type)) {
    dispatch({
      type: 'update',
      field: 'multiple',
      data: type
    });
  } else {
    dispatch(_objectSpread({}, data, {
      type: type
    }));
  }
}
/**
 * 获取dispatch方法
 * @param namespace
 * @returns {function(...[*]=)}
 */


function getDispatch(namespace) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return updateModel.apply(void 0, [namespace].concat(args));
  };
}
/**
 * dispatch
 * @param args
 */


function dispatch() {
  return updateModel.apply(void 0, arguments);
}