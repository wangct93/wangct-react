"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _util = require("@wangct/util");

var _frame = require("../frame");

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var Link = (
/**
 * 路由跳转组件
 */
_dec = (0, _reactRedux.connect)(function (_ref) {
  _objectDestructuringEmpty(_ref);

  return {
    pathname: (0, _frame.getPathname)()
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Link, _DefineComponent);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      activeName: 'active'
    };

    _this.onClick = function () {
      if (_this.isDisabled()) {
        return;
      }

      (0, _frame.pathTo)(_this.getPath());
    };

    return _this;
  }

  _createClass(Link, [{
    key: "getPath",
    value: function getPath() {
      var _this$props = this.props,
          to = _this$props.to,
          _this$props$path = _this$props.path,
          path = _this$props$path === void 0 ? to : _this$props$path;
      return path;
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return (0, _frame.pathMatch)(this.getPath(), this.props.pathname);
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      var props = (0, _util.getProps)(this);
      return (0, _util.classNames)(props.className, this.isActive() && props.activeName);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.pathname);
      return _react["default"].createElement("a", {
        className: (0, _util.classNames)(this.getClassName(), 'w-link'),
        onClick: this.onClick
      }, this.props.children);
    }
  }]);

  return Link;
}(_DefineComponent2["default"]), _temp)) || _class);
exports["default"] = Link;