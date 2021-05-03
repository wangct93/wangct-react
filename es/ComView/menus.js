import {asyncVisualOptions, optionInputOptions, svgEditorOptions, tableOptions, uploadOptions} from "./options";
import {FieldsRoutePaths} from "./dic";


export default [
  {
    title:'可视区懒加载 AsyncVisual',
    path:FieldsRoutePaths.asyncVisual,
    options:asyncVisualOptions,
  },
  {
    title:'表格 Table',
    path:FieldsRoutePaths.table,
    options:tableOptions,
  },
  {
    title:'上传文件 Upload',
    path:FieldsRoutePaths.upload,
    options:uploadOptions,
  },
  {
    title:'选项输入 OptionInput',
    path:FieldsRoutePaths.optionInput,
    options:optionInputOptions,
  },
  {
    title:'矢量图编辑器 SvgEditor',
    path:FieldsRoutePaths.svgEditor,
    options:svgEditorOptions,
  }
];
