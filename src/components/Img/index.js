import React, {PureComponent} from 'react';
import util, {reactUtil} from 'wangct-util';
import NormalSrc from '../assets/blank_img.png';

const {getProps} = reactUtil;



const addToQueue = (function addToQueue(){
  const list = [];
  const queue = util.queue({
    list,
    func(item,cb){
      item.load(cb);
    },
    limit:5
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
    viewSrc:NormalSrc
  };

  componentDidMount() {
    addToQueue(this);
  }

  componentWillUnmount() {
    this.isUnmount = true;
    this.next();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.src !== this.props.src){
      addToQueue(this);
    }
  }

  getProps(){
    return getProps(this)
  }

  load(cb){
    if(this.isUnmount){
      cb();
    }else{
      this.loadFunc = cb;
      const {src} = this.props;
      const {viewSrc} = this.state;

      if(src === viewSrc){
        this.next();
      }else{
        this.setState({
          viewSrc:src
        })
      }
    }
  }

  next(){
    util.callFunc(this.loadFunc);
    this.loadFunc = null;
  }

  onLoad = () => {
    this.next();
  };

  onError = (e) => {
    this.setState({
      viewSrc:NormalSrc
    });
  };

  render() {
    const props = getProps(this);
    return <img {...props} src={props.viewSrc} onLoad={this.onLoad} onError={this.onError} />
  }
}
