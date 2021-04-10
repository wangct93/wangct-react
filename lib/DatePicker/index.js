"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangePicker = exports["default"] = void 0;

var _DefineComponent3 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _arrayUtil = require("@wangct/util/lib/arrayUtil");

var _typeUtil = require("@wangct/util/lib/typeUtil");

var _stringUtil = require("@wangct/util/lib/stringUtil");

var _baseCom = require("../utils/baseCom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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
 * 日期选择框（字符串）
 */
var DatePicker =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(DatePicker, _DefineComponent);

  function DatePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      dateFormat: 'YYYY-MM-DD',
      timeFormat: 'HH:mm:ss'
    };

    _this.dateChange = function (mom) {
      var value = mom && mom.format(_this.getFormat());

      _this.onChange(value);
    };

    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initValue();
    }
  }, {
    key: "getFormat",
    value: function getFormat() {
      var showTime = this.props.showTime;
      var dateFormat = this.getProp('dateFormat');
      var timeFormat = this.getProp('timeFormat');
      return showTime ? dateFormat + ' ' + timeFormat : dateFormat;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var value = this.getProp('value');

      if (!value) {
        return null;
      }

      return (0, _moment["default"])(value);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_baseCom.AntDatePicker, _extends({}, this.props, {
        value: this.getValue(),
        onChange: this.dateChange
      }));
    }
  }]);

  return DatePicker;
}(_DefineComponent3["default"]);
/**
 * 日期范围选择框（字符串）
 */


exports["default"] = DatePicker;

var DateRangePicker =
/*#__PURE__*/
function (_DefineComponent2) {
  _inherits(DateRangePicker, _DefineComponent2);

  function DateRangePicker() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, DateRangePicker);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(DateRangePicker)).call.apply(_getPrototypeOf3, [this].concat(args)));
    _this2.state = {};

    _this2.dateChange = function (momentDate, dateStringList) {
      _this2.onChange(dateStringList);
    };

    return _this2;
  }

  _createClass(DateRangePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(DateRangePicker.prototype), "componentDidMount", this).call(this);

      this.initValue();
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return (0, _arrayUtil.toAry)(this.getProp('value')).map(function (item) {
        return item ? (0, _moment["default"])(item) : null;
      });
    }
  }, {
    key: "getPlaceholder",
    value: function getPlaceholder() {
      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          title = _this$props.title;

      if ((0, _typeUtil.isAry)(placeholder)) {
        return placeholder || [];
      }

      if (title) {
        var suffix = '日期';
        var requiredStr = '（必填）';
        var extStr = (0, _stringUtil.toStr)(placeholder).endsWith(requiredStr) ? requiredStr : '';
        var mainTitle = title.replace(/(日期|时间|日)$/, function (match) {
          if (match) {
            suffix = match;
          }

          return '';
        });
        return [mainTitle + '开始' + suffix + extStr, mainTitle + '结束' + suffix + extStr];
      }

      return [];
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(DatePicker.RangePicker, _extends({}, this.props, {
        value: this.getValue(),
        onChange: this.dateChange,
        placeholder: this.getPlaceholder()
      }));
    }
  }]);

  return DateRangePicker;
}(_DefineComponent3["default"]);

exports.DateRangePicker = DateRangePicker;
DatePicker.Range = DateRangePicker;