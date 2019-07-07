import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Button,Icon} from 'antd';
import util, {arrayUtil} from 'wangct-util';
import $ from 'wangct-dom';
import './index.less';


const interval = 300;

export default class Swiper extends PureComponent {
  state = {
    current:1,
    animate:true
  };

  componentDidMount() {
    this.move(1,true);
  }

  toLeft = () => {
    this.move(this.state.current - 1);
  };

  toRight = () => {
    this.move(this.state.current + 1);
  };

  move(current,isCheck){
    const len = this.getContent().length;
    current = (current + len) % len;
    this.setState({
      current,
      animate:!isCheck
    },() => {
      if(!isCheck){
        setTimeout(() => {
          this.check();
        },interval);
      }
    })
  }

  check(){
    const {current} = this.state;
    const len = this.getContent().length;
    if(current === 0){
      this.move(len - 2,true);
    }else if(current === len - 1){
      this.move(1,true);
    }
  }

  getLeft(){
    const {current} = this.state;
    const box = this.contentElem || {};
    return -current * (box.offsetWidth || 0)
  }

  getContent(){
    const children = arrayUtil.toArray(this.props.children);
    return [children[children.length - 1],...children,children[0]]
  }

  render() {
    const {state,props} = this;
    console.log(props.children);
    return <div className={util.classNames('wct-swiper',props.className)} style={props.style}>
      <Icon type="left" onClick={this.toLeft} />
      <div className="wct-swiper-content" ref={t => this.contentElem = t}>
        <div className={util.classNames('wct-swiper-view',state.animate && 'wct-swiper-view-transition')} style={{left:this.getLeft() + 'px'}}>
          {this.getContent()}
        </div>
      </div>
      <Icon type="right" onClick={this.toRight} />
    </div>
  }
}
