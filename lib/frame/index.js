"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  appStart: true,
  DefineComponent: true,
  history: true
};
exports.appStart = appStart;
Object.defineProperty(exports, "DefineComponent", {
  enumerable: true,
  get: function get() {
    return _DefineComponent2["default"];
  }
});
Object.defineProperty(exports, "history", {
  enumerable: true,
  get: function get() {
    return _history2["default"];
  }
});

require("./styles/global.less");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _utils = require("./utils/utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _state = require("./utils/state");

Object.keys(_state).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _state[key];
    }
  });
});

var _Router = _interopRequireDefault(require("./components/Router"));

var _store = require("./modules/store");

var _DefineComponent2 = _interopRequireDefault(require("./components/DefineComponent"));

var _history2 = _interopRequireDefault(require("./modules/history"));

var _request = require("./utils/request");

Object.keys(_request).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _request[key];
    }
  });
});

var _path = require("./utils/path");

Object.keys(_path).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _path[key];
    }
  });
});

var _alert = require("./utils/alert");

Object.keys(_alert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _alert[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * 渲染方法
 */
function appStart() {
  return _appStart.apply(this, arguments);
}

function _appStart() {
  _appStart = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var elem,
        models,
        store,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            elem = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'root';
            _context.next = 3;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require('./models'));
            }).then(function (mod) {
              return mod["default"];
            });

          case 3:
            models = _context.sent;
            elem = (0, _utils.getElem)(elem);
            store = (0, _store.createStore)(models);
            (0, _state.setStore)(store);
            (0, _reactDom.render)(_react["default"].createElement(_Router["default"], {
              store: store
            }), elem);
            _context.next = 10;
            return new Promise(function (cb) {
              setTimeout(cb, 0);
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _appStart.apply(this, arguments);
}