import {FieldsRoutePaths} from "./dic";
import ComView from "../pages/ComView";
import ComViewContent from "../pages/ComView/View";
import {asyncVisualOptions, tableOptions, uploadOptions} from "../pages/ComView/options";
import React from "react";
import {pathJoin} from "../frame";


export default formatFullPath([
  {
    title:'可视区懒加载 AsyncVisual',
    path:FieldsRoutePaths.asyncVisual,
    component:() => <ComViewContent options={asyncVisualOptions} />
  },
  {
    title:'表格 Table',
    path:FieldsRoutePaths.table,
    component:() => <ComViewContent options={tableOptions} />
  },
  {
    title:'上传文件 Upload',
    path:FieldsRoutePaths.upload,
    component:() => <ComViewContent options={uploadOptions} />
  }
]);


function formatFullPath(menus){
  return menus.map((menu) => ({
    ...menu,
    fullPath:pathJoin(FieldsRoutePaths.component,menu.path),
  }));
}
