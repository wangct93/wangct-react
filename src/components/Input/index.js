
import React, {PureComponent} from 'react';
import { Input} from 'antd';

import {getProps,callFunc} from "wangct-util";



export default class QueryInput extends PureComponent {

  state = {
    placeholder: '请输入' + (this.props.title || ''),
  };

  onChange = (e) => {
    callFunc(this.props.onChange,this.formatValue(e.target.value));
  };

  formatValue(value){
    const {formatter} = this.props;
    return formatter ? formatter(value,this) : value;
  }

  getInputProps(){
    return getProps(this,['filterFields','format','title']);
  }

  render(){
    return <Input allowClear {...this.getInputProps()} onChange={this.onChange} />
  }
}
