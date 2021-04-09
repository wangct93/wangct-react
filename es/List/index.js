import React from 'react';
import  {classNames, getProps, toPromise} from '@wangct/util';
import {toAry} from "@wangct/util/lib/arrayUtil";
import {toStr} from "@wangct/util/lib/stringUtil";
import Btn from "../Btn";
import DefineComponent from "../frame/components/DefineComponent";
import AsyncVisual from "../AsyncVisual";

/**
 * 列表加载项
 */
export default class List extends DefineComponent {

  state = {
    loading:false,
    autoLoad:true,
    firstLoaded:false,
    page_num:1,
    page_size:50,
    total:0,
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.checkProp(prevProps,'initSign',this.initState);
  }

  initState = () => {
    this.setState({
      page_num:1,
      total:0,
      options:[],
    },() => {
      this.loadData();
    });
  };

  loadData(){
    this.setState({
      loading:true,
    });
    toPromise(this.props.loadData,{
      page_num:this.state.page_num,
      page_size:this.state.page_size,
    }).finally(() => {
      this.setState({
        loading:false,
      });
    }).then((result) => {
      this.setOptions([...this.getOptions(),...toAry(result.list)]);
      this.setState({
        total:result.total,
      });
    });
  }

  loadMore = () => {
    this.setState({
      page_num:this.state.page_num + 1,
    },() => {
      this.loadData();
    });
  };

  hasMore(){
    const {total,page_num,page_size} = this.state;
    return total > page_num * page_size;
  }

  getLoadBtn(){
    const props = getProps(this);
    if(props.loading){
      return <div className="w-list-alert">正在加载中...</div>;
    }
    if(!this.hasMore()){
      return <div className="w-list-alert">我也是有底线的</div>;
    }

    return props.autoLoad
      ? <AsyncVisual onShow={this.loadMore} scrollElem={this.props.scrollElem} />
      : <Btn onClick={this.loadMore}>加载更多</Btn>;
  }

  getContent(){
    const {renderItem} = getProps(this);
    const options = this.getOptions();
    return this.getOptions().map((item,index) => {
      const content = renderItem ? renderItem(item,index,options) : toStr(item);
      return <React.Fragment key={index}>
        {content}
      </React.Fragment>;
    });
  }

  render() {
    const props = getProps(this);
    return <div className={classNames('w-list',props.className)} style={props.style}>
      {this.getContent()}
      {this.getLoadBtn()}
    </div>
  }
}

