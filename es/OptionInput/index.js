import React from "react";
import {Divider, Icon} from "antd";
import css from './index.less';
import DefineComponent from "../frame/components/DefineComponent";
import Input from "../Input";
import {toAry} from '@wangct/util';

/**
 * 字典选项配置输入组件
 * @author wangchuitong
 */
export default class OptionInput extends DefineComponent {
  state = {
    title:'选项',
  };

  getValue(){
    return toAry(this.getProp('value'));
  }

  valueChange = (index,field,fieldValue) => {
    const value = this.getValue().slice(0);
    value[index] = {
      ...value[index],
      [field]:fieldValue,
    };
    this.onChange(value);
  };

  doAdd = () => {
    this.onChange([...this.getValue(),{}]);
  };

  doRemove = (index) => {
    const value = this.getValue().slice(0);
    value.splice(index,1);
    this.onChange([...value]);
  };

  textChange = (index,fieldValue) => {
    const value = this.getValue().slice(0);
    value[index] = {
      ...value[index],
      text:fieldValue,
    };
    this.onChange(value);
  };

  render() {
    const {props} = this;
    const {textInput:TextInput = Input,valueInput:ValueInput = Input} = props;
    return <div className="w-option-input">
      <Divider>{this.getProp('title')}</Divider>
      <div className="w-option-input-list">
        {
          this.getValue().map((item,index) => {
            return <div key={index} className="w-option-input-item">
              <div className="w-option-input-target">
                <TextInput title="键" value={item.text} onChange={this.textChange.bind(this,index)} />
              </div>
              <div className="w-option-input-target">
                <ValueInput title="值" parent={item.text} value={item.value} onChange={this.valueChange.bind(this,index,'value')} />
              </div>
              <Icon onClick={this.doRemove.bind(this,index)} type="minus-circle" />
            </div>;
          })
        }
      </div>
      <div className="w-option-input-btn-box">
        <a onClick={this.doAdd} className="w-option-input-btn">
          <Icon type="plus-circle" />
          <span>添加选项</span>
        </a>
      </div>
    </div>;
  }
}
