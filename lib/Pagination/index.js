"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util");

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _baseCom = require("../utils/baseCom");

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
 * 分页
 */
var Pagination =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Pagination, _DefineComponent);

  function Pagination() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pagination)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      current: 1,
      pageSize: 20,
      total: 0,
      pageSizeOptions: ['10', '20', '50', '100', '1000'],
      showQuickJumper: true,
      showSizeChanger: true,
      // hideOnSinglePage:true,
      showTotal: function showTotal(total, range) {
        return "\u5F53\u524D\u663E\u793A\u7B2C ".concat(range[0], " - ").concat(range[1], " \u6761\uFF0C\u603B\u5171 ").concat(total, " \u6761");
      }
    };

    _this.onChange = function (num, size) {
      _this.setState({
        current: num,
        pageSize: size
      });

      (0, _util.callFunc)(_this.props.onChange, num, size);
    };

    return _this;
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var props = (0, _util.getProps)(this);
      return _react["default"].createElement(_baseCom.AntPagination, _extends({}, props, {
        className: (0, _util.classNames)('w-pagination', props.className),
        onShowSizeChange: this.onChange,
        onChange: this.onChange
      }));
    }
  }]);

  return Pagination;
}(_DefineComponent2["default"]);

exports["default"] = Pagination;