import React,{PureComponent} from 'react';

export default class AsyncVisual extends PureComponent {
  state = {};

  componentDidMount(){
    this.addScrollEvent();
    this.scrollEvent();
  }

  componentWillUnmount() {
    this.removeScrollEvent();
  }

  componentDidUpdate(prevProps){
    this.updateScrollElem(prevProps);
  }

  updateScrollElem(prevProps){
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
    if(elem && elem.addEventListener){
      elem.addEventListener('scroll',this.scrollEvent)
    }
  }

  removeScrollEvent(elem = this.getScrollElem()){
    if(elem && elem.removeEventListener){
      elem.removeEventListener('scroll',this.scrollEvent)
    }
  }

  scrollEvent = () => {
    const {top,left,right,bottom} = this.container.getBoundingClientRect();
    if(!(right < 0 || bottom < 0 || left > window.innerWidth || top > window.innerHeight)){
      this.loadComponent();
    }
  };

  loadComponent(){
    this.removeScrollEvent();
    Promise.resolve(this.props.content).then(content => {
      this.setState({
        content,
        loaded:true
      });
    })
  }

  setElem = (ref) => {
    this.container = ref;
  };

  render() {
    const {props,state} = this;
    return <React.Fragment>
      {
        state.loaded ? state.content : <div className={props.className} style={props.style} ref={this.setElem} />
      }
    </React.Fragment>
  }
}
