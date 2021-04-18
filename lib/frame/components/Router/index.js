"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoutesContent = getRoutesContent;
exports["default"] = void 0;

require("antd/lib/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/lib/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _zh_CN = _interopRequireDefault(require("antd/lib/locale-provider/zh_CN"));

var _TabRouter = _interopRequireDefault(require("../TabRouter"));

var _state = require("../../utils/state");

var _path = require("../../utils/path");

var _history = _interopRequireDefault(require("../../modules/history"));

var _Async = _interopRequireDefault(require("../Async"));

var _dec, _class, _dec2, _class2;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 路由组件
 */
var RouterMod =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(RouterMod, _PureComponent);

  function RouterMod() {
    _classCallCheck(this, RouterMod);

    return _possibleConstructorReturn(this, _getPrototypeOf(RouterMod).apply(this, arguments));
  }

  _createClass(RouterMod, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return _react["default"].createElement(_reactRedux.Provider, {
        store: props.store
      }, _react["default"].createElement(_configProvider["default"], {
        locale: _zh_CN["default"]
      }, _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(RouterContent, null), _react["default"].createElement(Fragment, null))));
    }
  }]);

  return RouterMod;
}(_react.PureComponent);
/**
 * 路由内容
 */


exports["default"] = RouterMod;
var RouterContent = (_dec = (0, _state.reduxConnect)(function (_ref) {
  _objectDestructuringEmpty(_ref);

  return {
    routes: (0, _state.getRoutes)(),
    isTabRouter: (0, _state.isTabRouter)()
  };
}), _dec(_class =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(RouterContent, _PureComponent2);

  function RouterContent() {
    _classCallCheck(this, RouterContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(RouterContent).apply(this, arguments));
  }

  _createClass(RouterContent, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactRouterDom.Router, {
        history: _history["default"]
      }, getRoutesContent(this.props.routes, undefined, this.props.isTabRouter));
    }
  }]);

  return RouterContent;
}(_react.PureComponent)) || _class);
/**
 * 全局组件
 */

var Fragment = (_dec2 = (0, _state.reduxConnect)(function () {
  return {
    content: (0, _state.getFragmentList)()
  };
}), _dec2(_class2 =
/*#__PURE__*/
function (_PureComponent3) {
  _inherits(Fragment, _PureComponent3);

  function Fragment() {
    _classCallCheck(this, Fragment);

    return _possibleConstructorReturn(this, _getPrototypeOf(Fragment).apply(this, arguments));
  }

  _createClass(Fragment, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, this.props.content);
    }
  }]);

  return Fragment;
}(_react.PureComponent)) || _class2);
/**
 * 获取路由配置
 * @param routes
 * @param indexPath
 * @param isTab
 * @param rootPath
 * @returns {*}
 */

function getRoutesContent(routes, indexPath, isTab) {
  var rootPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

  if (!routes) {
    return;
  }

  if (isTab) {
    return _react["default"].createElement(_TabRouter["default"], {
      options: routes
    });
  }

  return _react["default"].createElement(_reactRouterDom.Switch, null, routes.map(function (route) {
    var routePath = route.path,
        _route$children = route.children,
        children = _route$children === void 0 ? [] : _route$children,
        indexPath = route.indexPath,
        asyncComponent = route.asyncComponent;
    var _route$component = route.component,
        RouteComponent = _route$component === void 0 ? ReactFragment : _route$component;
    var props = {
      key: routePath,
      path: routePath
    };
    var extProps = {};

    if (asyncComponent) {
      RouteComponent = _Async["default"];
      extProps.getComponent = asyncComponent;
    }

    props.render = function (props) {
      return _react["default"].createElement(RouteComponent, _extends({}, props, extProps, route.props), children && children.length && getRoutesContent(children.map(function (childRoute) {
        return _objectSpread({}, childRoute, {
          path: (0, _path.pathJoin)(routePath, childRoute.path)
        });
      }), indexPath && (0, _path.pathJoin)(routePath, indexPath), route.isTab, routePath));
    };

    return _react["default"].createElement(_reactRouterDom.Route, props);
  }), indexPath ? _react["default"].createElement(_reactRouterDom.Route, {
    render: function render() {
      setTimeout(function () {
        (0, _path.pathTo)(indexPath);
      }, 0);
    },
    exact: true,
    key: "redirectRoute",
    path: rootPath
  }) : '');
}

var ReactFragment =
/*#__PURE__*/
function (_PureComponent4) {
  _inherits(ReactFragment, _PureComponent4);

  function ReactFragment() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReactFragment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReactFragment)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _createClass(ReactFragment, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, this.props.children);
    }
  }]);

  return ReactFragment;
}(_react.PureComponent);