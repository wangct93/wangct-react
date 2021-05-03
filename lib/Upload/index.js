"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _DefineComponent2 = _interopRequireDefault(require("../frame/components/DefineComponent"));

var _Btn = _interopRequireDefault(require("../Btn"));

var _util = require("@wangct/util/lib/util");

var _arrayUtil = require("@wangct/util/lib/arrayUtil");

var _Flex = _interopRequireWildcard(require("../Flex"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Img = _interopRequireDefault(require("../Img"));

var _typeUtil = require("@wangct/util/lib/typeUtil");

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
 * 上传组件
  */
var Upload =
/*#__PURE__*/
function (_DefineComponent) {
  _inherits(Upload, _DefineComponent);

  function Upload() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Upload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Upload)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};

    _this.inputChange = function (e) {
      var files = e.target.files;
      var value = _this.isMultiple() ? Array.from(files) : files[0];

      _this.onChange(value);

      e.target.value = null;
    };

    _this.doClick = function () {
      _this.getElem().click();
    };

    _this.doRemove = function (index) {
      if (_this.isMultiple()) {
        var list = (0, _arrayUtil.toAry)(_this.getValue()).slice(0);
        list.splice(index, 1);

        _this.onChange(list);
      } else {
        _this.onChange(null);
      }
    };

    return _this;
  }

  _createClass(Upload, [{
    key: "getChildren",
    value: function getChildren() {
      var children = this.props.children;

      if (children) {
        var child = _react["default"].Children.only(this.props.children);

        return _react["default"].cloneElement(child, {
          onClick: this.doClick
        });
      }

      return _react["default"].createElement(_Btn["default"], {
        onClick: this.doClick,
        type: "primary",
        icon: "upload"
      }, "\u4E0A\u4F20\u56FE\u7247");
    }
  }, {
    key: "isMultiple",
    value: function isMultiple() {
      return this.props.multiple;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_react["default"].Fragment, null, this.getChildren(), _react["default"].createElement("input", _extends({}, (0, _utils.getDivProps)(this.props), {
        value: undefined,
        className: (0, _util.classNames)(this.props.className, 'w-upload-input'),
        multiple: this.isMultiple(),
        ref: this.setElem,
        type: "file",
        onChange: this.inputChange
      })), this.getProp('showList') && (0, _arrayUtil.toAry)(this.getValue()).map(function (file, index) {
        return _react["default"].createElement(_Flex["default"], {
          verticalCenter: true,
          className: "w-upload-item",
          key: index
        }, _this2.props.showPreview && _react["default"].createElement(ImgView, {
          blob: file
        }), _react["default"].createElement("div", {
          className: "w-upload-item-name"
        }, file.name), _react["default"].createElement(_Flex.FlexItem, null), _react["default"].createElement(_Icon["default"], {
          onClick: _this2.doRemove.bind(_this2, index),
          type: "delete"
        }));
      }));
    }
  }]);

  return Upload;
}(_DefineComponent2["default"]);

exports["default"] = Upload;

function ImgView(props) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      src = _useState2[0],
      setSrc = _useState2[1];

  (0, _react.useEffect)(function () {
    if ((0, _typeUtil.isStr)(props.blob)) {
      setSrc(props.blob);
    } else if (props.blob && isImgFileType(props.blob.type)) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var base64 = e.target.result;
        setSrc(base64);
      };

      reader.readAsDataURL(props.blob);
    }
  });

  if (src) {
    return _react["default"].createElement(_Img["default"], {
      className: "w-upload-item-img",
      src: src
    });
  }

  return _react["default"].createElement("div", null);
}

function isImgFileType(type) {
  return type.startsWith('image');
}