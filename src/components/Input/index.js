import React from 'react';
import {toStr} from "@wangct/util/lib/stringUtil";
import DefineComponent from "../frame/components/DefineComponent";
import {callFunc} from "@wangct/util/lib/util";
import {AntInput} from "../utils/baseCom";

/**
 * 输入框
 */
export default class Input extends DefineComponent {

  state = {
    placeholder: '请输入' + toStr(this.props.title),
    allowClear:true,
  };

  inputChange = (e) => {
    this.onChange(e.target.value || undefined);
  };

  keydown = (e) => {
    if(e.keyCode === 13){
      callFunc(this.props.onSearch,this.getValue());
    }
  };

  render(){
    return <AntInput ref={this.setElem} {...this.getProps()} onKeyDown={this.keydown} onChange={this.inputChange} />
  }
}
