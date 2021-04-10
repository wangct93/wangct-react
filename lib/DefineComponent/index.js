"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _util = require("@wangct/util");

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

/**
 * 自定义组件
 */
var DefineComponent =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DefineComponent, _PureComponent);

  function DefineComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DefineComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DefineComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.setElem = function (elem) {
      _this.elem = elem;
    };

    _this.setTarget = function (target) {
      _this.refTarget = target;
    };

    _this.setSubTarget = function (target) {
      _this.refSubTarget = target;
    };

    return _this;
  }

  _createClass(DefineComponent, [{
    key: "updateState",
    value: function updateState(type, value) {
      var _type$split = type.split('.'),
          parentField = _type$split.parentField,
          field = _type$split.field;

      this.setState(_defineProperty({}, parentField, field ? _objectSpread({}, this.state[parentField], _defineProperty({}, field, value)) : value));
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      return (0, _util.toAry)(this.getProp('options'));
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.getProp('value');
    }
  }, {
    key: "loadOptions",
    value: function loadOptions() {
      var _this2 = this;

      var loadOptions = this.getProp('loadOptions');

      if (!loadOptions) {
        return;
      }

      (0, _util.toPromise)(loadOptions).then(function (options) {
        _this2.setState({
          options: options
        });
      });
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      var loadData = this.getProp('loadData');

      if (!loadData) {
        return;
      }

      (0, _util.toPromise)(loadData).then(function (data) {
        _this3.setState({
          data: data
        });
      });
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.getProp('data');
    }
  }, {
    key: "getTextField",
    value: function getTextField() {
      return this.getProp('textField') || 'text';
    }
  }, {
    key: "getValueField",
    value: function getValueField() {
      return this.getProp('valueField') || 'value';
    }
  }, {
    key: "getItemValue",
    value: function getItemValue(item) {
      return item && item[this.getValueField()];
    }
  }, {
    key: "getItemText",
    value: function getItemText(item) {
      return item && item[this.getTextField()];
    }
  }, {
    key: "getElem",
    value: function getElem() {
      return this.elem;
    }
  }, {
    key: "getTarget",
    value: function getTarget() {
      return this.refTarget;
    }
  }, {
    key: "getSubTarget",
    value: function getSubTarget() {
      return this.refSubTarget;
    }
  }, {
    key: "getProps",
    value: function getProps() {
      var filterKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var props = _objectSpread({}, this.state, {}, this.props);

      (0, _util.toAry)(filterKeys).forEach(function (key) {
        delete props[key];
      });
      return props;
    }
  }, {
    key: "getProp",
    value: function getProp(key) {
      if (key in this.props) {
        return this.props[key];
      }

      return this.state && this.state[key];
    }
  }]);

  return DefineComponent;
}(_react.PureComponent);

exports["default"] = DefineComponent;