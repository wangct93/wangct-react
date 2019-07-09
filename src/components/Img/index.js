import React, {PureComponent} from 'react';
import util, {reactUtil} from 'wangct-util';

const {getProps} = reactUtil;



const addToQueue = (function addToQueue(){
  const list = [];
  const queue = util.queue({
    list,
    func(item,cb){
      item.start(cb);
    },
    limit:5,
  });
  return function(item){
    if(!list.includes(item)){
      list.push(item);
      queue.start();
    }
  }
})();



export default class Img extends PureComponent {
  state = {
    alt:'图片加载失败',
    status:'wait'
  };

  componentDidMount() {
    addToQueue(this);
  }

  componentWillUnmount() {
    this.isUnmount = true;
    this.next();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.checkSrc(prevProps);
  }

  checkSrc(prevProps){
    if(prevProps.src !== this.props.src){
      addToQueue(this);
    }
  }

  next(){
    util.callFunc(this.nextFunc);
    this.nextFunc = null;
  }

  onLoad = () => {
    this.next();
  };

  onError = (e) => {
    this.next();
    this.setState({
      status:'error'
    });
  };

  start(cb){
    if(this.isUnmount){
      return cb();
    }
    this.nextFunc = cb;
    const props = getProps(this);
    if(props.src === props.normalSrc){
      this.next();
    }else{
      this.setState({
        status:'loading'
      });
    }
  }

  getSrc(){
    const {status} = this.state;
    const props = getProps(this);
    if(status === 'wait'){
      return props.normalSrc;
    }else if(status === 'error'){
      return props.errorSrc;
    }else{
      return props.src;
    }
  }

  render() {
    return <img {...getProps(this,['normalSrc','errorSrc','status'])} src={this.getSrc()} onLoad={this.onLoad} onError={this.onError} />
  }
}
