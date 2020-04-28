
import React, {PureComponent} from 'react';
import {Form,Upload,Img,Icon,Text,Input} from '@lib';

import './index.less';
import {random,loop} from "wangct-util";
import {Button } from "antd";
import {DefineComponent, Swiper, Table} from "../../components";
import TableView from "../../components/TableView";
import Loading from "../../components/Loading";
import {Portal} from '@lib';


export default class Test extends DefineComponent{

  state = {
  };

  doTest = () => {
    this.setState({
      _date:+new Date(),
    })
  }

  setElem = (elem) => {
    console.log(2222222);
    if(elem){
      window.a = elem;
    }
  }

  render(){
    console.log(12);
    return <Table columns={[
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text, row, index) => {
          if (index < 1) {
            return <a>{text}</a>;
          }
          return {
            children: <a>{text}</a>,
            props: {
              colSpan: 2,
            },
          };
        },
      },
      {
        title: '22',
        dataIndex: 'tel',
        render: (text, row, index) => {
          if (index < 1) {
            return <a>{text}</a>;
          }
          return {
            children: <a>{text}</a>,
            props: {
              colSpan: 0,
            },
          };
        },
      },
    ]} dataSource={[{name:'w',tel:'dd'},{name:'wf',tel:'dd2'}]} />;
  }
}

class Test1 extends DefineComponent {
  render() {
    return <div>
11
    </div>
  }
}
