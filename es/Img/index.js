import React from 'react';
import {aryRemove, callFunc, Queue} from '@wangct/util';
import DefineComponent from "../frame/components/DefineComponent";
import BlankImg from '../assets/images/img_blank.jpg';

const {addToQueue,removeToQueue} = getImgQueueObj();

/**
 * 图片组件
 */
export default class Img extends DefineComponent {
  state = {
    alt:'图片加载失败',
    status:'wait',
    src:this.props.normalSrc || BlankImg,
  };

  componentDidMount() {
    addToQueue(this);
  }

  componentWillUnmount() {
    callFunc(this.loadEnd);
    removeToQueue(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.checkProp(prevProps,'src',() => {
      addToQueue(this);
    });
  }

  loadImg(){
    return new Promise((cb) => {
      if(!this.props.src){
        cb();
        return;
      }
      this.setState({
        src:this.props.src,
        status:'loading',
      });
      this.loadEnd = cb;
    });
  }

  onLoad = () => {
    if(this.state.status === 'loading'){
      this.setState({
        status:'finish',
      });
      callFunc(this.loadEnd);
    }
  };

  onError = () => {
    this.onLoad();
  };

  render() {
    return <img
      {...this.getProps(['normalSrc'])}
      src={this.state.src}
      onLoad={this.onLoad}
      onError={this.onError}
    />
  }
}

/**
 * 获取图片队列
 * @returns {Promise<any>|{addToQueue: addToQueue, removeToQueue: removeToQueue}}
 */
function getImgQueueObj(){
  const list = [];
  const map = new Map();
  const queue = new Queue({
    data:list,
    func(item){
      return item.loadImg();
    },
    limit:5,
  });

  /**
   * 添加对象到队列
   * @param item
   */
  function addToQueue(item){
    removeToQueue(item);
    list.push(item);
    queue.start();
  }

  /**
   * 从队列删除对象
   * @param item
   */
  function removeToQueue(item){
    aryRemove(list,item);
    map.delete(item);
  }

  return {
    addToQueue,
    removeToQueue,
  };
}
