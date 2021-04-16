"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util");

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _arrayUtil = require("@wangct/util/lib/arrayUtil");

var _promiseUtil = require("@wangct/util/lib/promiseUtil");

var _stringUtil = require("@wangct/util/lib/stringUtil");

var _baseCom = require("../utils/baseCom");

var _Select = require("../Select");

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
 * 树
 */
var Tree =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Tree, _DefineComponent);

  function Tree() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tree);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tree)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      options: [],
      textField: 'text',
      valueField: 'value',
      childrenField: 'children'
    };
    return _this;
  }

  _createClass(Tree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initOptions();
    }
  }, {
    key: "initOptions",
    value: function initOptions() {
      var _this2 = this;

      (0, _promiseUtil.toPromise)(this.props.loadData).then(function (options) {
        _this2.setState({
          options: (0, _arrayUtil.toAry)(options)
        });
      });
    }
  }, {
    key: "getTreeNodes",
    value: function getTreeNodes(list) {
      var _this3 = this;

      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return (0, _arrayUtil.toAry)(list).map(function (item) {
        if (!item) {
          return null;
        }

        var textFormatter = _this3.getProp('textFormatter');

        var valueFormatter = _this3.getProp('valueFormatter');

        var textField = _this3.getProp('textField');

        var valueField = _this3.getProp('valueField');

        var childrenField = _this3.getProp('childrenField');

        var title = textFormatter ? textFormatter(item[textField], item, parent) : item[textField];
        var value = valueFormatter ? valueFormatter(item[valueField], item, parent) : item[valueField];

        if (!item[childrenField]) {
          return _react["default"].createElement(_baseCom.AntTree.TreeNode, {
            data: item,
            title: title,
            key: value
          });
        }

        var childNodes = _this3.getTreeNodes(item[childrenField], item);

        return _react["default"].createElement(_baseCom.AntTree.TreeNode, {
          data: item,
          title: title,
          key: value
        }, childNodes);
      });
    }
  }, {
    key: "getSelectedKeys",
    value: function getSelectedKeys() {
      return (0, _arrayUtil.toAry)(this.getProp('selectedKeys')).map(function (item) {
        return (0, _stringUtil.toStr)(item);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.getOptions();
      return _react["default"].createElement(_baseCom.AntTree, _extends({}, (0, _util.getProps)(this), {
        selectedKeys: this.getSelectedKeys()
      }), this.getTreeNodes(options));
    }
  }]);

  return Tree;
}(_DefineComponent2["default"]);

exports["default"] = Tree;
Tree.select = _Select.TreeSelect;