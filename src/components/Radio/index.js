
import React from 'react';
import {toPromise, callFunc, equal, validateArray, getProps} from "@wangct/util";
import DefineComponent from "../DefineComponent";
import {getText, getValue} from "../utils/utils";
import {AntRadio} from '../utils/baseCom';


/**
 * 单选框
 */
export default class Radio extends DefineComponent {

  state = {
    value:this.props.defaultValue,
    loadEndDefaultSelected:true,
    textField:'text',
    valueField:'value'
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    this.checkParams(prevProps);
  }

  checkParams(prevProps){
    if(!equal(this.getParams(),this.getParams(prevProps)) || this.props.loadData !== prevProps.loadData){
      this.loadData();
    }
  }

  getParams(props = this.props){
    return props.params;
  }

  loadData(){
    const {loadData} = this.props;
    if(!loadData){
      return;
    }
    toPromise(loadData,this.getParams()).then((data) => {
      validateArray(data);
      this.setState({
        options:data
      });
      const props = getProps(this);
      if(props.loadEndDefaultSelected){
        this.onChange(getValue(this,data[0]));
      }
    })
  }

  onRadioChange = (e) => {
    const {value} = e.target;
    this.onChange(value);
  };

  render(){
    return <AntRadio.Group {...this.props} options={undefined} onChange={this.onRadioChange}>
      {
        this.getOptions().map(opt => {
          const value = getValue(this,opt);
          const text = getText(this,opt);
          return <AntRadio value={value} key={value}>{text}</AntRadio>
        })
      }
    </AntRadio.Group>
  }
}
