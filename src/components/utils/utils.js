import Input from "../Input";
import Select from '../Select';

/**
 * 判断组件是否在DOM树里
 * @param target
 * @returns {*}
 */
export function isMounted(target){
  return target.updater && target.updater.isMounted && target.updater.isMounted(target);
}

/**
 * 获取文本
 * @param target
 * @param data
 */
export function getText(target,data) {
  data = data || {};
  const formatter = target.getProp ? target.getProp('textFormatter') : this.props.textFormatter;
  if (formatter) {
    return formatter(data.text, data);
  }
  return data.text;
}


/**
 * 获取文本
 * @param target
 * @param data
 */
export function getValue(target,data) {
  data = data || {};
  const formatter = target.getProp ? target.getProp('valueFormatter') : this.props.valueFormatter;
  if (formatter) {
    return formatter(data.value, data);
  }
  return data.value;
}

/**
 * 获取输入组件
 * @param type
 * @returns {*}
 */
export function getInputCom(type){
  const map = {
    input:Input,
    select:Select,
  };
  return map[type];
}

/**
 * 获取div的属性
 * @param props
 */
export function getDivProps(props){
  const newProps = {...props};
  const fields = ['column','verticalCenter','wrap','draw','data'];
  fields.forEach((field) => {
    delete newProps[field];
  });
  return newProps;
}

export function getIconScriptUrl(){
  return getConfig('iconScriptUrl');
}

export function setIconScriptUrl(url){
  setConfig('iconScriptUrl',url);
}

const cacheConfig = {};
export function setConfig(key,value){
  cacheConfig[key] = value;
}

export function getConfig(key){
  return cacheConfig[key];
}
