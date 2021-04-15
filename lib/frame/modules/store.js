"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStore = getStore;
exports.getStoreDispatch = getStoreDispatch;

var _redux = require("redux");

var _util = require("@wangct/util");

var _history = _interopRequireDefault(require("./history"));

var _globalUtil = require("../utils/globalUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 获取store对象
 * @returns {any}
 */
function getStore(models) {
  var _this = this;

  var cacheStore = (0, _globalUtil.getConfig)('store');

  if (cacheStore) {
    return cacheStore;
  }

  models = (0, _util.toAry)(models);
  var watchPropsMap = getWatchPropsMap(models);
  var store = (0, _redux.createStore)(function (state, action) {
    var _split = (action.type || '').split('/'),
        _split2 = _slicedToArray(_split, 2),
        namespace = _split2[0],
        funcField = _split2[1];

    var _ref = models.find(function (item) {
      return item.namespace === namespace;
    }) || {},
        _ref$reducers = _ref.reducers,
        reducers = _ref$reducers === void 0 ? {} : _ref$reducers,
        _ref$effects = _ref.effects,
        effects = _ref$effects === void 0 ? {} : _ref$effects;

    var updateState = {};

    if (!reducers.update) {
      reducers.update = update;
    }

    if (!reducers.updateField) {
      reducers.updateField = update;
    }

    if (effects[funcField]) {
      var gener = effects[funcField](action, {
        put: put.bind(_this, namespace),
        select: select,
        call: call
      });
      setTimeout(function () {
        loopGenerator(gener);
      }, 0);
    }

    if (reducers[funcField]) {
      var oldState = state[namespace] || {};
      var scopeState = reducers[funcField](oldState, action) || {};
      var watchState = getWatchState(watchPropsMap[namespace], scopeState, oldState);
      updateState[namespace] = _objectSpread({}, scopeState, {}, watchState);
    }

    return _objectSpread({}, state, {}, updateState);
  }, {});
  /**
   * dispatch
   * @param namespace
   * @param action
   * @returns {Promise<any>}
   */

  function put(namespace, action) {
    getStoreDispatch(store, namespace)(action);
    return Promise.resolve(action);
  }
  /**
   * 获取state
   * @param func
   * @returns {Promise<any>}
   */


  function select(func) {
    return Promise.resolve(func(store.getState()));
  }
  /**
   * 执行异步函数
   * @param args
   * @returns {Promise<*[]>|*}
   */


  function call() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var target = args[0];

    if ((0, _util.isPromise)(target)) {
      return target;
    } else if ((0, _util.isFunc)(target)) {
      return target.apply(void 0, _toConsumableArray(args.slice(1)));
    } else {
      return Promise.resolve(args);
    }
  }

  models.forEach(function (model) {
    var subscriptions = model.subscriptions,
        namespace = model.namespace;
    store.dispatch({
      type: model.namespace + '/update',
      field: 'multiple',
      data: model.state
    });

    if (subscriptions) {
      setTimeout(function () {
        Object.keys(subscriptions).forEach(function (key) {
          (0, _util.callFunc)(subscriptions[key], {
            dispatch: getStoreDispatch(store, namespace),
            history: _history["default"]
          });
        });
      }, 0);
    }
  });
  return store;
}
/**
 * 获取store的dispatch
 * @param store
 * @param namespace
 * @returns {function(...[*]=)}
 */


function getStoreDispatch(store) {
  var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'global';
  return function (action) {
    store.dispatch(_objectSpread({}, action, {
      type: formatType(action.type, namespace)
    }));
  };
}
/**
 * 格式化类型
 * @param type
 * @param namespace
 * @returns {string}
 */


function formatType() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var namespace = arguments.length > 1 ? arguments[1] : undefined;

  var _type$split = type.split('/'),
      _type$split2 = _slicedToArray(_type$split, 2),
      typespace = _type$split2[0],
      funcField = _type$split2[1];

  return funcField ? type : namespace + '/' + typespace;
}
/**
 * 循环遍历生成器
 * @param gener
 * @param params
 */


function loopGenerator(gener, params) {
  var _gener$next = gener.next(params),
      value = _gener$next.value,
      done = _gener$next.done;

  if (!done) {
    if ((0, _util.isPromise)(value)) {
      value.then(function (data) {
        loopGenerator(gener, data);
      });
    } else {
      loopGenerator(gener, value);
    }
  }
}
/**
 * 更新字段
 * @param state
 * @param field
 * @param data
 * @param parentField
 */


function update(state, _ref2) {
  var field = _ref2.field,
      data = _ref2.data,
      parentField = _ref2.parentField;
  var extState = field === 'multiple' ? data : _defineProperty({}, field, data);

  if (parentField) {
    extState = _defineProperty({}, parentField, _objectSpread({}, state[parentField], {}, extState));
  }

  return _objectSpread({}, state, {}, extState);
}
/**
 * 获取监听属性map
 * @param models
 */


function getWatchPropsMap(models) {
  return (0, _util.aryToObject)(models, 'namespace', function (model) {
    var _model$watchs = model.watchs,
        watchs = _model$watchs === void 0 ? {} : _model$watchs,
        _model$watch = model.watch,
        watch = _model$watch === void 0 ? watchs : _model$watch;
    var mapData = {};
    (0, _util.objForEach)(watch, function (value, key) {
      var temp = key.split(',');
      temp.forEach(function (itemKey) {
        var ary = mapData[itemKey] || [];
        ary.push({
          func: value,
          args: temp
        });
        mapData[itemKey] = ary;
      });
    });
    return mapData;
  });
}
/**
 * 获取监听的state
 */


function getWatchState(watchProps, state, originState) {
  var watchState = {};
  var tempMap = new Map();
  (0, _util.objForEach)(watchProps, function (value, key) {
    if (state[key] !== originState[key]) {
      (0, _util.toAry)(watchProps[key]).forEach(function (item) {
        callWatchFunc(item);
      });
    }
  });
  /**
   * 调用监听函数
   * @param data
   */

  function callWatchFunc(data) {
    if (tempMap.get(data.func)) {
      return;
    }

    tempMap.set(data.func, true);
    var args = (0, _util.toAry)(data.args).map(function (name) {
      return state[name];
    });
    var funcState = data.func.apply(data, _toConsumableArray(args).concat([state]));
    watchState = _objectSpread({}, watchState, {}, funcState);
  }

  return watchState;
}