"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _wangctUtil = _interopRequireWildcard(require("wangct-util"));

require("./index.less");

var interval = 300;

var Swiper =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Swiper, _PureComponent);

  function Swiper() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Swiper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Swiper)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      current: 1,
      animate: true
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toLeft", function () {
      _this.move(_this.state.current - 1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toRight", function () {
      _this.move(_this.state.current + 1);
    });
    return _this;
  }

  (0, _createClass2["default"])(Swiper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.move(1, true);
    }
  }, {
    key: "move",
    value: function move(current, isCheck) {
      var _this2 = this;

      var len = this.getContent().length;
      current = (current + len) % len;
      this.setState({
        current: current,
        animate: !isCheck
      }, function () {
        if (!isCheck) {
          setTimeout(function () {
            _this2.check();
          }, interval);
        }
      });
    }
  }, {
    key: "check",
    value: function check() {
      var current = this.state.current;
      var len = this.getContent().length;

      if (current === 0) {
        this.move(len - 2, true);
      } else if (current === len - 1) {
        this.move(1, true);
      }
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      var current = this.state.current;
      var box = this.contentElem || {};
      return -current * (box.offsetWidth || 0);
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var children = _wangctUtil.arrayUtil.toArray(this.props.children);

      return [children[children.length - 1]].concat((0, _toConsumableArray2["default"])(children), [children[0]]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var state = this.state,
          props = this.props;
      console.log(props.children);
      return _react["default"].createElement("div", {
        className: _wangctUtil["default"].classNames('wct-swiper', props.className),
        style: props.style
      }, _react["default"].createElement(_icon["default"], {
        type: "left",
        onClick: this.toLeft
      }), _react["default"].createElement("div", {
        className: "wct-swiper-content",
        ref: function ref(t) {
          return _this3.contentElem = t;
        }
      }, _react["default"].createElement("div", {
        className: _wangctUtil["default"].classNames('wct-swiper-view', state.animate && 'wct-swiper-view-transition'),
        style: {
          left: this.getLeft() + 'px'
        }
      }, this.getContent())), _react["default"].createElement(_icon["default"], {
        type: "right",
        onClick: this.toRight
      }));
    }
  }]);
  return Swiper;
}(_react.PureComponent);

exports["default"] = Swiper;