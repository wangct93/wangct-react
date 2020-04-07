
import React, {PureComponent} from 'react';
import {Form,Upload,Img,Icon,Text,Input} from '@lib';

import './index.less';


export default class Layout extends PureComponent{

  state = {
  };

  render(){
    return <div className="container">
      <div className="content">
        {this.props.children}
      </div>
    </div>
  }
}
