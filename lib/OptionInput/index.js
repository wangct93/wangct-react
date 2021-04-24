"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/divider/style/css");

var _divider = _interopRequireDefault(require("antd/es/divider"));

var _react = _interopRequireDefault(require("react"));

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _Input = _interopRequireDefault(require("../Input"));

var _util = require("@wangct/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

/**
 * 字典选项配置输入组件
 * @author wangchuitong
 */
var OptionInput =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(OptionInput, _DefineComponent);

  function OptionInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OptionInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OptionInput)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      title: '选项'
    };

    _this.valueChange = function (index, field, fieldValue) {
      var value = _this.getValue().slice(0);

      value[index] = _objectSpread({}, value[index], _defineProperty({}, field, fieldValue));

      _this.onChange(value);
    };

    _this.doAdd = function () {
      _this.onChange([].concat(_toConsumableArray(_this.getValue()), [{}]));
    };

    _this.doRemove = function (index) {
      var value = _this.getValue().slice(0);

      value.splice(index, 1);

      _this.onChange(_toConsumableArray(value));
    };

    _this.textChange = function (index, fieldValue) {
      var value = _this.getValue().slice(0);

      value[index] = _objectSpread({}, value[index], {
        text: fieldValue
      });

      _this.onChange(value);
    };

    return _this;
  }

  _createClass(OptionInput, [{
    key: "getValue",
    value: function getValue() {
      return (0, _util.toAry)(this.getProp('value'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var _props$textInput = props.textInput,
          TextInput = _props$textInput === void 0 ? _Input["default"] : _props$textInput,
          _props$valueInput = props.valueInput,
          ValueInput = _props$valueInput === void 0 ? _Input["default"] : _props$valueInput;
      return _react["default"].createElement("div", {
        className: "w-option-input"
      }, _react["default"].createElement(_divider["default"], null, this.getProp('title')), _react["default"].createElement("div", {
        className: "w-option-input-list"
      }, this.getValue().map(function (item, index) {
        return _react["default"].createElement("div", {
          key: index,
          className: "w-option-input-item"
        }, _react["default"].createElement("div", {
          className: "w-option-input-target"
        }, _react["default"].createElement(TextInput, {
          title: "\u952E",
          value: item.text,
          onChange: _this2.textChange.bind(_this2, index)
        })), _react["default"].createElement("div", {
          className: "w-option-input-target"
        }, _react["default"].createElement(ValueInput, {
          title: "\u503C",
          parent: item.text,
          value: item.value,
          onChange: _this2.valueChange.bind(_this2, index, 'value')
        })), _react["default"].createElement(_icon["default"], {
          onClick: _this2.doRemove.bind(_this2, index),
          type: "minus-circle"
        }));
      })), _react["default"].createElement("div", {
        className: "w-option-input-btn-box"
      }, _react["default"].createElement("a", {
        onClick: this.doAdd,
        className: "w-option-input-btn"
      }, _react["default"].createElement(_icon["default"], {
        type: "plus-circle"
      }), _react["default"].createElement("span", null, "\u6DFB\u52A0\u9009\u9879"))));
    }
  }]);

  return OptionInput;
}(_DefineComponent2["default"]);

exports["default"] = OptionInput;