"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeSelect = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util");

var _DefineComponent3 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _arrayUtil = require("@wangct/util/lib/arrayUtil");

var _stringUtil = require("@wangct/util/lib/stringUtil");

var _typeUtil = require("@wangct/util/lib/typeUtil");

var _util2 = require("@wangct/util/lib/util");

var _utils = require("../utils/utils");

var _baseCom = require("../utils/baseCom");

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * 下拉框
 */
var Select =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Select, _DefineComponent);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      options: [],
      allowClear: true,
      placeholder: '请选择' + (_this.props.title || '')
    };
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initValue();
      this.loadOptions();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.checkParams(prevProps);
    }
  }, {
    key: "checkParams",
    value: function checkParams(prevProps) {
      if (!(0, _util.equal)(this.getParams(), this.getParams(prevProps)) || this.props.loadData !== prevProps.loadData) {
        this.loadOptions();
      }
    }
  }, {
    key: "getParams",
    value: function getParams() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      return props.params;
    }
  }, {
    key: "loadOptions",
    value: function loadOptions() {
      var _this2 = this;

      var params = this.getParams();
      (0, _util.toPromise)(this.props.loadData, params).then(function (options) {
        options = (0, _arrayUtil.toAry)(options).map(function (opt) {
          return _objectSpread({}, opt, {
            value: (0, _stringUtil.toStr)(opt.value)
          });
        });

        _this2.setState({
          options: options
        });

        if (!_this2.getValue() && _this2.getProp('initValue') && options.length) {
          var data = options[0];
          var key = data.value;

          if (_this2.isMultiple()) {
            _this2.onChange([key], [data]);
          } else {
            _this2.onChange(key, data);
          }
        }
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var value = this.getProp('value');

      if ((0, _typeUtil.isUndef)(value)) {
        return undefined;
      }

      if (this.isMultiple()) {
        return (0, _arrayUtil.toAry)(value).map(function (item) {
          return (0, _stringUtil.toStr)(item);
        });
      }

      return (0, _stringUtil.toStr)(value);
    }
  }, {
    key: "isMultiple",
    value: function isMultiple() {
      return this.props.mode === 'multiple';
    }
  }, {
    key: "filterOption",
    value: function filterOption(input, option) {
      return option.props.children.toLowerCase().includes(input.toLowerCase());
    }
  }, {
    key: "getFilterOption",
    value: function getFilterOption() {
      return this.props.showSearch ? this.filterOption : undefined;
    }
  }, {
    key: "getPlaceholder",
    value: function getPlaceholder() {
      return this.props.disabled ? '' : this.getProp('placeholder');
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react["default"].createElement(_baseCom.AntSelect, _extends({
        filterOption: this.getFilterOption(),
        placeholder: this.getPlaceholder()
      }, this.props, {
        value: this.getValue(),
        onChange: this.onChange,
        className: (0, _util2.classNames)('w-select', this.props.className),
        ref: this.setTarget
      }), this.getOptions().map(function (item) {
        var value = (0, _utils.getValue)(_this3, item);

        if (value == null) {
          return null;
        }

        return _react["default"].createElement(_baseCom.AntSelect.Option, {
          text: item.text,
          data: item,
          key: item.value
        }, (0, _utils.getText)(_this3, item));
      }));
    }
  }]);

  return Select;
}(_DefineComponent3["default"]);
/**
 * 下拉树选择
 */


exports["default"] = Select;

var TreeSelect =
/*#__PURE__*/
function (_DefineComponent2) {
  _inherits(TreeSelect, _DefineComponent2);

  function TreeSelect() {
    var _getPrototypeOf3;

    var _this4;

    _classCallCheck(this, TreeSelect);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(TreeSelect)).call.apply(_getPrototypeOf3, [this].concat(args)));
    _this4.state = {
      childrenField: 'children',
      textField: 'text',
      valueField: 'value',
      showSearch: true,
      allowClear: true,
      suffixIcon: _react["default"].createElement(_Icon["default"], {
        type: "caret-down"
      }),
      treeDefaultExpandAll: true,
      filterTreeNode: filterTreeNode,
      placeholder: '请选择上级菜单'
    };
    return _this4;
  }

  _createClass(TreeSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initOptions();
    }
  }, {
    key: "initOptions",
    value: function initOptions() {
      var _this5 = this;

      (0, _util.toPromise)(this.props.loadData).then(function (options) {
        _this5.setState({
          options: (0, _arrayUtil.toAry)(options)
        });
      });
    }
  }, {
    key: "getTreeNodes",
    value: function getTreeNodes(list) {
      var _this6 = this;

      var textField = this.getProp('textField');
      var valueField = this.getProp('valueField');
      var childrenField = this.getProp('childrenField');
      var textFormatter = this.getProp('textFormatter');
      var valueFormatter = this.getProp('valueFormatter');
      return (0, _arrayUtil.toAry)(list).map(function (item) {
        if (!item) {
          return null;
        }

        var text = textFormatter ? textFormatter(item[textField], item) : item[textField];
        var value = valueFormatter ? valueFormatter(item[valueField], item) : item[valueField];
        return _react["default"].createElement(_baseCom.AntTreeSelect.TreeNode, {
          title: text,
          key: value,
          value: value
        }, _this6.getTreeNodes(item[childrenField]));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(AntdTreeSelect, (0, _util.getProps)(this), this.getTreeNodes(this.getOptions()));
    }
  }]);

  return TreeSelect;
}(_DefineComponent3["default"]);
/**
 * 过滤树节点
 */


exports.TreeSelect = TreeSelect;

function filterTreeNode(str, node) {
  return node.props.title.indexOf(str) > -1;
}