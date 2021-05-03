"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/divider/style/css");

var _divider = _interopRequireDefault(require("antd/es/divider"));

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util/lib/util");

var _DefineComponent4 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var ComViewContent =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(ComViewContent, _DefineComponent);

  function ComViewContent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ComViewContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ComViewContent)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _createClass(ComViewContent, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "w-com-view-content"
      }, _react["default"].createElement("h2", {
        className: "w-com-view-content-title"
      }, "\u4EE3\u7801\u6F14\u793A"), _react["default"].createElement("div", {
        ref: this.setStateElem,
        className: "w-com-view-content-list"
      }, this.getOptions().map(function (opt, index) {
        return _react["default"].createElement(ViewItem, {
          data: opt,
          key: index
        });
      })), _react["default"].createElement(Sider, {
        contentElem: this.getStateElem(),
        options: this.getOptions()
      }));
    }
  }]);

  return ComViewContent;
}(_DefineComponent4["default"]);

exports["default"] = ComViewContent;

var ViewItem =
/*#__PURE__*/
function (_DefineComponent2) {
  _inherits(ViewItem, _DefineComponent2);

  function ViewItem() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, ViewItem);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(ViewItem)).call.apply(_getPrototypeOf3, [this].concat(args)));
    _this2.state = {
      showCode: false
    };

    _this2.showCodeChange = function () {
      _this2.setState({
        showCode: !_this2.state.showCode
      });
    };

    return _this2;
  }

  _createClass(ViewItem, [{
    key: "render",
    value: function render() {
      var data = this.getData();
      return _react["default"].createElement("div", {
        className: "w-com-view-content-item"
      }, _react["default"].createElement("div", {
        className: "w-com-view-content-item-view"
      }, data.render && data.render()), _react["default"].createElement(_divider["default"], {
        orientation: "left"
      }, data.title), _react["default"].createElement("div", {
        className: "w-com-view-content-item-desc"
      }, data.desc), _react["default"].createElement("div", {
        className: "w-com-view-content-item-footer"
      }, this.state.showCode ? _react["default"].createElement(_tooltip["default"], {
        title: "\u6536\u8D77\u4EE3\u7801"
      }, _react["default"].createElement(_Icon["default"], {
        onClick: this.showCodeChange,
        type: "shrink"
      })) : _react["default"].createElement(_tooltip["default"], {
        title: "\u5C55\u5F00\u4EE3\u7801"
      }, _react["default"].createElement(_Icon["default"], {
        onClick: this.showCodeChange,
        type: "arrows-alt"
      }))), this.state.showCode && _react["default"].createElement("div", {
        className: "w-com-view-content-item-code"
      }, data.code));
    }
  }]);

  return ViewItem;
}(_DefineComponent4["default"]);

var Sider =
/*#__PURE__*/
function (_DefineComponent3) {
  _inherits(Sider, _DefineComponent3);

  function Sider() {
    var _getPrototypeOf4;

    var _this3;

    _classCallCheck(this, Sider);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(Sider)).call.apply(_getPrototypeOf4, [this].concat(args)));
    _this3.state = {};

    _this3.scrollEvent = function (e) {
      var elem = _this3.props.contentElem;

      if (!elem) {
        return;
      }

      var children = elem.children;
      var index = Array.from(children).findIndex(function (el) {
        return el.getBoundingClientRect().bottom > 0;
      });
      var activeIndex = index === -1 ? children.length - 1 : index;

      _this3.onChange(activeIndex);

      _this3.updatePosStatus();
    };

    _this3.updatePosStatus = function () {
      var scrollTop = document.documentElement.scrollTop;

      _this3.setState({
        fixed: scrollTop > 105
      });
    };

    _this3.selectIndex = function (index) {
      var elem = _this3.props.contentElem;

      if (!elem) {
        return;
      }

      var dt = elem.children[index].getBoundingClientRect().top;
      document.documentElement.scrollTop += dt - 20;
    };

    return _this3;
  }

  _createClass(Sider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(Sider.prototype), "componentDidMount", this).call(this);

      this.addEvent();
      this.updatePosStatus();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvent();
    }
  }, {
    key: "addEvent",
    value: function addEvent() {
      document.addEventListener('scroll', this.scrollEvent);
    }
  }, {
    key: "removeEvent",
    value: function removeEvent() {
      document.removeEventListener('scroll', this.scrollEvent);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react["default"].createElement("div", {
        className: (0, _util.classNames)('w-com-view-content-sider', this.state.fixed && 'w-com-view-content-sider-fixed')
      }, this.getOptions().map(function (opt, index) {
        return _react["default"].createElement(_tooltip["default"], {
          title: opt.title,
          key: index
        }, _react["default"].createElement("div", {
          onClick: _this4.selectIndex.bind(_this4, index),
          className: (0, _util.classNames)('w-com-view-content-sider-item', _this4.getValue() === index && 'active')
        }, opt.title));
      }));
    }
  }]);

  return Sider;
}(_DefineComponent4["default"]);