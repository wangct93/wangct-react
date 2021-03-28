import './styles/global.less';
import {updateRoutes} from "./json/routes";
import {appStart} from "./frame";

appStart().then(() => {
  updateRoutes();
});
