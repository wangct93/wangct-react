import {setRoutes} from "../frame";
import Test from "../pages/Test";
import {FieldsRoutePaths} from "./dic";
import menus from './menus';
import Layout from "../pages/Layout";


export function updateRoutes(){
  const newMenus = menus.slice(0);
  const homeIndex = newMenus.findIndex(item => {
    return item.path === FieldsRoutePaths.home;
  });

  if(homeIndex !== -1){
    const homeMenu = newMenus[homeIndex];
    newMenus.splice(homeIndex,1);
    newMenus.push(homeMenu);
  }
  setRoutes([
    {
      path:'/',
      component:Layout,
      children:[
        ...newMenus,
      ],
      indexPath:FieldsRoutePaths.home,
    }
  ]);
}
