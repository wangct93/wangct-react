import React from 'react';
import {aryRemove, callFunc, getProps, Queue} from '@wangct/util';
import DefineComponent from "../DefineComponent";

const {addToQueue,removeToQueue} = getImgQueueObj();

/**
 * 图片组件
 */
export default class Img extends DefineComponent {
  state = {
    alt:'图片加载失败',
    status:'wait',
    src:this.props.normalSrc,
  };

  componentDidMount() {
    this.addQueue();
  }

  componentWillUnmount() {
    this.removeQueue();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.checkProp(prevProps,'src',this.addQueue);
  }

  loadImg(){
    return new Promise((cb) => {
      if(!this.props.src){
        cb();
        return;
      }
      this.setState({
        src:this.props.src,
      });
      this.loadEnd = cb;
    });
  }

  addQueue(){
    addToQueue(this);
  }

  removeQueue(){
    callFunc(this.loadEnd);
    removeToQueue(this);
  }

  onLoad = () => {
    callFunc(this.loadEnd);
  };

  onError = () => {
    callFunc(this.loadEnd);
  };

  render() {
    // return <img {...this.props} alt="2" />;
    return <img
      {...getProps(this,['normalSrc','errorSrc'])}
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
