import {createBrowserHistory,createHashHistory} from 'history';
import {getConfig} from "../utils/globalUtil";
import {setConfig} from "../../../frame/utils/globalUtil";
let history = getConfig('history');
if(!history){
  history = getConfig('historyMode') === 'hash' ?  createHashHistory() : createBrowserHistory();
  setConfig('history',history);
}
export default history;
