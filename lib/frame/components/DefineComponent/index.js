"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _util = require("@wangct/util");

var _util2 = require("@wangct/util/lib/util");

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

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DefineComponent)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _this.setElem = function (elem) {
      _this.elem = elem;
    };

    _this.setTarget = function (target) {
      _this.refTarget = target;
    };

    _this.setSubTarget = function (target) {
      _this.refSubTarget = target;
    };

    _this.setForm = function (form) {
      _this.form = form;
    };

    _this.formChange = function (formValue) {
      _this.setState({
        formValue: formValue
      });

      (0, _util2.callFunc)(_this.props.formChange, formValue);
    };

    _this.onChange = function (value) {
      _this.setState({
        value: value
      });

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _util2.callFunc.apply(void 0, [_this.props.onChange, value].concat(args));
    };

    _this.setSelectedKey = function (key) {
      _this.setState({
        selectedKey: key
      });

      (0, _util2.callFunc)(_this.props.onSelect, key);
    };

    _this.fieldChange = function (field, value) {
      _this.setState(_defineProperty({}, field, value));
    };

    _this.setStateElem = function (elem) {
      _this.setState({
        _elem: elem
      });
    };

    _this.setTable = function (table) {
      _this.table = table;
    };

    _this.focus = function () {
      var elem = _this.getElem();

      if (elem && elem.focus) {
        elem.focus();
      }
    };

    return _this;
  }

  _createClass(DefineComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      this.initValue();
      this.initOptions();
      this.initData();
    }
  }, {
    key: "initOptions",
    value: function initOptions() {
      var _this2 = this;

      var optionsPromise = this.optionsPromise;

      if (optionsPromise) {
        (0, _util.toPromise)(optionsPromise).then(function (options) {
          _this2.setOptions(options);
        });
      }
    }
  }, {
    key: "checkProp",
    value: function checkProp(prevProps, field, func) {
      if (!(0, _util2.equal)(prevProps[field], this.props[field])) {
        _util2.callFunc.call(this, func);
      }
    }
  }, {
    key: "checkField",
    value: function checkField(prevProps, field, func) {
      if (!(0, _util2.equal)(prevProps[field], this.props[field])) {
        _util2.callFunc.call(this, func);
      }
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
    key: "getData",
    value: function getData() {
      return this.getProp('data') || {};
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.setState({
        data: data
      });
      (0, _util2.callFunc)(this.props.onData, data);
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

      return this.getState()[key];
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state || {};
    }
  }, {
    key: "getForm",
    value: function getForm() {
      return this.form;
    }
  }, {
    key: "getFormValue",
    value: function getFormValue() {
      return this.getProp('formValue') || {};
    }
  }, {
    key: "getSelectedKey",
    value: function getSelectedKey() {
      return this.getProp('selectedKey');
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this.getProp('disabled');
    }
  }, {
    key: "isReadonly",
    value: function isReadonly() {
      return this.getProp('readonly') || this.getProp('readOnly');
    }
  }, {
    key: "isReadOnly",
    value: function isReadOnly() {
      return this.isReadonly();
    }
  }, {
    key: "getColumns",
    value: function getColumns() {
      return (0, _util.toAry)(this.getProp('columns'));
    }
  }, {
    key: "initValue",
    value: function initValue() {
      var _this3 = this;

      var defaultValue = this.getProp('defaultValue');

      if (this.getProp('value') == null && defaultValue != null) {
        this.onChange(defaultValue);
      }

      if (this.valuePromise) {
        (0, _util.toPromise)(this.valuePromise).then(function (value) {
          _this3.onChange(value);
        });
      }
    }
  }, {
    key: "initData",
    value: function initData() {
      var _this4 = this;

      if (this.dataPromise) {
        (0, _util.toPromise)(this.dataPromise).then(function (data) {
          _this4.setData(data);
        });
      }
    }
  }, {
    key: "getPathParams",
    value: function getPathParams() {
      return this.props.match && this.props.match.params || {};
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      options = (0, _util.toAry)(options);
      this.setState({
        options: options
      });
      (0, _util2.callFunc)(this.props.onOptionsChange, options);
    }
  }, {
    key: "getStateElem",
    value: function getStateElem() {
      return this.state && this.state._elem;
    }
  }, {
    key: "getTable",
    value: function getTable() {
      return this.table;
    }
  }, {
    key: "tableSearch",
    value: function tableSearch(params) {
      var table = this.getTable();

      if (table && table.doSearch) {
        table.doSearch(params);
      }
    }
  }, {
    key: "tableReload",
    value: function tableReload() {
      var table = this.getTable();

      if (table && table.doReload) {
        table.doReload();
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {// console.error(error);
      // this.setState({
      //   _isError:true,
      // });
      // @ts-ignore
      // this.normalRender = this.render;
      // this.render = () => {
      //   return <div>error</div>;
      // };
    }
  }, {
    key: "getFilterOptions",
    value: function getFilterOptions() {
      return (0, _util.toAry)(this.getProp('filterOptions'));
    }
  }, {
    key: "getList",
    value: function getList() {
      return (0, _util.toAry)(this.getProp('list'));
    }
  }]);

  return DefineComponent;
}(_react.PureComponent);

exports["default"] = DefineComponent;