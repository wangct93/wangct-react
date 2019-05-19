"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _wangctUtil = _interopRequireWildcard(require("wangct-util"));

var _blank_img = _interopRequireDefault(require("../assets/blank_img.png"));

var _getProps = _wangctUtil.reactUtil.getProps;

var addToQueue = function addToQueue() {
  var list = [];

  var queue = _wangctUtil["default"].queue({
    list: list,
    func: function func(item, cb) {
      item.load(cb);
    },
    limit: 5
  });

  return function (item) {
    if (!list.includes(item)) {
      list.push(item);
      queue.start();
    }
  };
}();

var Img =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Img, _PureComponent);

  function Img() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Img);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Img)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      alt: '图片加载失败',
      viewSrc: _blank_img["default"]
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onLoad", function () {
      _this.next();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onError", function (e) {
      _this.setState({
        viewSrc: _blank_img["default"]
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Img, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      addToQueue(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmount = true;
      this.next();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.src !== this.props.src) {
        addToQueue(this);
      }
    }
  }, {
    key: "getProps",
    value: function getProps() {
      return _getProps(this);
    }
  }, {
    key: "load",
    value: function load(cb) {
      if (this.isUnmount) {
        cb();
      } else {
        this.loadFunc = cb;
        var src = this.props.src;
        var viewSrc = this.state.viewSrc;

        if (src === viewSrc) {
          this.next();
        } else {
          this.setState({
            viewSrc: src
          });
        }
      }
    }
  }, {
    key: "next",
    value: function next() {
      _wangctUtil["default"].callFunc(this.loadFunc);

      this.loadFunc = null;
    }
  }, {
    key: "render",
    value: function render() {
      var props = _getProps(this);

      return _react["default"].createElement("img", (0, _extends2["default"])({}, props, {
        src: props.viewSrc,
        onLoad: this.onLoad,
        onError: this.onError
      }));
    }
  }]);
  return Img;
}(_react.PureComponent);

exports["default"] = Img;