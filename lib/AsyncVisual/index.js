"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var AsyncVisual =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(AsyncVisual, _PureComponent);

  function AsyncVisual() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, AsyncVisual);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(AsyncVisual)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scrollEvent", function () {
      var _this$container$getBo = _this.container.getBoundingClientRect(),
          top = _this$container$getBo.top,
          left = _this$container$getBo.left,
          right = _this$container$getBo.right,
          bottom = _this$container$getBo.bottom;

      if (!(right < 0 || bottom < 0 || left > window.innerWidth || top > window.innerHeight)) {
        _this.loadComponent();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setElem", function (ref) {
      _this.container = ref;
    });
    return _this;
  }

  (0, _createClass2["default"])(AsyncVisual, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addScrollEvent();
      this.scrollEvent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeScrollEvent();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateScrollElem(prevProps);
    }
  }, {
    key: "updateScrollElem",
    value: function updateScrollElem(prevProps) {
      var oldElem = this.getScrollElem(prevProps);
      var elem = this.getScrollElem();

      if (oldElem !== elem) {
        this.removeScrollEvent(oldElem);
        this.addScrollEvent();
      }
    }
  }, {
    key: "getScrollElem",
    value: function getScrollElem() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      return props.scrollElem || window;
    }
  }, {
    key: "addScrollEvent",
    value: function addScrollEvent() {
      var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getScrollElem();

      if (elem && elem.addEventListener) {
        elem.addEventListener('scroll', this.scrollEvent);
      }
    }
  }, {
    key: "removeScrollEvent",
    value: function removeScrollEvent() {
      var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getScrollElem();

      if (elem && elem.removeEventListener) {
        elem.removeEventListener('scroll', this.scrollEvent);
      }
    }
  }, {
    key: "loadComponent",
    value: function loadComponent() {
      var _this2 = this;

      this.removeScrollEvent();
      Promise.resolve(this.props.content).then(function (content) {
        _this2.setState({
          content: content,
          loaded: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props,
          state = this.state;
      return _react["default"].createElement(_react["default"].Fragment, null, state.loaded ? state.content : _react["default"].createElement("div", {
        className: props.className,
        style: props.style,
        ref: this.setElem
      }));
    }
  }]);
  return AsyncVisual;
}(_react.PureComponent);

exports["default"] = AsyncVisual;