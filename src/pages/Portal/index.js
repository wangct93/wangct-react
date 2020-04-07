
import React, {PureComponent} from 'react';
import {Form,Upload,Img,Icon,Text,Input} from '@lib';

import './index.less';
import {random} from "wangct-util";
import {Button } from "antd";
import {DefineComponent, Swiper, Table} from "../../components";
import TableView from "../../components/TableView";
import Loading from "../../components/Loading";
import {Portal} from '@lib';


export default class Test extends DefineComponent{

  state = {
  };

  render(){
    return <Portal >
      <div>123</div>
    </Portal>;
  }
}
