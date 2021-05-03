"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeImg = exports.NodeText = exports.NodeCircle = exports.NodeRect = exports.NodeLine = void 0;

var React = _interopRequireWildcard(require("react"));

var _DragSvgElem = _interopRequireDefault(require("../DragSvgElem"));

var _util = require("@wangct/util/lib/util");

var _DefineComponent2 = _interopRequireDefault(require("../../frame/components/DefineComponent"));

var _domUtil = require("../../utils/domUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaseNode =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(BaseNode, _DefineComponent);

  function BaseNode() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseNode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseNode)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};

    _this.onChange = function (value) {
      value = _objectSpread({}, _this.props, {}, value);

      _this.setState({
        value: value
      });

      (0, _util.callFunc)(_this.props.onChange, value);
    };

    return _this;
  }

  _createClass(BaseNode, [{
    key: "getColor",
    value: function getColor() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.getProp('selected') ? 'red' : color;
    }
  }]);

  return BaseNode;
}(_DefineComponent2["default"]);
/**
 * 编辑线视图
 * @author wangchuitong
 */


var NodeLine =
/*#__PURE__*/
function (_BaseNode) {
  _inherits(NodeLine, _BaseNode);

  function NodeLine() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, NodeLine);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(NodeLine)).call.apply(_getPrototypeOf3, [this].concat(args)));
    _this2.state = {};

    _this2.startMousedown = function (e) {
      e.stopPropagation();

      var _assertThisInitialize = _assertThisInitialized(_this2),
          props = _assertThisInitialize.props;

      var ox = props.x1;
      var oy = props.y1;
      (0, _domUtil.mousedown)(e, {
        onMove: function onMove(e, dx, dy) {
          _this2.onChange({
            x1: ox + dx,
            y1: oy + dy
          });
        }
      });
    };

    _this2.endMousedown = function (e) {
      e.stopPropagation();

      var _assertThisInitialize2 = _assertThisInitialized(_this2),
          props = _assertThisInitialize2.props;

      var ox = props.x2;
      var oy = props.y2;
      (0, _domUtil.mousedown)(e, {
        onMove: function onMove(e, dx, dy) {
          _this2.onChange({
            x2: ox + dx,
            y2: oy + dy
          });
        }
      });
    };

    _this2.mousedown = function (e) {
      var _this2$props = _this2.props,
          x1 = _this2$props.x1,
          x2 = _this2$props.x2,
          y1 = _this2$props.y1,
          y2 = _this2$props.y2;

      var _this2$getCurvePos = _this2.getCurvePos(),
          x3 = _this2$getCurvePos.x,
          y3 = _this2$getCurvePos.y;

      (0, _domUtil.mousedown)(e, {
        onMove: function onMove(e, dx, dy) {
          _this2.onChange({
            x1: x1 + dx,
            y1: y1 + dy,
            x2: x2 + dx,
            y2: y2 + dy,
            x3: x3 + dx,
            y3: y3 + dy
          });
        }
      });
    };

    _this2.curveMoveDown = function (e) {
      var _this2$getCurvePos2 = _this2.getCurvePos(),
          x3 = _this2$getCurvePos2.x,
          y3 = _this2$getCurvePos2.y;

      e.stopPropagation();
      (0, _domUtil.mousedown)(e, {
        onMove: function onMove(e, dx, dy) {
          _this2.onChange({
            x3: x3 + dx,
            y3: y3 + dy
          });
        }
      });
    };

    return _this2;
  }

  _createClass(NodeLine, [{
    key: "getPath",
    value: function getPath() {
      var _this$props = this.props,
          x1 = _this$props.x1,
          x2 = _this$props.x2,
          y1 = _this$props.y1,
          y2 = _this$props.y2,
          _this$props$x = _this$props.x3,
          x3 = _this$props$x === void 0 ? (x1 + x2) / 2 : _this$props$x,
          _this$props$y = _this$props.y3,
          y3 = _this$props$y === void 0 ? (y1 + y2) / 2 : _this$props$y;

      if (this.props.hasCurve) {
        return "M".concat(x1, ",").concat(y1, " Q").concat(x3, ",").concat(y3, " ").concat(x2, ",").concat(y2, " L").concat(x2, ",").concat(y2);
      }

      return "M".concat(x1, ",").concat(y1, " L").concat(x2, ",").concat(y2);
    }
  }, {
    key: "getCurvePos",
    value: function getCurvePos() {
      var _this$props2 = this.props,
          x1 = _this$props2.x1,
          x2 = _this$props2.x2,
          y1 = _this$props2.y1,
          y2 = _this$props2.y2,
          _this$props2$x = _this$props2.x3,
          x3 = _this$props2$x === void 0 ? (x1 + x2) / 2 : _this$props2$x,
          _this$props2$y = _this$props2.y3,
          y3 = _this$props2$y === void 0 ? (y1 + y2) / 2 : _this$props2$y;
      return {
        x: x3,
        y: y3
      };
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var radius = 10;
      var x1 = props.x1,
          x2 = props.x2,
          y1 = props.y1,
          y2 = props.y2;

      var _this$getCurvePos = this.getCurvePos(),
          x3 = _this$getCurvePos.x,
          y3 = _this$getCurvePos.y;

      return React.createElement("g", {
        onMouseDown: this.mousedown,
        transform: "rotate(".concat(props.angle, ",").concat((x1 + x2) / 2, " ").concat((y1 + y2) / 2, ")")
      }, React.createElement("g", {
        className: (0, _util.classNames)('svg-line')
      }, props.hasArrow && React.createElement("defs", null, React.createElement("marker", {
        id: props.id,
        markerUnits: "strokeWidth",
        markerWidth: "12",
        markerHeight: "12",
        viewBox: "0 0 12 12",
        refX: "8",
        refY: "6",
        orient: "auto"
      }, React.createElement("path", {
        d: "M2,2 L10,6 L2,10 L6,6 L2,2",
        fill: this.getColor(props.arrowColor || props.strokeColor)
      }))), React.createElement("path", {
        fill: "transparent",
        d: this.getPath(),
        style: {
          strokeWidth: props.strokeWidth
        },
        markerEnd: "url(#".concat(props.id, ")"),
        stroke: this.getColor(props.strokeColor),
        className: (0, _util.classNames)('svg-line-target')
      }), React.createElement("path", {
        fill: "transparent",
        d: this.getPath(),
        stroke: "transparent",
        strokeWidth: props.strokeWidth + 20
      }), React.createElement("rect", {
        x: Math.min(x1, x2, x3),
        y: Math.min(y1, y2, y3),
        width: Math.max(x1, x2, x3) - Math.min(x1, x2, x3),
        height: Math.max(y1, y2, y3) - Math.min(y1, y2, y3),
        fill: "transparent"
      }), props.hasCurve && React.createElement("circle", {
        cx: this.getCurvePos().x,
        cy: this.getCurvePos().y,
        r: radius,
        className: 'svg-line-point',
        onMouseDown: this.curveMoveDown
      }), React.createElement("circle", {
        cx: x1,
        cy: y1,
        r: radius,
        className: 'svg-line-point',
        onMouseDown: this.startMousedown
      }), React.createElement("circle", {
        cx: x2,
        cy: y2,
        r: radius,
        className: 'svg-line-point',
        onMouseDown: this.endMousedown
      })));
    }
  }]);

  return NodeLine;
}(BaseNode);
/**
 * 编辑矩形视图
 * @author wangchuitong
 */


exports.NodeLine = NodeLine;

var NodeRect =
/*#__PURE__*/
function (_BaseNode2) {
  _inherits(NodeRect, _BaseNode2);

  function NodeRect() {
    var _getPrototypeOf4;

    var _this3;

    _classCallCheck(this, NodeRect);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(NodeRect)).call.apply(_getPrototypeOf4, [this].concat(args)));
    _this3.state = {};

    _this3.rectChange = function (rect) {
      _this3.onChange(_objectSpread({}, _this3.props, {}, rect));
    };

    return _this3;
  }

  _createClass(NodeRect, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return React.createElement("g", {
        transform: "rotate(".concat(props.angle, ",").concat(props.x + props.w / 2, " ").concat(props.y + props.h / 2, ")")
      }, React.createElement("rect", {
        strokeWidth: props.strokeWidth,
        fill: props.fillColor,
        stroke: this.getColor(props.strokeColor),
        x: props.x,
        y: props.y,
        width: props.w,
        height: props.h,
        rx: props.radius,
        ry: props.radius,
        strokeDasharray: props.strokeStyle === 'dashed' ? '6 10' : undefined,
        className: 'svg-rect'
      }), React.createElement(_DragSvgElem["default"], {
        disabled: this.isDisabled(),
        color: this.getColor(props.strokeColor),
        onChange: this.rectChange,
        value: {
          x: props.x,
          y: props.y,
          w: props.w,
          h: props.h
        }
      }));
    }
  }]);

  return NodeRect;
}(BaseNode);
/**
 * 编辑圆形视图
 * @author wangchuitong
 */


exports.NodeRect = NodeRect;

var NodeCircle =
/*#__PURE__*/
function (_BaseNode3) {
  _inherits(NodeCircle, _BaseNode3);

  function NodeCircle() {
    var _getPrototypeOf5;

    var _this4;

    _classCallCheck(this, NodeCircle);

    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(NodeCircle)).call.apply(_getPrototypeOf5, [this].concat(args)));
    _this4.state = {};

    _this4.rectChange = function (rect) {
      _this4.onChange(_objectSpread({}, _this4.props, {}, rect));
    };

    _this4.getStyle = function () {
      var _assertThisInitialize3 = _assertThisInitialized(_this4),
          props = _assertThisInitialize3.props;

      return {
        strokeWidth: props.strokeWidth,
        fill: props.fillColor,
        stroke: _this4.getColor(props.strokeColor),
        strokeDasharray: props.strokeStyle === 'dashed' ? '6 10' : undefined
      };
    };

    return _this4;
  }

  _createClass(NodeCircle, [{
    key: "getEllipsePos",
    value: function getEllipsePos() {
      var props = this.props;
      return {
        cx: props.x + props.w / 2,
        cy: props.y + props.h / 2,
        rx: props.w / 2,
        ry: props.h / 2
      };
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var ellipsePos = this.getEllipsePos();
      return React.createElement("g", {
        transform: "rotate(".concat(props.angle, ",").concat(props.x + props.w / 2, " ").concat(props.y + props.h / 2, ")")
      }, React.createElement("ellipse", _extends({
        style: this.getStyle()
      }, ellipsePos)), React.createElement(_DragSvgElem["default"], {
        disabled: this.isDisabled(),
        onChange: this.rectChange,
        value: {
          x: props.x,
          y: props.y,
          w: props.w,
          h: props.h
        }
      }));
    }
  }]);

  return NodeCircle;
}(BaseNode);
/**
 * 编辑文本视图
 * @author wangchuitong
 */


exports.NodeCircle = NodeCircle;

var NodeText =
/*#__PURE__*/
function (_BaseNode4) {
  _inherits(NodeText, _BaseNode4);

  function NodeText() {
    var _getPrototypeOf6;

    var _this5;

    _classCallCheck(this, NodeText);

    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }

    _this5 = _possibleConstructorReturn(this, (_getPrototypeOf6 = _getPrototypeOf(NodeText)).call.apply(_getPrototypeOf6, [this].concat(args)));
    _this5.state = {};

    _this5.mousedown = function (e) {
      var _this5$props = _this5.props,
          x = _this5$props.x,
          y = _this5$props.y;
      (0, _domUtil.mousedown)(e, {
        onMove: function onMove(e, dx, dy) {
          _this5.onChange({
            x: x + dx,
            y: y + dy
          });
        }
      });
    };

    return _this5;
  }

  _createClass(NodeText, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return React.createElement("g", {
        onMouseDown: this.mousedown,
        transform: "rotate(".concat(props.angle, ",").concat(props.x, " ").concat(props.y, ")")
      }, React.createElement("text", {
        alignmentBaseline: "before-edge",
        fill: this.getColor(props.color),
        x: props.x,
        y: props.y,
        className: 'svg-text'
      }, props.text));
    }
  }]);

  return NodeText;
}(BaseNode);
/**
 * 默认编辑视图
 * @author wangchuitong
 */


exports.NodeText = NodeText;

var NodeImg =
/*#__PURE__*/
function (_BaseNode5) {
  _inherits(NodeImg, _BaseNode5);

  function NodeImg() {
    var _getPrototypeOf7;

    var _this6;

    _classCallCheck(this, NodeImg);

    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }

    _this6 = _possibleConstructorReturn(this, (_getPrototypeOf7 = _getPrototypeOf(NodeImg)).call.apply(_getPrototypeOf7, [this].concat(args)));
    _this6.state = {};
    return _this6;
  }

  _createClass(NodeImg, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return React.createElement("g", {
        transform: "rotate(".concat(props.angle, ",").concat(props.x + props.w / 2, " ").concat(props.y + props.h / 2, ")")
      }, React.createElement("image", {
        preserveAspectRatio: "none",
        x: props.x,
        y: props.y,
        width: props.w,
        height: props.h,
        href: props.img
      }), React.createElement(_DragSvgElem["default"], {
        disabled: this.isDisabled(),
        alwaysShow: true,
        color: this.getColor(),
        onChange: this.onChange,
        value: {
          x: props.x,
          y: props.y,
          w: props.w,
          h: props.h
        }
      }));
    }
  }]);

  return NodeImg;
}(BaseNode);

exports.NodeImg = NodeImg;