"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util");

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _Auth = _interopRequireDefault(require("../Auth"));

var _typeUtil = require("@wangct/util/lib/typeUtil");

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
 * 按钮
 */
var Btn =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Btn, _DefineComponent);

  function Btn() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Btn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Btn)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      loading: false
    };

    _this.onClick = function (e) {
      _this.setState({
        loading: true
      });

      (0, _util.toPromise)(_this.props.onClick, e)["finally"](function () {
        _this.setState({
          loading: false
        });
      });
    };

    return _this;
  }

  _createClass(Btn, [{
    key: "getAuth",
    value: function getAuth() {
      var auth = this.getProp('auth');

      if ((0, _typeUtil.isStr)(auth)) {
        return {
          and: auth
        };
      }

      if ((0, _typeUtil.isObj)(auth)) {
        return auth;
      }

      return {};
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_Auth["default"], this.getAuth(), _react["default"].createElement(_baseCom.AntButton, _extends({}, (0, _util.getProps)(this), {
        auth: null,
        onClick: this.onClick
      })));
    }
  }]);

  return Btn;
}(_DefineComponent2["default"]);

exports["default"] = Btn;