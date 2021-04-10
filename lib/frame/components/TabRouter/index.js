"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("./index.less"));

var _util = require("@wangct/util");

var _state = require("../../utils/state");

var _Router = require("../Router");

var _path = require("../../utils/path");

var _dec, _class;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabRouter = (
/**
 * 选项卡路由器
 */
_dec = (0, _state.reduxConnect)(function () {
  return {
    pathname: (0, _state.getPathname)()
  };
}), _dec(_class =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(TabRouter, _PureComponent2);

  function TabRouter() {
    _classCallCheck(this, TabRouter);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabRouter).apply(this, arguments));
  }

  _createClass(TabRouter, [{
    key: "getOptions",
    value: function getOptions() {
      return (0, _util.toAry)(this.props.options);
    }
  }, {
    key: "getActiveKey",
    value: function getActiveKey() {
      var options = this.getOptions();
      var target = options[this.getActiveIndex()];
      return target && target.path;
    }
  }, {
    key: "getActiveIndex",
    value: function getActiveIndex() {
      var options = this.getOptions();
      var pathname = this.props.pathname;
      return options.findIndex(function (opt) {
        return pathname.startsWith(opt.path);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var activeIndex = this.getActiveIndex();
      return _react["default"].createElement(_tabs["default"], {
        className: _index["default"].container,
        activeKey: this.getActiveKey()
      }, this.getOptions().map(function (opt, index) {
        return _react["default"].createElement(_tabs["default"].TabPane, {
          key: opt.path,
          tab: opt.path
        }, _react["default"].createElement(TabComMod, {
          route: opt,
          destroy: index > activeIndex
        }));
      }));
    }
  }]);

  return TabRouter;
}(_react.PureComponent)) || _class);
exports["default"] = TabRouter;

var TabComMod =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TabComMod, _PureComponent);

  function TabComMod() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabComMod);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabComMod)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      hide: false
    };
    return _this;
  }

  _createClass(TabComMod, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.checkDestroy(prevProps);
    }
  }, {
    key: "checkDestroy",
    value: function checkDestroy(prevProps) {
      var _this2 = this;

      if (prevProps.destroy !== this.props.destroy) {
        if (this.props.destroy) {
          setTimeout(function () {
            _this2.setState({
              hide: true
            });
          }, 300);
        } else {
          this.setState({
            hide: false
          });
        }
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.props.route || {};
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hide) {
        return null;
      }

      var _this$getData = this.getData(),
          Com = _this$getData.component,
          children = _this$getData.children,
          routePath = _this$getData.path,
          indexPath = _this$getData.indexPath,
          isTab = _this$getData.isTab;

      return _react["default"].createElement(Com, null, children && children.length && (0, _Router.getRoutesContent)(children.map(function (childRoute) {
        return _objectSpread({}, childRoute, {
          path: (0, _path.pathJoin)(routePath, childRoute.path)
        });
      }), indexPath && (0, _path.pathJoin)(routePath, indexPath), isTab));
    }
  }]);

  return TabComMod;
}(_react.PureComponent);