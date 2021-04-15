import {pathTo, setRoutes} from "../frame";
import Test from "../pages/Test";
import {FieldsRoutePaths} from "./dic";
import menus from './menus';
import Layout from "../pages/Layout";


export function updateRoutes(){
  const newMenus = menus.slice(0);
  console.log(newMenus);
  setRoutes([
    {
      path:'/',
      component:Layout,
      children:[
        ...newMenus,
        // {
        //   path:'/',
        //   component:() => {
        //     if(newMenus.length){
        //       setTimeout(() => {
        //         pathTo(newMenus[0].path);
        //       },0);
        //     }
        //     return null;
        //   }
        // }
      ],
      indexPath:FieldsRoutePaths.component,
    }
  ]);
}
