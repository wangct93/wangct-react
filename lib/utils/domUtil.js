"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mousedown = mousedown;

var _util = require("@wangct/util/lib/util");

/**
 * 鼠标按下事件
 * @param e
 * @param options
 */
function mousedown(e) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ox = e.clientX;
  var oy = e.clientY;
  var _options$moveLimit = options.moveLimit,
      moveLimit = _options$moveLimit === void 0 ? 10 : _options$moveLimit;
  var isMove = false;
  var mousemove = (0, _util.getThrottleFunc)(function (event) {
    if (isMove) {
      var dx = event.clientX - ox;
      var dy = event.clientY - oy;
      (0, _util.callFunc)(options.onMove, e, dx, dy);
    } else if (Math.abs(event.clientX - ox) > moveLimit || Math.abs(event.clientY - oy) > moveLimit) {
      isMove = true;
      (0, _util.callFunc)(options.onBeforeMove, e);
    }
  }, 30);

  var mouseup = function mouseup(e) {
    if (!isMove) {
      (0, _util.callFunc)(options.onClick, e);
    } else {
      (0, _util.callFunc)(options.onUp, e, e.clientX - ox, e.clientY - oy);
    }

    document.removeEventListener('mousemove', mousemove);
    document.removeEventListener('mouseup', mouseup);
  };

  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseup);
}