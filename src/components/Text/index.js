/**
 * Created by wangct on 2019/1/19.
 */
import React, {PureComponent} from 'react';
import util,{reactUtil} from 'wangct-util';

import Icon from '../Icon';

import './index.less';

const {getProps} = reactUtil;

export default class Text extends PureComponent {

  getIconProps(){
    const {icon} = getProps(this);
    return icon && (util.isString(icon) ? {type:icon} : icon);
  }

  getIcon(){
    const {icon} = this.props;
    return icon ? util.isString(icon) ? <Icon type={icon} /> : <Icon {...icon} /> : ''
  }

  getText(){
    const {children,limit} = this.props;
    return util.isDef(limit) ? substrText(children,limit) : children;
  }

  render() {
    const {props} = this;
    return <span {...props} className={util.classNames('wct-text',props.className)}>
      {this.getIcon()}
      {this.getText()}
    </span>
  }
}


function substrText(str = '',limit = 100){
  return limit >= str.length ? str : str.substr(0,limit) + '...'
}
