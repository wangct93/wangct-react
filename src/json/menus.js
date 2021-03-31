import {FieldsRoutePaths} from "./dic";
import ComView from "../pages/ComView";
import comMenus from "./comMenus";


export default [
  // {
  //   title:'首页',
  //   path:FieldsRoutePaths.home,
  // },
  {
    title:'组件',
    path:FieldsRoutePaths.component,
    component:ComView,
    children:comMenus,
    indexPath:comMenus[0].path,
  },
]
