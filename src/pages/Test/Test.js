/**
 * Created by wangct on 2018/12/26.
 */
import React, {PureComponent} from 'react';
import {connect} from 'dva';
import {Auth,Text,Swiper,Img} from '@lib';

import './Test.less';

export default class Test extends PureComponent{
  render(){
    return <div>
      {
        new Array(10).fill().map(item => {
          return <Img style={{width:100}} src={'//fanyi.bdstatic.com/static/translation/img/header/logo_40c4f13.svg'} />
        })
      }
    </div>
  }
}
