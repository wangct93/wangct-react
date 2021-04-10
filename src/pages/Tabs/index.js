
import React, {PureComponent} from 'react';
import './index.less';
import {Tabs} from '@lib';
import DefineComponent from "../../frame/components/DefineComponent";


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
    return <Tabs options={this.getOptions()} />
  }
}
