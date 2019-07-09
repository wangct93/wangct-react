import React,{PureComponent} from 'react';
import util from 'wangct-util';

export default class VisualAsync extends PureComponent {
  state = {};

  componentDidMount(){
    this.addScrollEvent();
    this.scrollEvent();
  }

  componentWillUnmount() {
    this.removeScrollEvent();
  }

  componentDidUpdate(prevProps){
    this.checkScrollElem(prevProps);
  }

  checkScrollElem(prevProps){
    const oldElem = this.getScrollElem(prevProps);
    const elem = this.getScrollElem();
    if(oldElem !== elem){
      this.removeScrollEvent(oldElem);
      this.addScrollEvent();
    }
  }

  getScrollElem(props = this.props){
    return props.scrollElem || window;
  }

  addScrollEvent(elem = this.getScrollElem()){
    elem.addEventListener('scroll',this.scrollEvent)
  }

  removeScrollEvent(elem = this.getScrollElem()){
    elem.removeEventListener('scroll',this.scrollEvent)
  }

  scrollEvent = (e) => {
    const {top,left,right,bottom} = this.elem.getBoundingClientRect();
    if(!(right < 0 || bottom < 0 || left > window.innerWidth || top > window.innerHeight)){
      this.onView(e);
    }
  };

  onView(e){
    this.removeScrollEvent();
    util.callFunc(this.props.onView,e);
  }

  setElem = (ref) => {
    this.elem = ref;
  };

  render() {
    const {props} = this;
    return <div className={props.className} style={props.style} ref={this.setElem} />
  }
}
