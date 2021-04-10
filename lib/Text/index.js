"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _util = require("@wangct/util");

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _utils = require("../utils/utils");

var _promiseUtil = require("@wangct/util/lib/promiseUtil");

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
 * 文本组件
 */
var Text =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Text, _DefineComponent);

  function Text() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Text);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Text)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(Text, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initOptions();
    }
  }, {
    key: "initOptions",
    value: function initOptions() {
      var _this2 = this;

      (0, _promiseUtil.toPromise)(this.props.loadData).then(function (options) {
        _this2.setState({
          options: (0, _util.toAry)(options)
        });
      });
    }
  }, {
    key: "getIconProps",
    value: function getIconProps() {
      var _getProps = (0, _util.getProps)(this),
          icon = _getProps.icon;

      return icon && ((0, _util.isString)(icon) ? {
        type: icon
      } : icon);
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      var iconProps = this.getIconProps();
      return iconProps && _react["default"].createElement(_Icon["default"], iconProps);
    }
  }, {
    key: "getText",
    value: function getText() {
      var _this3 = this;

      var _getProps2 = (0, _util.getProps)(this),
          children = _getProps2.children,
          _getProps2$options = _getProps2.options,
          options = _getProps2$options === void 0 ? [] : _getProps2$options,
          limit = _getProps2.limit;

      var target = options.find(function (item) {
        return (0, _utils.getText)(_this3, item) === children;
      });
      var viewText = target ? (0, _utils.getText)(this, item) : children;
      return _react["default"].createElement("span", null, (0, _util.isDef)(limit) ? substrText(viewText, limit) : viewText);
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return _react["default"].createElement("span", _extends({}, props, {
        className: (0, _util.classNames)('wct-text', props.className)
      }), this.getIcon(), this.getText());
    }
  }]);

  return Text;
}(_DefineComponent2["default"]);
/**
 * 截取字符串
 * @param str
 * @param limit
 * @returns {string}
 */


exports["default"] = Text;

function substrText() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return limit >= str.length ? str : str.substr(0, limit) + '...';
}