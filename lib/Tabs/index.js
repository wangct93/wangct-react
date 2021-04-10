"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathMatch = pathMatch;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util");

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _baseCom = require("../utils/baseCom");

var _frame = require("../frame");

var _stringUtil = require("@wangct/util/lib/stringUtil");

var _dec, _class, _temp;

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

var Tabs = (
/**
 * 封装tabs组件
 */
_dec = (0, _frame.reduxConnect)(function () {
  return {
    pathname: (0, _frame.getPathname)()
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Tabs, _DefineComponent);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      options: [],
      usePath: false,
      fit: true,
      basePath: '/'
    };

    _this.tabChange = function (key) {
      if (_this.isUsePath()) {
        var target = _this.getOptByKey();

        if (target && target.path) {
          (0, _frame.pathTo)(target.path);
        }
      }

      _this.onChange(key);
    };

    return _this;
  }

  _createClass(Tabs, [{
    key: "getBasePath",
    value: function getBasePath() {
      var _this$props = this.props,
          pathname = _this$props.pathname,
          basePath = _this$props.basePath;

      if (basePath) {
        return basePath;
      }

      this.getOptions().forEach(function (opt) {
        if (opt.path) {
          pathname = pathname.replace(new RegExp(opt.path + '$'), '');
        }
      });
      return pathname || '/';
    }
  }, {
    key: "getActiveKey",
    value: function getActiveKey() {
      var value = this.isUsePath() ? this.getKeyByPath() : this.getValue();
      return (0, _util.isDef)(value) ? value : this.getDefaultKey();
    }
  }, {
    key: "getKeyByPath",
    value: function getKeyByPath() {
      var _this2 = this;

      var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.pathname;
      var options = this.getOptions();
      var target = options.find(function (opt) {
        return pathMatch(_this2.getPath(opt), pathname);
      });
      return target && this.getKey(target);
    }
  }, {
    key: "getOptByKey",
    value: function getOptByKey(key) {
      var _this3 = this;

      var options = this.getOptions();
      return options.find(function (opt) {
        return _this3.getKey(opt) === key;
      });
    }
  }, {
    key: "getDefaultKey",
    value: function getDefaultKey() {
      var target = this.getOptions()[0];
      return target && this.getKey(target);
    }
  }, {
    key: "getPath",
    value: function getPath(opt) {
      var pathFormatter = this.getProp('pathFormatter');
      return pathFormatter ? pathFormatter(opt.path, opt) : this.getOptPath(opt);
    }
  }, {
    key: "getOptPath",
    value: function getOptPath(opt) {
      return (0, _util.pathJoin)(this.getBasePath(), opt.path);
    }
  }, {
    key: "getKey",
    value: function getKey(opt) {
      var keyFormatter = this.props.keyFormatter;
      return keyFormatter ? keyFormatter(opt) : opt.key || opt.title;
    }
  }, {
    key: "isUsePath",
    value: function isUsePath() {
      return this.getProp('usePath');
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var props = this.props;
      var options = this.getOptions();
      return _react["default"].createElement(_baseCom.AntTabs, _extends({}, props, {
        activeKey: this.getActiveKey(),
        onChange: this.tabChange,
        className: (0, _util.classNames)('w-tabs', props.className, this.getProp('fit') && 'w-tabs-fit-height')
      }), options.map(function (opt) {
        var Com = opt.component,
            _opt$props = opt.props,
            optProps = _opt$props === void 0 ? props.comProps : _opt$props;
        var comProps = (0, _util.isFunc)(optProps) ? optProps(opt, options) : optProps;
        return _react["default"].createElement(_baseCom.AntTabs.TabPane, {
          key: _this4.getKey(opt),
          tab: opt.title
        }, _react["default"].createElement(Com, comProps));
      }));
    }
  }]);

  return Tabs;
}(_DefineComponent2["default"]), _temp)) || _class);
exports["default"] = Tabs;

/**
 * 路径匹配
 * @author wangchuitong
 */
function pathMatch(targetPath, pathname) {
  return pathname && targetPath && ((0, _stringUtil.toStr)(pathname) + '/').startsWith((0, _stringUtil.toStr)(targetPath) + '/');
}