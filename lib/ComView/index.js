"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireWildcard(require("../Flex"));

var _Link = _interopRequireDefault(require("../Link"));

var _DefineComponent3 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _frame = require("../frame");

var _menus = _interopRequireDefault(require("./menus"));

var _View = _interopRequireDefault(require("./View"));

var _dec, _class, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ComView = (_dec = (0, _frame.reduxConnect)(function () {
  return {
    pathname: (0, _frame.getPathname)()
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_DefineComponent2) {
  _inherits(ComView, _DefineComponent2);

  function ComView() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, ComView);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(ComView)).call.apply(_getPrototypeOf3, [this].concat(args)));
    _this2.state = {
      options: _menus["default"].map(function (menu) {
        return _objectSpread({}, menu, {
          path: (0, _frame.pathJoin)(_this2.props.match && _this2.props.match.path, menu.path)
        });
      })
    };
    return _this2;
  }

  _createClass(ComView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(ComView.prototype), "componentDidMount", this).call(this);

      this.initUrl();
    }
  }, {
    key: "initUrl",
    value: function initUrl() {
      var target = this.getTarget();

      if (!target) {
        (0, _frame.pathTo)(this.getOptions()[0].path);
      }
    }
  }, {
    key: "getTarget",
    value: function getTarget() {
      var _this3 = this;

      var options = this.getOptions();
      return options.find(function (item) {
        return (0, _frame.pathMatch)(item.path, _this3.props.pathname);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var target = this.getTarget();

      if (!target) {
        return null;
      }

      return _react["default"].createElement(_Flex["default"], {
        className: "w-com-view"
      }, _react["default"].createElement(Left, {
        options: this.getOptions()
      }), _react["default"].createElement(_Flex.FlexItem, {
        className: "w-com-view-body"
      }, _react["default"].createElement("h1", {
        className: "w-com-body-title"
      }, target.title), _react["default"].createElement("div", {
        className: "w-com-view-component"
      }, _react["default"].createElement(_View["default"], target))));
    }
  }]);

  return ComView;
}(_DefineComponent3["default"]), _temp)) || _class);
exports["default"] = ComView;

var Left =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Left, _DefineComponent);

  function Left() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Left);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Left)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _createClass(Left, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "w-com-view-left"
      }, this.getOptions().map(function (opt, index) {
        return _react["default"].createElement(_Link["default"], {
          path: opt.path,
          className: "w-com-view-nav",
          key: index
        }, opt.title);
      }));
    }
  }]);

  return Left;
}(_DefineComponent3["default"]);