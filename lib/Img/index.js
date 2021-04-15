"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("@wangct/util");

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _img_blank = _interopRequireDefault(require("../assets/images/img_blank.jpg"));

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

var _getImgQueueObj = getImgQueueObj(),
    addToQueue = _getImgQueueObj.addToQueue,
    removeToQueue = _getImgQueueObj.removeToQueue;
/**
 * 图片组件
 */


var Img =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Img, _DefineComponent);

  function Img() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Img);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Img)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      alt: '图片加载失败',
      status: 'wait',
      src: _this.props.normalSrc || _img_blank["default"]
    };

    _this.onLoad = function () {
      if (_this.state.status === 'loading') {
        _this.setState({
          status: 'finish'
        });

        (0, _util.callFunc)(_this.loadEnd);
      }
    };

    _this.onError = function () {
      _this.onLoad();
    };

    return _this;
  }

  _createClass(Img, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      addToQueue(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _util.callFunc)(this.loadEnd);
      removeToQueue(this);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this2 = this;

      this.checkProp(prevProps, 'src', function () {
        addToQueue(_this2);
      });
    }
  }, {
    key: "loadImg",
    value: function loadImg() {
      var _this3 = this;

      return new Promise(function (cb) {
        if (!_this3.props.src) {
          cb();
          return;
        }

        _this3.setState({
          src: _this3.props.src,
          status: 'loading'
        });

        _this3.loadEnd = cb;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("img", _extends({}, this.getProps(['normalSrc']), {
        src: this.state.src,
        onLoad: this.onLoad,
        onError: this.onError
      }));
    }
  }]);

  return Img;
}(_DefineComponent2["default"]);
/**
 * 获取图片队列
 * @returns {Promise<any>|{addToQueue: addToQueue, removeToQueue: removeToQueue}}
 */


exports["default"] = Img;

function getImgQueueObj() {
  var list = [];
  var map = new Map();
  var queue = new _util.Queue({
    data: list,
    func: function func(item) {
      return item.loadImg();
    },
    limit: 5
  });
  /**
   * 添加对象到队列
   * @param item
   */

  function addToQueue(item) {
    removeToQueue(item);
    list.push(item);
    queue.start();
  }
  /**
   * 从队列删除对象
   * @param item
   */


  function removeToQueue(item) {
    (0, _util.aryRemove)(list, item);
    map["delete"](item);
  }

  return {
    addToQueue: addToQueue,
    removeToQueue: removeToQueue
  };
}