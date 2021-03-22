
import React, {PureComponent} from 'react';
import {Form,Upload,Img,Icon,Text,Input} from '@lib';

import './index.less';
import {random} from "@wangct/util";
import {Button } from "antd";
import {Swiper,Table} from "../../components";
import TableView from "../../components/TableView";
import Loading from "../../components/Loading";


export default class Test extends PureComponent{

  state = {
    options:[
      {
        title:'标题',
        field:'name',
        component:Input,
        required:true
      },
      {
        title:'封面',
        field:'cover',
        component:Upload,
      },
      {
        title:'封面',
        field:'cove222222r',
        component:Upload,
      },
      {
        title:'封面',
        field:'cove2222222r',
        component:Upload,
      },
      {
        title:'封面',
        field:'cov2e2222222r',
        component:Upload,
      },
    ],
    list:[],
    columns:[
      {
        title:'名称',
        dataIndex:'name'
      },
      {
        title:'年龄',
        dataIndex:'age'
      },
      {
        title:'成就',
        dataIndex:'a22ge',
        noWidth:true
      }
    ],
    tableData:[
      {
        name:'王垂通是sdsssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
      },
      {
        name:'2王垂通是sdsssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
      }
    ]
  };

  resize = () => {
    this.setState({
      tableData:[...this.state.tableData]
    })
  }

  render(){
    const {state} = this;
    return <div className="container">
      <Loading title={"wd"} loading />
      {/*<TableView
        filterOptions={state.options}
        columns={state.columns}
        dataSource={state.tableData}
        validable
      />
      <div>
        <Button onClick={this.resize}>刷新</Button>
      </div>*/}
    </div>
  }
}
