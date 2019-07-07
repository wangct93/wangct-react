/**
 * Created by wangct on 2018/12/26.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Auth,Text,Swiper,Img} from '@lib';

import './index.less';

export default class Index extends PureComponent{
  render(){
    return <div>
      {
        new Array(100).fill().map((item,i) => {
          return <Img style={{width:100}} key={i} src={Math.random() > 0.5 ? '//fanyi.bdstatic.com/static/translation/img/header/logo_40c4f13.svg' : 'wwwwwwwwwwww'} normalSrc="https://imgcache.qq.com/open_proj/proj_qcloud_v2/mc_2014/global/css/v1/nav/img/nav.import.svg" errorSrc="https://mc.qcloudimg.com/static/img/1262b4e2a89916ed6ba98f14bbe9204c/BA.svg" />
        })
      }
    </div>
  }
}
