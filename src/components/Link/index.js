/**
 * Created by wangct on 2019/1/19.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PathToRegExp from 'path-to-regexp';
import util,{reactUtil} from 'wangct-util';

const {getProps} = reactUtil;


export default @connect(({global}) => ({
  pathname:global.pathname,
  history:global.history
}))
class Link extends PureComponent {

  onClick = () => {
    const {props} = this;
    props.history.push(props.to)
  };

  isActive(){
    const {to,pathname} = this.props;
    return PathToRegExp(to).test(pathname);
  }

  render() {
    const {props} = this;
    const {activeName = 'active'} = props;
    return <a className={util.classNames(props.className,this.isActive() && activeName)} onClick={this.onClick}>{props.children}</a>
  }
}
