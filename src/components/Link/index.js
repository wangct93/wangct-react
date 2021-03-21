/**
 * Created by wangct on 2019/1/19.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {classNames, getProps} from "@wangct/util";
import {getFrameState, getPathname, pathMatch, pathTo} from "../../frame";
import DefineComponent from "../DefineComponent";

/**
 * 路由跳转组件
 */
@connect(({}) => ({
  pathname:getPathname(),
}))
export default class Link extends DefineComponent {

  state = {
    activeName:'active',
  };

  onClick = () => {
    if(this.isDisabled()){
      return;
    }
    pathTo(this.getPath());
  };

  getPath(){
    const {to,path = to} = this.props;
    return path;
  }

  isActive(){
    return pathMatch(this.getPath(),this.props.pathname);
  }

  getClassName(){
    const props = getProps(this);
    return classNames(props.className,this.isActive() && props.activeName);
  }

  render() {
    return <a className={this.getClassName()} onClick={this.onClick}>{this.props.children}</a>
  }
}
