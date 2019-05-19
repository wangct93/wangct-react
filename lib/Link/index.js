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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _pathToRegexp = _interopRequireDefault(require("path-to-regexp"));

var _wangctUtil = _interopRequireWildcard(require("wangct-util"));

var _dec, _class, _temp;

var getProps = _wangctUtil.reactUtil.getProps;
var Link = (_dec = (0, _reactRedux.connect)(function (_ref) {
  var global = _ref.global;
  return {
    pathname: global.pathname,
    history: global.history
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Link, _PureComponent);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick", function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props;

      props.history.push(props.to);
    });
    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "isActive",
    value: function isActive() {
      var _this$props = this.props,
          to = _this$props.to,
          pathname = _this$props.pathname;
      return (0, _pathToRegexp["default"])(to).test(pathname);
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var _props$activeName = props.activeName,
          activeName = _props$activeName === void 0 ? 'active' : _props$activeName;
      return _react["default"].createElement("a", {
        className: _wangctUtil["default"].classNames(props.className, this.isActive() && activeName),
        onClick: this.onClick
      }, props.children);
    }
  }]);
  return Link;
}(_react.PureComponent), _temp)) || _class);
exports["default"] = Link;