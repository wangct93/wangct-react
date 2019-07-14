/**
 * Created by wangct on 2019/1/19.
 */
import React, {PureComponent} from 'react';

import Icon from '../Icon';

import './index.less';
import {classNames, getProps, isDef, isString, toPromise, validateArray} from "wangct-util";
import {getItemText, getItemValue} from "../common/util";

export default class Text extends PureComponent {

  state = {
    options:[]
  };

  componentDidMount() {
    this.loadData();
  }

  loadData(){
    const {loadData} = this.props;
    if(!loadData){
      return;
    }
    toPromise(loadData).then(options => {
      validateArray(options);
      this.setState({
        options
      })
    })
  }

  getIconProps(){
    const {icon} = getProps(this);
    return icon && (isString(icon) ? {type:icon} : icon);
  }

  getIcon(){
    const iconProps = this.getIconProps();
    return iconProps && <Icon {...iconProps} />
  }

  getText(){
    const {children,options = [],limit} = getProps(this);
    const target = options.find(item => getItemValue(this,item) === children);
    const viewText = target ? getItemText(this,item) : children;
    return <span>
      {
        isDef(limit) ? substrText(viewText,limit) : viewText
      }
    </span>;
  }

  render() {
    const {props} = this;
    return <span {...props} className={classNames('wct-text',props.className)}>
      {this.getIcon()}
      {this.getText()}
    </span>
  }
}


function substrText(str = '',limit = 100){
  return limit >= str.length ? str : str.substr(0,limit) + '...'
}
