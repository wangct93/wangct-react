import DefineComponent from "../DefineComponent";
import React from "react";
import moment from 'moment';
import {toAry} from "@wangct/util/lib/arrayUtil";
import {isAry} from "@wangct/util/lib/typeUtil";
import {toStr} from "@wangct/util/lib/stringUtil";
import {AntDatePicker} from "../utils/baseCom";

/**
 * 日期选择框（字符串）
 */
export default class DatePicker extends DefineComponent {

  state = {
    dateFormat:'YYYY-MM-DD',
    timeFormat:'HH:mm:ss',
  };

  componentDidMount() {
    this.initValue();
  }

  getFormat(){
    const {showTime} = this.props;
    const dateFormat = this.getProp('dateFormat');
    const timeFormat = this.getProp('timeFormat');
    return showTime ? dateFormat + ' ' + timeFormat : dateFormat;
  }

  getValue(){
    const value = this.getProp('value');
    if(!value){
      return null;
    }
    return moment(value);
  }

  dateChange = (mom) => {
    const value = mom && mom.format(this.getFormat());
    this.onChange(value);
  };

  render(){
    return <AntDatePicker {...this.props} value={this.getValue()} onChange={this.dateChange} />;
  }
}

/**
 * 日期范围选择框（字符串）
 */
export class DateStringRangePicker extends DefineComponent {

  state = {
  };

  componentDidMount() {
    super.componentDidMount();
    this.initValue();
  }

  getValue(){
    return toAry(this.getProp('value')).map((item) => {
      return item ? moment(item) : null;
    });
  }

  dateChange = (momentDate,dateStringList) => {
    this.onChange(dateStringList);
  };

  getPlaceholder(){
    const {placeholder,title} = this.props;
    if(isAry(placeholder)){
      return placeholder || [];
    }
    if(title){
      let suffix = '日期';
      const requiredStr = '（必填）';
      const extStr = toStr(placeholder).endsWith(requiredStr) ? requiredStr : '';
      const mainTitle = title.replace(/(日期|时间|日)$/,(match) => {
        if(match){
          suffix = match;
        }
        return '';
      });
      return [mainTitle + '开始' + suffix + extStr,mainTitle + '结束' + suffix + extStr];
    }
    return [];
  }

  render(){
    return <DatePicker.RangePicker {...this.props} value={this.getValue()} onChange={this.dateChange} placeholder={this.getPlaceholder()} />;
  }
}

DateStringPicker.Range = DateStringRangePicker;
