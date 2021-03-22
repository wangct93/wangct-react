
import React, {PureComponent} from 'react';
import {Form,Upload,Img,Icon,Text,Input} from '@lib';

import './index.less';
import {DefineComponent} from "../../components";
import Tabs from "../../components/Tabs";


export default class Test extends DefineComponent{

  state = {
    options:[
      {
        title:'tab1',
        path:'/t',
        component:(props) => {
          return <div>123</div>
        },
      },
      {
        title:'tab13',
        path:'/ft',
        component:(props) => {
          return <div>ft</div>
        },
      }
      ]
  };

  render(){
    const {state} = this;
    return <Tabs fit={false} options={this.getOptions()} />
  }
}
