"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _options = require("./options");

var _dic = require("./dic");

var _default = [{
  title: '可视区懒加载 AsyncVisual',
  path: _dic.FieldsRoutePaths.asyncVisual,
  options: _options.asyncVisualOptions
}, {
  title: '表格 Table',
  path: _dic.FieldsRoutePaths.table,
  options: _options.tableOptions
}, {
  title: '上传文件 Upload',
  path: _dic.FieldsRoutePaths.upload,
  options: _options.uploadOptions
}, {
  title: '选项输入 OptionInput',
  path: _dic.FieldsRoutePaths.optionInput,
  options: _options.optionInputOptions
}, {
  title: '矢量图编辑器 SvgEditor',
  path: _dic.FieldsRoutePaths.svgEditor,
  options: _options.svgEditorOptions
}];
exports["default"] = _default;