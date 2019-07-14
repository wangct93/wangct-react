import React from 'react';


import css from './index.less';
import {Button, message} from "antd";
import PageTable from "../PageTable";
import FilterBox from "../QueryBox";
import  {
  showLoading,
  getProps,
  objectUtil,
  dateFormat,
  isString,
  isDef,
  callFunc,
  isPromise,
  isFunc, classNames, isArray, isObject, aryToObject
} from 'wangct-util';

export default class TableView extends React.PureComponent{

  state = {
    filterValues:{},
    filterOptions:[],
    columns:[],
    tableData:[],
    oldParams:null,
    pagination:{
      current:1,
      pageSize:this.props.pageSize || 20,
      total:0,
      pageSizeOptions:this.props.pageSizeOptions || ['10','20','50','100','1000'],
      onChange:this.pageChange.bind(this)
    },
    loading:false,
    bordered:true
  };

  initFilterValues(value){
    parsePromise(value).then(parseValue => {
      this.setState({
        filterValues:parseValue,
        initFilterValues:parseValue
      })
    })
  }

  filterChange = (value) => {
    this.setState({
      filterValues:value
    })
  };

  getFilterValues(){
    return this.state.filterValues;
  }

  isValidParams(params){
    if(!params){
      return;
    }
    const {filterOptions = []} = this.props;
    const isEmptyValue = (v) => {
      return !v || Array.isArray(v) && v.length === 0;
    };
    const target = filterOptions.find(item => {
      return item.required && isEmptyValue(params[item.field]);
    });
    if(target){
      message.info(`${target.title}不能为空！`);
    }else{
      const msg = filterOptions.map(item => {
        const {validator} = item.component;
        if(validator){
          const message = validator(params[item.field]);
          return isString(message) ? message : ''
        }
      }).filter(item => !!item)[0];
      if(msg){
        message.info(msg);
      }else{
        return true;
      }
    }
  }

  loadTableData(params){
    const {props} = this;
    const {loadData,beforeLoad,afterLoad} = props;
    const queryParams = isDef(beforeLoad) ? callFunc(beforeLoad,params) : params;
    if(queryParams){
      const pro = callFunc(loadData,queryParams);
      if(isPromise(pro)){
        // this.setState({
        //   loading:true
        // });
        showLoading((close) => {
          pro.then(data => {
            close();
            data = isDef(afterLoad) ? callFunc(afterLoad,data) : data;
            const total = data.total_count || 0;
            let list = data.content || [];
            if(!this.props.rowKey){
              list = list.map((item,index) => ({
                ...item,
                key:item.key === undefined ? index : item.key
              }))
            }

            const {pagination:{current,pageSize}} = this.state;
            const maxPage = Math.ceil(total / pageSize);
            if(current > maxPage && maxPage){
              this.pageChange(maxPage,pageSize,null);
            }else{
              message.success(`成功查询到${total}条数据`);
              this.setState({
                loading:false,
                oldParams:params,
                tableData:list,
                pagination:{
                  ...this.state.pagination,
                  total,
                }
              });
            }
          }).catch(() => {
            close();
            this.setState({
              loading:false,
              tableData:[],
              pagination:{
                ...this.state.pagination,
                total:0
              }
            });
          });
        },'正在查询中，请稍候...');
        return pro;
      }
    }
  }

  getParams(extParams = {}){
    const {filterValues,pagination} = this.state;
    const {filterOptions = []} = this.props;

    const hasChecks = aryToObject(filterOptions,'field',item => item.hasCheck);
    const values = objectUtil.filter(filterValues,(value,key,obj) => {
      return (hasChecks[key] === false || obj[key + '_checked']) && value !== '';
    });
    return {
      ...values,
      page_num:pagination.current,
      page_size:pagination.pageSize,
      ...extParams,
    }
  }

  doSearch = (e) => {
    const {validable} = this.props;
    if(validable){
      this.filterTarget.validator((err) => {
        if(!err){
          this.searchFunc();
        }
      })
    }else{
      this.searchFunc();
    }
  };

  searchFunc = () => {
    const {pagination:{pageSize}} = this.state;
    const selfParams = this.getParams({
      page_size:pageSize,
      page_num:1,
    });
    const {beforeSearch} = this.props;
    const params = isFunc(beforeSearch) ? beforeSearch(selfParams) : selfParams;
    let pro;
    if(this.isValidParams(params)){
      pro = this.loadTableData(params);
    }
    if(pro){
      this.pageChange(1,pageSize,true);
      callFunc(this.props.onSearch,params);
    }
  };

  doReset = (e) => {

    const {initFilterValues} = this.state;
    this.setState({
      filterValues:initFilterValues || {},
      tableData:[],
      pagination:{
        ...this.state.pagination,
        total:0
      }
    });
    callFunc(this.props.onReset,this,e);
  };

  pageChange(pageNum,pageSize,isSearch){
    const {oldParams} = this.state;
    this.setState({
      pagination:{
        ...this.state.pagination,
        current:pageNum,
        pageSize
      }
    });
    if(!isSearch){
      this.loadTableData({
        ...oldParams,
        page_num:pageNum,
        page_size:pageSize
      });
    }
  };

  showLoading(bol = true){
    this.setState({
      loading:bol
    })
  }

  reload(){
    this.loadTableData(this.state.oldParams || this.getParams());
  }

  exportJson(data){
    showLoading((close) => {
      Promise.resolve(data).then(data => {
        // exportJson(data,{
        //   filename:'表格数据_' + dateFormat('YYYYMMDDhhmmss') + '.xlsx'
        // }).then(close).catch(close);
      });
    },'正在导出数据，请稍候...');
  }

  doExport = () => {
    const data = this.state.tableData.slice(0);
    data.forEach(item => {
      delete item.key
    });
    this.exportJson(data);
  };

  doExportAll = () => {
    const {pagination:{total},oldParams} = this.state;
    if(total){
      const params = {
        ...oldParams,
        page_num:1,
        page_size:total
      };
      const {loadData,beforeLoad} = getProps(this);
      const queryParams = isDef(beforeLoad) ? callFunc(beforeLoad,params) : params;
      const pro = callFunc(loadData,queryParams).then(data => data.content);
      this.exportJson(pro);
    }
  };

  getSearchBtn = () => {
    return <Button type="primary" onClick={this.doSearch}>查询</Button>;
  }

  getResetBtn = () => {
    return <Button type="primary" onClick={this.doReset}>重置</Button>;
  }

  getExportBtn = () => {
    return <Button type="primary" onClick={this.doExport}>导出当页</Button>;
  }

  getExportAllBtn = () => {
    return <Button type="primary" onClick={this.doExportAll}>导出全部</Button>;
  }

  getBtnItem(item){
    if(React.isValidElement(item)){
      return item;
    }
    if(isString(item)){
      const btns = {
        search:this.getSearchBtn,
        reset:this.getResetBtn,
        export:this.getExportBtn,
        exportAll:this.getExportAllBtn
      };
      return callFunc(btns[item]) || item;
    }
    if(isObject(item) && item.title && item.onClick){
      return <Button type="primary" onClick={item.onClick}>{item.title}</Button>;
    }
  }

  getBtn(){
    const {btn} = this.props;
    const btnList = callFunc(btn) || btn || ['search','reset'];
    const content = React.isValidElement(btnList) ? btnList : btnList.map((item,index) => <React.Fragment key={index}>{this.getBtnItem(item)}</React.Fragment>);
    return <div className="wct-filter-btn-box">{content}</div>
  }

  setFilter = (ref) => {
    this.filterTarget = ref;
  }

  rowClassName = (row,index) => {
    const {selectedKey,rowClassName,rowKey = 'key'} = getProps(this);
    return classNames(isDef(selectedKey) && row[rowKey] === selectedKey && 'selected',callFunc(rowClassName,row,index) || rowClassName)
  };

  getTableContent = () => {
    const {state} = this;
    const props = getProps(this);
    const {fitHeight = true} = props;
    return <PageTable
      {...getProps(this,['filterOptions','oldParams','filterValues','className'])}
      fitHeight={fitHeight}
      dataSource={state.tableData}
      pagination={state.pagination}
      loading={state.loading}
      scroll={props.tableScroll}
      rowClassName={this.rowClassName}
    />;
  }

  getContent(){
    const {content} = this.props;
    return content ? content(this.getTableContent) : this.getTableContent();
  }

  render() {
    const {state} = this;
    const props = getProps(this);
    const {fitHeight = true} = props;
    return <div className={classNames('wct-table-view',props.className,fitHeight || 'wct-table-view-nofit',props.btnNewLine && 'btn-new-line')} style={props.style}>
      <FilterBox ref={this.setFilter} validable={props.validable} btn={this.getBtn()} value={state.filterValues} onChange={this.filterChange} options={props.filterOptions} />
      {this.getContent()}
    </div>
  }
}

function parsePromise(data = {}){
  if(isArray(data)){

    return Promise.all(data.map((item) => Promise.resolve(callFunc(item) || item)));
  }else if(isObject(data)){
    const keys = Object.keys(data);
    const pros = keys.map((key) => Promise.resolve(callFunc(data[key]) || data[key]));
    return Promise.all(pros).then(result => {
      return aryToObject(keys,(key) => key,(key,index) => result[index]);
    });
  }
  return Promise.all([]);
}
