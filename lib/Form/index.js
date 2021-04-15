"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorOptions = validatorOptions;
exports.aryFindResult = aryFindResult;
exports.FormItem = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _util = require("@wangct/util");

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _arrayUtil = require("@wangct/util/lib/arrayUtil");

var _stringUtil = require("@wangct/util/lib/stringUtil");

var _typeUtil = require("@wangct/util/lib/typeUtil");

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * 表单
 */
var Form =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Form, _DefineComponent);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      options: [],
      error: {},
      value: _this.props.defaultValue,
      itemWidth: '100%',
      hasLabel: true
    };

    _this.onFieldChange = function (opt, fieldValue) {
      var oldValue = _this.getValue();

      var formatter = opt.formatter,
          field = opt.field;

      if (formatter) {
        fieldValue = formatter(fieldValue, oldValue[field]);
      }

      var value = _objectSpread({}, oldValue, _defineProperty({}, field, fieldValue));

      _this.validator(value);

      _this.onChange(value);
    };

    return _this;
  }

  _createClass(Form, [{
    key: "getValue",
    value: function getValue() {
      return this.getProp('value') || {};
    }
  }, {
    key: "validator",
    value: function validator(value) {
      var options = this.getOptions();

      if (value) {
        options = options.filter(function (opt) {
          return opt.field in value;
        });
      } else {
        value = this.getValue();
      }

      var extError = validatorOptions(options, value);
      var error = (0, _util.objFilter)(_objectSpread({}, this.state.error, {}, extError), function (value) {
        return !!value;
      });
      this.setState({
        error: error
      });
      return Object.keys(error).length ? Promise.reject(error) : Promise.resolve(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.getValue();
      var props = (0, _util.getProps)(this);
      return _react["default"].createElement("div", {
        className: (0, _util.classNames)('w-form', props.className, !props.hasLabel && 'w-form-no-label'),
        style: props.style
      }, this.getOptions().map(function (opt) {
        var field = opt.field,
            _opt$readOnly = opt.readOnly,
            readOnly = _opt$readOnly === void 0 ? props.readOnly : _opt$readOnly,
            _opt$disabled = opt.disabled,
            disabled = _opt$disabled === void 0 ? readOnly : _opt$disabled,
            _opt$width = opt.width,
            width = _opt$width === void 0 ? props.itemWidth : _opt$width;
        var _opt$component = opt.component,
            Com = _opt$component === void 0 ? 'div' : _opt$component;

        if ((0, _typeUtil.isStr)(Com)) {
          Com = (0, _utils.getInputCom)(Com) || 'div';
        }

        var title = opt.title;
        return _react["default"].createElement(FormItem, {
          className: opt.className,
          style: {
            width: width
          },
          required: opt.required,
          title: title,
          key: field,
          error: _this2.state.error[field]
        }, _react["default"].createElement(Com, _extends({
          readOnly: readOnly,
          disabled: disabled,
          title: title,
          value: value[field],
          onChange: _this2.onFieldChange.bind(_this2, opt)
        }, opt.props)));
      }));
    }
  }]);

  return Form;
}(_DefineComponent2["default"]);
/**
 * 表单单项
 */


exports["default"] = Form;

var FormItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FormItem, _PureComponent);

  function FormItem() {
    _classCallCheck(this, FormItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormItem).apply(this, arguments));
  }

  _createClass(FormItem, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return _react["default"].createElement("div", {
        style: props.style,
        className: (0, _util.classNames)('w-form-line', props.className)
      }, _react["default"].createElement("div", {
        className: "w-form-label"
      }, props.required && _react["default"].createElement("span", {
        style: {
          color: 'red'
        }
      }, "*"), _react["default"].createElement("span", null, props.title, props.sep === false ? '' : props.sep || '：')), _react["default"].createElement("div", {
        className: "w-form-value"
      }, props.children));
    }
  }]);

  return FormItem;
}(_react.PureComponent);
/**
 * 校验配置项
 * @param options
 * @param data
 * @returns {*}
 */


exports.FormItem = FormItem;

function validatorOptions(options, data) {
  var validators = (0, _util.aryToObject)(options, 'field', function (opt) {
    var required = opt.required,
        _opt$needRequiredVali = opt.needRequiredValidator,
        needRequiredValidator = _opt$needRequiredVali === void 0 ? true : _opt$needRequiredVali,
        component = opt.component;
    var validatorAry = [opt.validator];

    if (required && needRequiredValidator) {
      validatorAry.unshift(function (v) {
        if (v === '' || (0, _arrayUtil.toAry)(v).length === 0) {
          return opt.title + '不能为空';
        }
      });
    }

    if (component && component.validator) {
      validatorAry.push(component.validator);
    }

    return function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return aryFindResult(validatorAry, function (validFunc) {
        return validFunc && validFunc.apply(void 0, args);
      });
    };
  });
  var optTemp = (0, _util.aryToObject)(options, 'field');
  return (0, _util.objMap)(validators, function (value, key) {
    var msg = value && value(data[key], key, data);

    if (!msg) {
      return;
    }

    var target = optTemp[key];
    var title = target && target.title;
    return target.errorSkipTitle || (0, _stringUtil.toStr)(msg).startsWith(title) ? msg : title + msg;
  });
}
/**
 * 获取数组中结果为true的一项，并返回结果
 * @param ary
 * @param func
 */


function aryFindResult(ary, func) {
  var result = null;
  (0, _arrayUtil.toAry)(ary).find(function (item, index) {
    result = (0, _util.callFunc)(func, item, index, ary);
    return !!result;
  });
  return result;
}