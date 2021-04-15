"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _util = require("@wangct/util");

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
 * 轮播图
 */
var Swiper =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Swiper, _PureComponent);

  function Swiper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Swiper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Swiper)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      value: 0,
      animate: true,
      interval: 3000,
      left: 0,
      duration: 500
    };

    _this.toLeft = function () {
      var value = _this.getValue();

      if (value === 0) {
        var content = _this.getContent();

        _this.setState({
          left: _this.getLeft(content.length - 1)
        });

        value = content.length - 2;
      } else {
        value--;
      }

      _this.onChange(value);
    };

    _this.toRight = function () {
      var value = _this.getValue();

      var content = _this.getContent();

      if (value === content.length - 1) {
        value = 1;

        _this.setState({
          left: 0
        });
      } else {
        value++;
      }

      _this.onChange(value);
    };

    _this.setElem = function (ref) {
      _this.contentElem = ref;
    };

    _this.mouseEnter = function () {
      _this.clearInterval();
    };

    _this.mouseLeave = function () {
      _this.setInterval();
    };

    return _this;
  }

  _createClass(Swiper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setInterval();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.valueChange(_objectSpread({}, prevState, {}, prevProps));
    }
  }, {
    key: "valueChange",
    value: function valueChange(prevProps) {
      var _this2 = this;

      var prevValue = this.getValue(prevProps);
      var value = this.getValue();

      if (prevValue === value) {
        return;
      }

      this.setState({
        endLeft: this.getLeft()
      }, function () {
        _this2.startMove();
      });
    }
  }, {
    key: "startMove",
    value: function startMove() {
      var _this3 = this;

      this.stopMove();

      var _getProps = (0, _util.getProps)(this),
          duration = _getProps.duration;

      var _this$state = this.state,
          left = _this$state.left,
          endLeft = _this$state.endLeft;
      var dl = (endLeft - left) / duration * 30;
      this.durationTimer = setInterval(function () {
        var _this3$state = _this3.state,
            left = _this3$state.left,
            endLeft = _this3$state.endLeft;
        var current = left + dl;

        if (dl > 0 && current > endLeft || dl < 0 && current < endLeft) {
          _this3.stopMove();

          current = endLeft;
        }

        _this3.setState({
          left: current
        });
      }, 30);
    }
  }, {
    key: "stopMove",
    value: function stopMove() {
      clearInterval(this.durationTimer);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _util.getProps)(this);
      return props.value;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getValue();
      return -value * this.contentElem.offsetWidth;
    }
  }, {
    key: "setInterval",
    value: function (_setInterval) {
      function setInterval() {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function () {
        return _setInterval.toString();
      };

      return setInterval;
    }(function () {
      var _this4 = this;

      this.clearInterval();
      this.timer = setInterval(function () {
        _this4.toRight();
      }, (0, _util.getProps)(this).interval);
    })
  }, {
    key: "clearInterval",
    value: function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      clearInterval(this.timer);
    })
  }, {
    key: "onChange",
    value: function onChange(value) {
      this.setState({
        value: value
      });
      (0, _util.callFunc)(this.props.onChange, value);
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var children = (0, _util.toArray)(this.props.children);
      return [].concat(_toConsumableArray(children), [children[0]]);
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.state,
          props = this.props;
      return _react["default"].createElement("div", {
        onMouseEnter: this.mouseEnter,
        onMouseLeave: this.mouseLeave,
        className: (0, _util.classNames)('w-swiper', props.className),
        style: props.style
      }, _react["default"].createElement(_Icon["default"], {
        type: "left",
        onClick: this.toLeft
      }), _react["default"].createElement("div", {
        className: "w-swiper-view",
        ref: this.setElem
      }, _react["default"].createElement("div", {
        className: "w-swiper-content",
        style: {
          left: state.left
        }
      }, this.getContent())), _react["default"].createElement(_Icon["default"], {
        type: "right",
        onClick: this.toRight
      }));
    }
  }]);

  return Swiper;
}(_react.PureComponent);

exports["default"] = Swiper;