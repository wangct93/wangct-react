import React from 'react';

import './index.less';
import {Table} from 'antd';
import {connect} from 'react-redux';

import {classNames, getProps, isDef} from 'wangct-util';

@connect(({global}) => ({
  resize:global.resize
}))
export default class TableCap extends React.PureComponent {
  state = {
    size:'small',
    pagination:false,
    elem:null
  };

  formatColumnWidth(columns = getProps(this).columns){
    const fontSize = this.getFontSize();
    const paddingWidth = this.getThPadding();
    return columns.map(item => {
      return {
        ...item,
        width:item.noWidth ? item.width : this.getColumnWidth(item,fontSize,paddingWidth),
      }
    })
  }

  getColumns(){
    return this.formatColumnWidth();
  }

  getScrollY(){
    const elem = this.getElem();
    const {fitHeight} = getProps(this);
    if(!elem || !fitHeight){
      return;
    }
    const header = elem.querySelector('.ant-table-header table');
    if(!header){
      this.checkHeader();
    }
    const tableHeaderHeight = header && header.offsetHeight || 0;
    return elem.offsetHeight - tableHeaderHeight;
  }

  getScrollX(){
    const columns = this.formatColumnWidth();
    return columns.reduce((pv,item) => pv + this.getColumnWidth(item),0);
  }

  getColumnWidth(col,fontSize = this.getFontSize(),paddingWidth = this.getThPadding()){
    if(col.width){
      return col.width;
    }
    console.log(col.title.length * fontSize , paddingWidth)
    return col.title.length * fontSize + paddingWidth + 2;
  }

  getFontSize(){
    return parseInt(getComputedStyle(this.getElem() || document.body).fontSize) || 14;
  }

  getThPadding(){
    const elem = this.getElem();
    let td;
    if(!elem || !(td = elem.querySelector('.ant-table-tbody td'))){
      return 32;
    }
    return parseInt(getComputedStyle(td).paddingLeft) * 2;
  }

  getScroll(){
    return {
      y:this.getScrollY(),
      x:this.getScrollX(),
      ...this.props.scroll
    }
  }

  setElem = (ref) => {
    this.setState({
      elem:ref
    });

  };

  checkHeader(){
    const {headerLoaded} = this.state;
    if(!headerLoaded){
      setTimeout(() => {
        this.setState({
          headerLoaded:true
        });
      });
    }
  }

  getElem(){
    return this.state.elem;
  }

  getData(){
    const {dataSource = [],rowKey} = this.props;
    if(isDef(rowKey)){
      return dataSource;
    }
    return dataSource.map((item,index) => ({
      ...item,
      key:isDef(item.key) ? item.key : index
    }));
  }

  render(){
    const props = getProps(this);
    return <div className={classNames('wct-table',props.fitHeight && 'wct-table-fit')} ref={this.setElem}>
      <Table
        {...props}
        dataSource={this.getData()}
        columns={this.getColumns()}
        scroll={this.getScroll()}
      />
    </div>
  }
}
