"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = request;
exports.requestApi = requestApi;
exports.requestCache = requestCache;

var _typeUtil = require("@wangct/util/lib/typeUtil");

var _utils = require("./utils");

var _alert = require("./alert");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _window = window,
    fetch = _window.fetch;
/**
 * 请求方法
 * @param url
 * @param options
 * @returns {*}
 */

function request(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options = formatOptions(options);
  var pro = fetch(url, options).then(checkStatus).then(function (res) {
    var _options = options,
        _options$json = _options.json,
        json = _options$json === void 0 ? true : _options$json,
        blob = _options.blob,
        text = _options.text;

    if (blob) {
      return res.blob();
    } else if (text) {
      return res.text();
    } else if (json) {
      return res.json().then(function (data) {
        var _options2 = options,
            _options2$matchData = _options2.matchData,
            matchData = _options2$matchData === void 0 ? true : _options2$matchData,
            _options2$alertError = _options2.alertError,
            alertError = _options2$alertError === void 0 ? true : _options2$alertError;

        if (!matchData) {
          return data;
        }

        if (data.code !== 0) {
          if (alertError && (0, _typeUtil.isStr)(data.message)) {
            (0, _alert.alertErrInfo)(data.message);
          }

          throw data.message;
        }

        return data.data;
      });
    }

    return res;
  })["catch"](function () {
    throw '请求失败';
  });

  if (options.loading) {
    pro = (0, _utils.showLoading)(pro);
  }

  return pro;
}
/**
 * api请求
  * @param url
 * @param options
 */


function requestApi(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if ((0, _utils.isDevEnv)()) {
    return request('/api' + url, options);
  }

  return request(url, options);
}
/**
 * 字典请求
 */


function requestCache(_x) {
  return _requestCache.apply(this, arguments);
}
/**
 * 格式化选项
 * @param options
 * @returns {*}
 */


function _requestCache() {
  _requestCache = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url) {
    var needCache,
        func,
        data,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            needCache = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;

            func = function func() {
              return requestApi(url);
            };

            if (needCache) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", func());

          case 4:
            data = (0, _utils.getGlobalConfig)(url);

            if (data) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return func();

          case 8:
            data = _context.sent;
            (0, _utils.setGlobalConfig)(url, data);

          case 10:
            return _context.abrupt("return", data);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _requestCache.apply(this, arguments);
}

function formatOptions(options) {
  var body = options.body,
      _options$method = options.method,
      method = _options$method === void 0 ? 'post' : _options$method;

  if (body && !(body instanceof FormData)) {
    if (options.formatBody !== false) {
      options.body = JSON.stringify(options.body);
    }

    options.headers = _objectSpread({}, options.headers, {
      'content-type': 'application/json'
    });
  }

  options.method = method;
  return options;
}
/**
 * 检测状态
 * @param response
 * @returns {*}
 */


function checkStatus(response) {
  var status = response.status;

  if (status >= 200 && status < 300) {
    return response;
  }

  var error = new Error(response.statusText);
  error.response = response;
  throw error;
}