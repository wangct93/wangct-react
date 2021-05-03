"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = require("@wangct/util/lib/util");

var _react = _interopRequireDefault(require("react"));

var _DefineComponent2 = _interopRequireDefault(require("../../frame/components/DefineComponent"));

var _domUtil = require("../../utils/domUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 拖拽元素
 * @author wangchuitong
 */
var DragSvgElem =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(DragSvgElem, _DefineComponent);

  function DragSvgElem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DragSvgElem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DragSvgElem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      value: {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      }
    };

    _this.onChange = function (value) {
      value = _objectSpread({}, _this.getValue(), {}, value);

      _this.setState({
        value: value
      });

      (0, _util.callFunc)(_this.props.onChange, value);
    };

    _this.lineMousedown = function (type, e) {
      e.stopPropagation();

      var value = _this.getValue();

      var ox = type === 'left' ? value.x : value.x + value.w;
      var oy = type === 'top' ? value.y : value.y + value.h;
      (0, _domUtil.mousedown)(e, {
        onMove: function onMove(e, dx, dy) {
          if (type === 'left' || type === 'right') {
            var fixedX = type === 'left' ? value.x + value.w : value.x;
            var nx = ox + dx;
            var x = Math.min(fixedX, nx);
            var w = Math.abs(fixedX - nx);

            _this.onChange({
              x: x,
              w: w
            });
          } else {
            var fixedY = type === 'top' ? value.y + value.h : value.y;
            var ny = oy + dy;
            var y = Math.min(fixedY, ny);
            var h = Math.abs(fixedY - ny);

            _this.onChange({
              y: y,
              h: h
            });
          }
        }
      });
    };

    _this.pointMousedown = function (type, e) {
      e.stopPropagation();

      var value = _this.getValue();

      var ox = type.includes('left') ? value.x : value.x + value.w;
      var oy = type.includes('Top') ? value.y : value.y + value.h;
      (0, _domUtil.mousedown)(e, {
        onMove: function onMove(e, dx, dy) {
          var fixedX, fixedY;

          switch (type) {
            case 'leftTop':
              fixedX = value.x + value.w;
              fixedY = value.y + value.h;
              break;

            case 'leftBottom':
              fixedX = value.x + value.w;
              fixedY = value.y;
              break;

            case 'rightTop':
              fixedX = value.x;
              fixedY = value.y + value.h;
              break;

            case 'rightBottom':
              fixedX = value.x;
              fixedY = value.y;
              break;
          }

          var nx = ox + dx;
          var ny = oy + dy;
          var x = Math.min(fixedX, nx);
          var y = Math.min(fixedY, ny);
          var w = Math.abs(fixedX - nx);
          var h = Math.abs(fixedY - ny);

          _this.onChange({
            x: x,
            y: y,
            w: w,
            h: h
          });
        }
      });
    };

    _this.mousedown = function (e) {
      var value = _this.getValue();

      var ox = value.x;
      var oy = value.y;
      (0, _domUtil.mousedown)(e, {
        onMove: function onMove(e, dx, dy) {
          _this.onChange({
            x: ox + dx,
            y: oy + dy
          });
        }
      });
    };

    return _this;
  }

  _createClass(DragSvgElem, [{
    key: "getValue",
    value: function getValue() {
      return _get(_getPrototypeOf(DragSvgElem.prototype), "getValue", this).call(this) || {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getValue = this.getValue(),
          x = _this$getValue.x,
          y = _this$getValue.y,
          w = _this$getValue.w,
          h = _this$getValue.h;

      var radius = 5;

      if (this.isDisabled()) {
        return null;
      }

      return _react["default"].createElement("g", {
        className: (0, _util.classNames)('w-svg-drag', this.props.alwaysShow && "w-svg-drag-show")
      }, _react["default"].createElement("rect", {
        x: x,
        y: y,
        width: w,
        stroke: this.getProp('color') || 'transparent',
        height: h,
        fill: "transparent",
        className: "w-svg-drag-content",
        onMouseDown: this.mousedown
      }), _react["default"].createElement("rect", {
        x: x,
        y: y,
        width: radius,
        height: h,
        onMouseDown: this.lineMousedown.bind(this, 'left'),
        className: (0, _util.classNames)("w-svg-drag-line", "w-svg-drag-line-left")
      }), _react["default"].createElement("rect", {
        x: x + w - radius,
        y: y,
        width: radius,
        height: h,
        onMouseDown: this.lineMousedown.bind(this, 'right'),
        className: (0, _util.classNames)("w-svg-drag-line", "w-svg-drag-line-right")
      }), _react["default"].createElement("rect", {
        x: x,
        y: y + h - radius,
        width: w,
        height: radius,
        onMouseDown: this.lineMousedown.bind(this, 'bottom'),
        className: (0, _util.classNames)("w-svg-drag-line", "w-svg-drag-line-bottom")
      }), _react["default"].createElement("rect", {
        x: x,
        y: y,
        width: w,
        height: radius,
        onMouseDown: this.lineMousedown.bind(this, 'top'),
        className: (0, _util.classNames)("w-svg-drag-line", "w-svg-drag-line-top")
      }), _react["default"].createElement("rect", {
        x: x,
        y: y,
        width: radius,
        height: radius,
        onMouseDown: this.pointMousedown.bind(this, 'leftTop'),
        className: (0, _util.classNames)("w-svg-drag-point", "w-svg-drag-point-left-top")
      }), _react["default"].createElement("rect", {
        x: x,
        y: y + h - radius,
        width: radius,
        height: radius,
        onMouseDown: this.pointMousedown.bind(this, 'leftBottom'),
        className: (0, _util.classNames)("w-svg-drag-point", "w-svg-drag-point-left-bottom")
      }), _react["default"].createElement("rect", {
        x: x + w - radius,
        y: y,
        width: radius,
        height: radius,
        onMouseDown: this.pointMousedown.bind(this, 'rightTop'),
        className: (0, _util.classNames)("w-svg-drag-point", "w-svg-drag-point-right-top")
      }), _react["default"].createElement("rect", {
        x: x + w - radius,
        y: y + h - radius,
        width: radius,
        height: radius,
        onMouseDown: this.pointMousedown.bind(this, 'rightBottom'),
        className: (0, _util.classNames)("w-svg-drag-point", "w-svg-drag-point-right-bottom")
      }));
    }
  }]);

  return DragSvgElem;
}(_DefineComponent2["default"]);

exports["default"] = DragSvgElem;