"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexItem = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util/lib/util");

var _DefineComponent3 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 布局元素
 * @author wangchuitong
 */
var Flex =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Flex, _DefineComponent);

  function Flex() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Flex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Flex)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _createClass(Flex, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return _react["default"].createElement("div", _extends({}, (0, _utils.getDivProps)(props), {
        className: (0, _util.classNames)('w-flex', props.className, props.column && 'w-flex-column', props.verticalCenter && 'w-flex-vertical-center', props.center && 'w-flex-center', props.wrap && 'w-flex-wrap')
      }), props.children);
    }
  }]);

  return Flex;
}(_DefineComponent3["default"]);
/**
 * 自适应元素
 * @author wangchuitong
 */


exports["default"] = Flex;

var FlexItem =
/*#__PURE__*/
function (_DefineComponent2) {
  _inherits(FlexItem, _DefineComponent2);

  function FlexItem() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, FlexItem);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(FlexItem)).call.apply(_getPrototypeOf3, [this].concat(args)));
    _this2.state = {};
    return _this2;
  }

  _createClass(FlexItem, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var Com = props.flex ? Flex : 'div';
      return _react["default"].createElement(Com, _extends({}, (0, _utils.getDivProps)(props), {
        className: (0, _util.classNames)('w-flex-item', props.className)
      }), props.children);
    }
  }]);

  return FlexItem;
}(_DefineComponent3["default"]);

exports.FlexItem = FlexItem;
Flex.Item = FlexItem;