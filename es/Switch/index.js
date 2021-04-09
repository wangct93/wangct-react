import React from 'react';
import DefineComponent from "../frame/components/DefineComponent";
import {AntSwitch} from "../utils/baseCom";

/**
 * 开关
 */
export default class Switch extends DefineComponent {

  state = {
  };

  render(){
    return <AntSwitch {...this.getProps()} />;
  }
}
