import {FieldsRoutePaths} from "./dic";
import Test from "../pages/Test";
import ComView from "../../es/ComView";


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
  },
]
