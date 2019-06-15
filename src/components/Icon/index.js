/**
 * Created by wangct on 2019/3/9.
 */
import React, {PureComponent} from 'react';
import {Icon} from 'antd';
import util from 'wangct-util';

const cache = util.cache();

export default class IconBox extends PureComponent {

  getIcon() {
    const {scriptUrl} = this.props;
    return scriptUrl ? getIconfont(scriptUrl) : Icon;
  }

  render() {
    const Icon = this.getIcon();
    return <Icon {...this.props} />
  }
}

function getIconfont(scriptUrl){
  let Iconfont = cache.getItem(scriptUrl);
  if(!Iconfont){
    Iconfont = Icon.createFromIconfontCN({
      scriptUrl
    });
    cache.setItem(scriptUrl,Iconfont);
  }
  return Iconfont;
}
