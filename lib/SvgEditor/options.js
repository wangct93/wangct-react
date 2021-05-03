"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodeOption = getNodeOption;
exports.options = exports.FieldsNode = void 0;

var _Node = require("./Node");

var _arrayUtil = require("@wangct/util/lib/arrayUtil");

var _globalUtil = require("../frame/utils/globalUtil");

var FieldsNode = {
  rect: 'rect',
  line: 'line',
  circle: 'circle',
  text: 'text',
  img: 'img'
};
exports.FieldsNode = FieldsNode;
var options = [{
  title: '矩形',
  component: _Node.NodeRect,
  value: FieldsNode.rect
}, {
  title: '线',
  component: _Node.NodeLine,
  value: FieldsNode.line
}, {
  title: '园',
  component: _Node.NodeCircle,
  value: FieldsNode.circle
}, {
  title: '文本',
  component: _Node.NodeText,
  value: FieldsNode.text
}, {
  title: '图片',
  component: _Node.NodeImg,
  value: FieldsNode.img
}];
exports.options = options;

function getNodeOption(nodeType) {
  var map = (0, _globalUtil.getConfig)('svgEditorOptionsMap');

  if (!map) {
    map = (0, _arrayUtil.aryToObject)(options, 'value');
    (0, _globalUtil.setConfig)('svgEditorOptionsMap', map);
  }

  return map[nodeType];
}