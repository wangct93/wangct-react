/**
 * Created by wangct on 2019/3/9.
 */
import React from 'react';
import {setCache,getCache} from '@wangct/util';
import DefineComponent from "../frame/components/DefineComponent";
import {getIconScriptUrl} from "../utils/utils";
import {AntIcon} from "../utils/baseCom";


/**
 * 图标
 */
export default class Icon extends DefineComponent {

  getIcon() {
    return this.isIconfont() ? getIconfont(this.props.scriptUrl) : AntIcon;
  }

  isIconfont(){
    return this.props.iconfontType != null;
  }

  render() {
    const Com = this.getIcon();
    const {props} = this;
    const comProps = {...props};
    delete comProps.iconfontType;
    return <Com {...comProps} type={this.isIconfont() ? props.iconfontType : props.type} />;
  }
}

/**
 * 获取iconfont
 * @param scriptUrl
 * @returns {DOMPoint | SVGNumber | string | SVGTransform | SVGLength | SVGPathSeg | any}
 */
function getIconfont(scriptUrl = getIconScriptUrl()){
  let Iconfont = getCache(scriptUrl);
  if(!Iconfont){
    Iconfont = AntIcon.createFromIconfontCN({
      scriptUrl,
    });
    setCache(scriptUrl,Iconfont);
  }
  return Iconfont;
}
