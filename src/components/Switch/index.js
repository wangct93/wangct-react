import React from 'react';
import DefineComponent from "../DefineComponent";
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
