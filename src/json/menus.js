import {FieldsRoutePaths} from "./dic";
import ComView from "../pages/ComView";
import comMenus from "./comMenus";
import Test from "../pages/Test";


export default [
  {
    title:'首页',
    path:FieldsRoutePaths.home,
    component:Test,
  },
  {
    title:'组件',
    path:FieldsRoutePaths.component,
    component:ComView,
    children:comMenus,
    indexPath:comMenus[0].path,
  },
]
