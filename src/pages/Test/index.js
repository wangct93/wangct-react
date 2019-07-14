
import React, {PureComponent} from 'react';
import {Form,Upload} from '@lib';

import './index.less';
import {random} from "wangct-util";
import {Button, Input} from "antd";

export default class Test extends PureComponent{

  state = {
    options:[
      {
        title:'标题',
        field:'name',
        component:Input,
      },
      {
        title:'封面',
        field:'cover',
        component:Upload,
        props:{
          limit:1
        }
      },
    ]
  }

  render(){
    return <div>
      <Form options={this.state.options}/>
    </div>
  }
}
