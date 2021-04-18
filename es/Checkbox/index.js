import React from 'react';
import {toStr} from "@wangct/util/lib/stringUtil";
import DefineComponent from "../frame/components/DefineComponent";
import {callFunc} from "@wangct/util/lib/util";
import {AntCheckbox, AntInput} from "../utils/baseCom";

/**
 * 复选框
 */
export default class Checkbox extends DefineComponent {

  state = {
  };

  checkChange = (e) => {
    this.onChange(e.target.checked);
  };

  getValue() {
    return !!super.getValue();
  }

  render(){
    return <AntCheckbox ref={this.setElem} {...this.getProps()} value={null} checked={this.getValue()} onChange={this.checkChange} />
  }
}
