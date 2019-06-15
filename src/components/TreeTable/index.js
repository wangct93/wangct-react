import React, {PureComponent} from 'react';
import util, {reactUtil,dateUtil} from 'wangct-util';
import {Header} from '@lib';

import css from './index.less';
import {Divider, Tree} from "antd";

const dispatch = reactUtil.getDispatch('global');
const history = reactUtil.getHistory();
const {getProps} = reactUtil;

export default class Self extends PureComponent {
  state = {
    data:[
      {
        name:'parent1',
        count:23,
        zzsj:dateUtil.format(),
        children:[
          {
            name:'wd',
            count:11
          }
        ]
      },
      {
        name:'parent2',
        count:233333,
        zzsj:dateUtil.format(),
        children:[
          {
            name:'wd22',
            count:22233,
            zzsj:dateUtil.format(),
            children:[
              {
                name:'wd22222',
                count:22233,
                zzsj:dateUtil.format()
              }
            ]
          },

        ]
      }
    ],
    columns:[
      {
        title:'节点名称',
        dataIndex:'count2',
        width:229
      },
      {
        title:'转账次数',
        dataIndex:'count',
        width:100
      },
      {
        title:'转账金额',
        dataIndex:'zzje',
        width:100
      },
      {
        title:'转账时间',
        dataIndex:'zzsj',
        width:160
      },
      {
        title:'收款次数',
        dataIndex:'skcs',
        width:100
      },
      {
        title:'收款金额',
        dataIndex:'skje',
        width:100
      }
    ]
  };

  getTreeTitle(item,level){
    const dr = level * 18;
    return <div className={css.node_item}>
      <span className={css.node_title} style={{paddingRight:dr,marginRight:-dr}}>
        <span className={css.text_title}>{item.name}</span>
      </span>
      {
        this.state.columns.slice(1).map(col => {
          return <span style={{width:col.width}} className={css.node_col}>{item[col.dataIndex] || 0}</span>
        })
      }
    </div>;
  }

  getTreeContent(list = [],level = 0){
    return list.map(item => {
      const {name} = item;
      return <Tree.TreeNode title={this.getTreeTitle(item,level)} key={name}>
        {
          this.getTreeContent(item.children,level + 1)
        }
      </Tree.TreeNode>
    })
  }

  getHeaderContent(){
    return this.state.columns.map(item => {
      return <div className={css.header_item} style={{width:item.width}} key={item.title}>
        {item.title}
      </div>
    })
  }

  render() {
    return <div className={css.container}>
      <div className={css.header}>
        {
          this.getHeaderContent()
        }
      </div>
      <div className={css.body}>
        <Tree>
          {
            this.getTreeContent(this.state.data)
          }
        </Tree>
      </div>

    </div>
  }
}


class FideInUp extends PureComponent {
  render() {
    return <React.Fragment>

    </React.Fragment>
  }
}
