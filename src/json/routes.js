import {setRoutes} from "../frame";
import Test from "../pages/Test";


export function updateRoutes(){
  setRoutes([
    {
      path:'/',
      component:Test,
    }
  ]);
}
