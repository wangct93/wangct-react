"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/spin/style/css");

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _react = _interopRequireDefault(require("react"));

require("./index.less");

var _DefineComponent2 = _interopRequireDefault(require("../DefineComponent"));

var _util = require("@wangct/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
 * 加载中组件
 */
var Loading =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Loading, _DefineComponent);

  function Loading() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Loading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Loading)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isFixed: true
    };
    return _this;
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      var _getProps = (0, _util.getProps)(this),
          loading = _getProps.loading,
          title = _getProps.title,
          isFixed = _getProps.isFixed;

      return loading ? _react["default"].createElement("div", {
        className: (0, _util.classNames)('wct-loading-wrap', isFixed && 'wct-loading-wrap-fixed')
      }, _react["default"].createElement("div", {
        className: "wct-loading-content"
      }, _react["default"].createElement(_spin["default"], {
        size: "large",
        spinning: true,
        tip: title
      }))) : null;
    }
  }]);

  return Loading;
}(_DefineComponent2["default"]);

exports["default"] = Loading;