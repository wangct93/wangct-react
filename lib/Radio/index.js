"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util");

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _utils = require("../utils/utils");

var _baseCom = require("../utils/baseCom");

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
 * 单选框
 */
var Radio =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Radio, _DefineComponent);

  function Radio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Radio)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      value: _this.props.defaultValue,
      loadEndDefaultSelected: true,
      textField: 'text',
      valueField: 'value'
    };

    _this.onRadioChange = function (e) {
      var value = e.target.value;

      _this.onChange(value);
    };

    return _this;
  }

  _createClass(Radio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.checkParams(prevProps);
    }
  }, {
    key: "checkParams",
    value: function checkParams(prevProps) {
      if (!(0, _util.equal)(this.getParams(), this.getParams(prevProps)) || this.props.loadData !== prevProps.loadData) {
        this.loadData();
      }
    }
  }, {
    key: "getParams",
    value: function getParams() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      return props.params;
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      var loadData = this.props.loadData;

      if (!loadData) {
        return;
      }

      (0, _util.toPromise)(loadData, this.getParams()).then(function (data) {
        (0, _util.validateArray)(data);

        _this2.setState({
          options: data
        });

        var props = (0, _util.getProps)(_this2);

        if (props.loadEndDefaultSelected) {
          _this2.onChange((0, _utils.getValue)(_this2, data[0]));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react["default"].createElement(_baseCom.AntRadio.Group, _extends({}, this.props, {
        options: undefined,
        onChange: this.onRadioChange
      }), this.getOptions().map(function (opt) {
        var value = (0, _utils.getValue)(_this3, opt);
        var text = (0, _utils.getText)(_this3, opt);
        return _react["default"].createElement(_baseCom.AntRadio, {
          value: value,
          key: value
        }, text);
      }));
    }
  }]);

  return Radio;
}(_DefineComponent2["default"]);

exports["default"] = Radio;