import React from 'react';
import { classNames, isDef, isFunc, pathJoin} from "@wangct/util";
import DefineComponent from "../frame/components/DefineComponent";
import {AntTabs} from "../utils/baseCom";
import {getPathname, pathTo, reduxConnect} from "../frame";
import {toStr} from "@wangct/util/lib/stringUtil";

/**
 * 封装tabs组件
 */
@reduxConnect(() => ({
  pathname:getPathname(),
}))
export default class Tabs extends DefineComponent{

  state = {
    options:[],
    usePath:false,
    fit:true,
    basePath:'/',
  };

  getBasePath(){
    let {pathname,basePath} = this.props;
    if(basePath){
      return basePath;
    }
    this.getOptions().forEach((opt) => {
      if(opt.path){
        pathname = pathname.replace(new RegExp(opt.path + '$'),'');
      }
    });
    return pathname || '/';
  }

  getActiveKey(){
    const value = this.isUsePath() ? this.getKeyByPath() : this.getValue();
    return isDef(value) ? value : this.getDefaultKey();
  }

  getKeyByPath(pathname = this.props.pathname){
    const options = this.getOptions();
    const target = options.find((opt) => {
      return pathMatch(this.getPath(opt),pathname)
    });
    return target && this.getKey(target);
  }

  getOptByKey(key){
    const options = this.getOptions();
    return options.find((opt) => {
      return this.getKey(opt) === key;
    });
  }

  getDefaultKey(){
    const target = this.getOptions()[0];
    return target && this.getKey(target);
  }

  getPath(opt){
    const pathFormatter = this.getProp('pathFormatter');
    return pathFormatter ? pathFormatter(opt.path,opt) : this.getOptPath(opt);
  }

  getOptPath(opt){
    return pathJoin(this.getBasePath(),opt.path);
  }

  getKey(opt){
    const {keyFormatter} = this.props;
    return keyFormatter ? keyFormatter(opt) : opt.key || opt.title;
  }

  isUsePath(){
    return this.getProp('usePath');
  }

  tabChange = (key) => {
    if(this.isUsePath()){
      const target = this.getOptByKey();
      if(target && target.path){
        pathTo(target.path);
      }
    }
    this.onChange(key);
  };

  render() {
    const {props} = this;
    const options = this.getOptions();
    return <AntTabs
      {...props}
      activeKey={this.getActiveKey()}
      onChange={this.tabChange}
      className={classNames('w-tabs',props.className,this.getProp('fit') && 'w-tabs-fit-height')}
    >
      {
        options.map((opt) => {
          const {component:Com,props:optProps = props.comProps} = opt;
          const comProps = isFunc(optProps) ? optProps(opt,options) : optProps;
          return <AntTabs.TabPane key={this.getKey(opt)} tab={opt.title}>
            <Com {...comProps} />
          </AntTabs.TabPane>;
        })
      }
    </AntTabs>;
  }
}

/**
 * 路径匹配
 * @author wangchuitong
 */
export function pathMatch(targetPath, pathname) {
  return pathname && targetPath && (toStr(pathname) + '/').startsWith(toStr(targetPath) + '/');
}
