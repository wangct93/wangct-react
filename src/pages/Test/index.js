
import React, {PureComponent} from 'react';
import {Form,Upload,Img,Icon,Text,Input} from '@lib';

import './index.less';
import {random,loop} from "wangct-util";
import {Button } from "antd";
import {DefineComponent, Swiper, Table} from "../../components";
import {TableSearch} from "../../components/Table";
import {aryToObject} from "@wangct/util/lib/arrayUtil";


export default class Test extends DefineComponent{

  state = {
    columns:[
      {
        title: 'Name',
        field: 'name',
      },
      {
        title: '22',
        field: 'tel',
      },
    ],
    filterOptions:[
      {
        title:'输入框',
        field:'wad',
        component:Input,
      }
    ]
  };

  render(){
    return <TableSearch
      columns={this.state.columns}
      filterOptions={this.state.filterOptions}
      loadData={getTestLoadData(this.state.columns,50)}
      fit
    />;
  }
}

/**
 * 获取测试表格数据
 * @author wangchuitong
 */
export function getTestLoadData(columns,length = 30){
  const data = new Array(length).fill(true).map(() => {
    return aryToObject(columns,'field',(col) => {
      if(col.range){
        return col.range[Math.floor(Math.random() * col.range.length)];
      }
      return col.title;
    });
  });
  return async ({page_num,page_size}) => {
    await new Promise((cb) => {
      setTimeout(() => {
        cb();
      },0);
    });
    const content = page_size ? data.slice((page_num - 1) * page_size,page_num * page_size) : data;
    return {
      list:content,
      total:length,
    };
  };
}
