import React from 'react';

import css from './index.less';
import {Table} from 'antd';
import {connect} from 'react-redux';

import  {classNames, isDef} from 'wangct-util';

@connect(({global}) => ({
  resize:global.resize
}))
export default class WctTable extends React.PureComponent {
  state = {
    pageSizeOptions:['10','20','50','100','1000'],
    container:null,
  };

  getTableHeight(){
    const container = this.getContainer();
    if(!container){
      return 200;
    }
    const header = container.querySelector('.ant-table-header table');
    const tableHeaderHeight = header && header.offsetHeight || 0;
    return container.offsetHeight - tableHeaderHeight;
  }

  getTableWidth(){
    const {scrollX = true,columns = []} = this.props;
    return scrollX ? columns.reduce((pv,item) => pv + this.getColumnWidth(item),0) : undefined;
  }

  getContainer(){
    return this.container;
  }

  getColumnWidth(col){
    if(col.width){
      return col.width;
    }
    const fontSize = parseInt(getComputedStyle(this.getContainer() || document.body).fontSize) || 14;
    return col.title.length * fontSize + 34;
  }

  getColumns(){
    const container = this.getContainer();
    const {columns = []} = this.props;
    const scrollX = this.getTableWidth();
    const hasScrollX = container && scrollX > container.offsetWidth;
    return columns.map(item => {
      const {fixedAuto} = item;
      const extProps = {};
      if(fixedAuto && hasScrollX){
        extProps.fixed = fixedAuto;
      }
      return {
        ...item,
        ...extProps,
        width:scrollX && !item.noWidth ? this.getColumnWidth(item) : item.width,
      }
    })
  }

  getScroll(){
    return {
      y:this.props.fitHeight && this.getTableHeight(),
      x:this.getTableWidth(),
      ...this.props.scroll
    }
  }

  setContainer = (ref) => {
    this.container = ref;
  };

  getData(){
    const {dataSource = [],rowKey} = this.props;
    if(isDef(rowKey)){
      return dataSource;
    }
    return dataSource.map((item,index) => ({
      ...item,
      key:isDef(item.key) ? item.key : index
    }))
  }

  render(){
    const {props} = this;
    return <div className={classNames('wct-table',props.fitHeight && 'wct-table-fit')} ref={this.setContainer}>
      <Table
        {...props}
        dataSource={this.getData()}
        columns={this.getColumns()}
        pagination={false}
        scroll={this.getScroll()}
      />
    </div>
  }
}
