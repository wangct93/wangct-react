
import React, {PureComponent} from 'react';
import {Form,Upload,Img,Icon,Text,Input} from '@lib';

import './index.less';
import {random} from "wangct-util";
import {Button } from "antd";
import {DefineComponent, Swiper, Table} from "../../components";
import TableView from "../../components/TableView";
import Loading from "../../components/Loading";
import {Tabs} from '@lib';


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
