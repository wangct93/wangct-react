import {FieldsRoutePaths} from "./dic";
import ComView from "../pages/ComView";
import ComViewContent from "../pages/ComView/View";
import {tableOptions} from "../pages/ComView/options";
import React from "react";
import {pathJoin} from "../frame";


export default formatFullPath([
  {
    title:'异步加载',
    path:FieldsRoutePaths.async,
  },
  {
    title:'表格',
    path:FieldsRoutePaths.table,
    component:() => <ComViewContent options={tableOptions} />
  }
]);


function formatFullPath(menus){
  return menus.map((menu) => ({
    ...menu,
    fullPath:pathJoin(FieldsRoutePaths.component,menu.path),
  }));
}
