import {FieldsRoutePaths} from "./dic";
import ComView from "../pages/ComView";
import ComViewContent from "../pages/ComView/View";
import {asyncVisualOptions, optionInputOptions, tableOptions, uploadOptions} from "../pages/ComView/options";
import React from "react";
import {pathJoin} from "../frame";


export default formatFullPath([
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
  }
]);


function formatFullPath(menus){
  return menus.map((menu) => ({
    ...menu,
    fullPath:pathJoin(FieldsRoutePaths.component,menu.path),
    component:() => <ComViewContent options={menu.options} />,
  }));
}
