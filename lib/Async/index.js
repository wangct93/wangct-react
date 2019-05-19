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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

/**
 * Created by wangct on 2019/2/1.
 */
var Async =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Async, _PureComponent);

  function Async() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Async);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Async)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {});
    return _this;
  }

  (0, _createClass2["default"])(Async, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getComponent();
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      var _this2 = this;

      var getComponent = this.props.getComponent;

      if (getComponent) {
        getComponent().then(function (result) {
          _this2.setState({
            component: result["default"] ? result["default"] : result
          });
        });
      }
    }
  }, {
    key: "getLoadingView",
    value: function getLoadingView() {
      return this.props.loading || _react["default"].createElement("p", null, "loading...");
    }
  }, {
    key: "render",
    value: function render() {
      var Com = this.state.component;
      return Com ? _react["default"].createElement(Com, (0, _extends2["default"])({}, this.props, {
        getComponent: undefined
      })) : this.getLoadingView();
    }
  }]);
  return Async;
}(_react.PureComponent);

exports["default"] = Async;