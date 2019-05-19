"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _wangctUtil = _interopRequireWildcard(require("wangct-util"));

var _Icon = _interopRequireDefault(require("../Icon"));

require("./index.less");

/**
 * Created by wangct on 2019/1/19.
 */
var getProps = _wangctUtil.reactUtil.getProps;

var Text =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Text, _PureComponent);

  function Text() {
    (0, _classCallCheck2["default"])(this, Text);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Text).apply(this, arguments));
  }

  (0, _createClass2["default"])(Text, [{
    key: "getIconProps",
    value: function getIconProps() {
      var _getProps = getProps(this),
          icon = _getProps.icon;

      return icon && (_wangctUtil["default"].isString(icon) ? {
        type: icon
      } : icon);
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      var icon = this.props.icon;
      return icon ? _wangctUtil["default"].isString(icon) ? _react["default"].createElement(_Icon["default"], {
        type: icon
      }) : _react["default"].createElement(_Icon["default"], icon) : '';
    }
  }, {
    key: "getText",
    value: function getText() {
      var _this$props = this.props,
          children = _this$props.children,
          limit = _this$props.limit;
      return _wangctUtil["default"].isDef(limit) ? substrText(children, limit) : children;
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return _react["default"].createElement("span", (0, _extends2["default"])({}, props, {
        className: _wangctUtil["default"].classNames('wct-text', props.className)
      }), this.getIcon(), this.getText());
    }
  }]);
  return Text;
}(_react.PureComponent);

exports["default"] = Text;

function substrText() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return limit >= str.length ? str : str.substr(0, limit) + '...';
}