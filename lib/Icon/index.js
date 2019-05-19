"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _wangctUtil = _interopRequireDefault(require("wangct-util"));

/**
 * Created by wangct on 2019/3/9.
 */
var cache = _wangctUtil["default"].cache();

var IconBox =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(IconBox, _PureComponent);

  function IconBox() {
    (0, _classCallCheck2["default"])(this, IconBox);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(IconBox).apply(this, arguments));
  }

  (0, _createClass2["default"])(IconBox, [{
    key: "getComponent",
    value: function getComponent() {
      var scriptUrl = this.props.scriptUrl;
      return scriptUrl ? getIconfont(scriptUrl) : _icon["default"];
    }
  }, {
    key: "render",
    value: function render() {
      var Icon = this.getComponent();
      return _react["default"].createElement(Icon, this.props);
    }
  }]);
  return IconBox;
}(_react.PureComponent);

exports["default"] = IconBox;

function getIconfont(scriptUrl) {
  var Iconfont = cache.getItem(scriptUrl);

  if (!Iconfont) {
    Iconfont = _icon["default"].createFromIconfontCN({
      scriptUrl: scriptUrl
    });
    cache.setItem(scriptUrl, Iconfont);
  }

  return Iconfont;
}