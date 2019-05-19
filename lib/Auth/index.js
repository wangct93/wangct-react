"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _dec, _class;

var Auth = (_dec = (0, _reactRedux.connect)(function (_ref) {
  var _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user;
  return {
    auths: user.auths
  };
}), _dec(_class =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Auth, _PureComponent);

  function Auth() {
    (0, _classCallCheck2["default"])(this, Auth);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Auth).apply(this, arguments));
  }

  (0, _createClass2["default"])(Auth, [{
    key: "check",
    value: function check() {
      var _this$props = this.props,
          _this$props$auths = _this$props.auths,
          auths = _this$props$auths === void 0 ? [] : _this$props$auths,
          or = _this$props.or,
          and = _this$props.and,
          check = _this$props.check;
      return check ? check(auths) : (!and || and.every(function (item) {
        return auths.includes(item);
      })) && (!or || or.some(function (item) {
        return auths.includes(item);
      }));
    }
  }, {
    key: "getNoAuth",
    value: function getNoAuth() {
      var _this$props$noAuth = this.props.noAuth,
          NoAuth = _this$props$noAuth === void 0 ? null : _this$props$noAuth;
      return NoAuth && _react["default"].createElement(NoAuth, null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.check() ? this.props.children : this.getNoAuth();
    }
  }]);
  return Auth;
}(_react.PureComponent)) || _class);
exports["default"] = Auth;

Auth.auth = function (option) {
  return function (Com) {
    return function (props) {
      return _react["default"].createElement(Auth, option, _react["default"].createElement(Com, props));
    };
  };
};