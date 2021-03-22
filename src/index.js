import {appStart} from "./components/frame";
import {updateRoutes} from "./json/routes";
import './styles/global.less';

appStart().then(() => {
  updateRoutes();
});
