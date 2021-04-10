"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util");

var _arrayUtil = require("@wangct/util/lib/arrayUtil");

var _stringUtil = require("@wangct/util/lib/stringUtil");

var _Btn = _interopRequireDefault(require("../Btn"));

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _AsyncVisual = _interopRequireDefault(require("../AsyncVisual"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 列表加载项
 */
var List =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(List, _DefineComponent);

  function List() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(List)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      loading: false,
      autoLoad: true,
      firstLoaded: false,
      page_num: 1,
      page_size: 50,
      total: 0
    };

    _this.initState = function () {
      _this.setState({
        page_num: 1,
        total: 0,
        options: []
      }, function () {
        _this.loadData();
      });
    };

    _this.loadMore = function () {
      _this.setState({
        page_num: _this.state.page_num + 1
      }, function () {
        _this.loadData();
      });
    };

    return _this;
  }

  _createClass(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.checkProp(prevProps, 'initSign', this.initState);
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      this.setState({
        loading: true
      });
      (0, _util.toPromise)(this.props.loadData, {
        page_num: this.state.page_num,
        page_size: this.state.page_size
      })["finally"](function () {
        _this2.setState({
          loading: false
        });
      }).then(function (result) {
        _this2.setOptions([].concat(_toConsumableArray(_this2.getOptions()), _toConsumableArray((0, _arrayUtil.toAry)(result.list))));

        _this2.setState({
          total: result.total
        });
      });
    }
  }, {
    key: "hasMore",
    value: function hasMore() {
      var _this$state = this.state,
          total = _this$state.total,
          page_num = _this$state.page_num,
          page_size = _this$state.page_size;
      return total > page_num * page_size;
    }
  }, {
    key: "getLoadBtn",
    value: function getLoadBtn() {
      var props = (0, _util.getProps)(this);

      if (props.loading) {
        return _react["default"].createElement("div", {
          className: "w-list-alert"
        }, "\u6B63\u5728\u52A0\u8F7D\u4E2D...");
      }

      if (!this.hasMore()) {
        return _react["default"].createElement("div", {
          className: "w-list-alert"
        }, "\u6211\u4E5F\u662F\u6709\u5E95\u7EBF\u7684");
      }

      return props.autoLoad ? _react["default"].createElement(_AsyncVisual["default"], {
        onShow: this.loadMore,
        scrollElem: this.props.scrollElem
      }) : _react["default"].createElement(_Btn["default"], {
        onClick: this.loadMore
      }, "\u52A0\u8F7D\u66F4\u591A");
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var _getProps = (0, _util.getProps)(this),
          renderItem = _getProps.renderItem;

      var options = this.getOptions();
      return this.getOptions().map(function (item, index) {
        var content = renderItem ? renderItem(item, index, options) : (0, _stringUtil.toStr)(item);
        return _react["default"].createElement(_react["default"].Fragment, {
          key: index
        }, content);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var props = (0, _util.getProps)(this);
      return _react["default"].createElement("div", {
        className: (0, _util.classNames)('w-list', props.className),
        style: props.style
      }, this.getContent(), this.getLoadBtn());
    }
  }]);

  return List;
}(_DefineComponent2["default"]);

exports["default"] = List;