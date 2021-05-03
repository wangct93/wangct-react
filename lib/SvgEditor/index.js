"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _util = require("@wangct/util/lib/util");

var _util2 = require("@wangct/util");

var _numberUtil = require("@wangct/util/lib/numberUtil");

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _options = require("./options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
 * SVG编辑器
 */
var SvgEditor =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(SvgEditor, _DefineComponent);

  function SvgEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SvgEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SvgEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      drawMode: null,
      value: []
    };

    _this.updateNode = function (node) {
      var value = _this.getValue();

      var index = value.findIndex(function (item) {
        return item.id === node.id;
      });

      if (index !== -1) {
        value[index] = node;

        _this.onChange(_toConsumableArray(value));
      }
    };

    _this.onSelect = function (node, e) {
      e.stopPropagation();

      _this.setSelectedKey(node.id);

      (0, _util.callFunc)(_this.props.onSelect, node);
    };

    _this.svgClick = function () {
      _this.setSelectedKey(null);
    };

    return _this;
  }

  _createClass(SvgEditor, [{
    key: "getSvgInnerStyle",
    value: function getSvgInnerStyle() {
      return ' .svg-disabled .svg-line-point{\n' + '    display: none;\n' + '  }' + '.svg-line-point{\n' + '    fill:transparent;\n' + '  }\n' + '\n' + '  .svg-line:hover .svg-line-point{\n' + '    fill: #1890ff;\n' + '    cursor: pointer;\n' + '  }';
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return (0, _util2.toAry)(_get(_getPrototypeOf(SvgEditor.prototype), "getValue", this).call(this));
    }
  }, {
    key: "getSortNodeList",
    value: function getSortNodeList() {
      return this.getValue().sort(function (a, b) {
        return (0, _numberUtil.toNum)(a.zIndex) - (0, _numberUtil.toNum)(b.zIndex);
      });
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;
      var extStyle = {};

      if (width) {
        extStyle.width = width;
      }

      if (height) {
        extStyle.height = height;
      }

      return _objectSpread({}, style, {}, extStyle);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("svg", {
        style: this.getStyle(),
        onClick: this.svgClick,
        ref: this.setElem,
        className: (0, _util.classNames)("w-svg", this.isDisabled() && 'w-svg-disabled', this.props.className)
      }, React.createElement("style", null, this.getSvgInnerStyle()), this.getSortNodeList().map(function (item) {
        var Com = item.component;

        if (!Com) {
          var nodeOpt = (0, _options.getNodeOption)(item.value);

          if (nodeOpt) {
            Com = nodeOpt.component;
          } else {
            return null;
          }
        }

        return React.createElement("g", {
          onClick: _this2.onSelect.bind(_this2, item),
          key: item.id,
          className: "svg-node-g"
        }, React.createElement(Com, _extends({}, item, {
          selected: item.id === _this2.getSelectedKey(),
          onChange: _this2.updateNode,
          disabled: _this2.isDisabled()
        })));
      }));
    }
  }]);

  return SvgEditor;
}(_DefineComponent2["default"]);

exports["default"] = SvgEditor;