import React from 'react';
import { Tabs} from 'antd';
import {connect} from 'react-redux';
// @ts-ignore
import css from "./index.less";
import {callFunc, classNames,getProps} from "wangct-util";
import DefineComponent from "../DefineComponent";

/**
 * 封装tabs组件
 */
@connect(({global}) => ({
  pathname:global.pathname,
}))
export default class TabsMod extends DefineComponent{

  state = {
    options:[],
    basePath:'',
    pathFormatter:this.pathFormatter.bind(this),
    usePath:true,
    value:this.getKey(this.getOptions()[0])
  };

  pathFormatter(path){
    return getProps(this).basePath + path;
  }

  getActiveKey(){
    if(!this.isUsePath()){
      return this.getValue();
    }
    const options = this.getOptions();
    const target = options.find((opt) => matchPath(this.getPath(opt),this.props.pathname)) || options[0];
    return this.getKey(target);
  }

  getValue(){
    return getProps(this).value;
  }

  getPath(opt){
    if(!opt){
      return;
    }
    const {pathFormatter} = getProps(this);
    return pathFormatter ? pathFormatter(opt.path,opt) : opt.path;
  }

  getKey(opt){
    if(!opt){
      return;
    }
    const {keyFormatter} = this.props;
    return keyFormatter ? keyFormatter(opt) : opt.title;
  }

  isUsePath(){
    return getProps(this).usePath;
  }

  tabChange = (key) => {
    if(this.isUsePath()){
      const target = this.getOptions().find((opt) => this.getKey(opt) === key);
      const path = this.getPath(target);
      if(path){
        history.push(this.getPath(target));
      }
    }
    this.setState({
      value:key,
    });
    callFunc(this.props.onChange,key);
  };

  validOptions(options){
    return options;
  }

  getOptions(){
    return this.validOptions(getProps(this).options || []);
  }

  render() {
    const props = getProps(this);
    return <div className={classNames(css.container,'afc-tabs-wrap',props.className)} style={props.style}>
      <Tabs activeKey={this.getActiveKey()} onChange={this.tabChange}>
        {
          this.getOptions().map((opt) => {
            const {component:Com} = opt;
            const {getComProps} = props;
            const comProps = getComProps ? getComProps(opt,this) : {};
            return <Tabs.TabPane key={opt.title} tab={opt.title}>
              <Com {...comProps} />
            </Tabs.TabPane>;
          })
        }
      </Tabs>
    </div>;
  }
}

function matchPath(optPath,pathname){
  return (pathname + '/').startsWith(optPath + '/');
}
