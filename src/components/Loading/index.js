import React from 'react';

import './index.less';
import DefineComponent from "../DefineComponent";
import {classNames, getProps} from "@wangct/util";
import {AntSpin} from "../utils/baseCom";

/**
 * 加载中组件
 */
export default class Loading extends DefineComponent {

  state = {
    global:true,
  };

  isGlobal(){
    return this.getProp('global');
  }

  render() {
    const {props} = this;
    return props.loading ? <div className={classNames('wct-loading',this.isGlobal() && 'wct-loading-global')}>
      <div className="wct-loading-content">
        <AntSpin size="large" spinning tip={props.title} />
      </div>
    </div> : null
  }
}
