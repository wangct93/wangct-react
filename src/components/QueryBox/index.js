
import React, {PureComponent} from 'react';


import css from './index.less';
import {Checkbox,Form} from "antd";
import {aryToObject, callFunc, classNames, getProps, isFunc, objectUtil} from 'wangct-util';

const ErrorFormItem = Form.Item;

export default class FilterBox extends PureComponent {
  state = {
    value:{},
    error:{}
  }

  onChange = (key,value) => {
    const isMultiple = key === 'multiple';
    value = isMultiple ? value : {[key]:value};
    this.validator(value,null);
    value = this.formatValue(value);
    const formValue = {
      ...this.getValue(),
      ...value
    };
    this.setState({
      value:formValue
    });
    callFunc(this.props.onChange,formValue,key,value);

    const temp = aryToObject(this.getOptions(),'field');
    Object.keys(value).forEach(key => {
      const target = temp[key];
      if(target){
        callFunc(target.onChange,value[key],value,target);
      }
    })
  };

  formatValue(value){
    const options = this.getOptions();
    const values = this.getValue();
    return objectUtil.map(value,(value,key) => {
      const target = options.find(opt => opt.field === key);
      return target && target.formatter ? target.formatter(value,values[key]) : value;
    })
  }

  getValue(){
    return getProps(this).value || {}
  }

  getOptions(){
    return this.props.options || []
  }

  getCheckedField(item){
    return item.field + '_checked';
  }

  validator(value,cb){
    const {validable} = this.props;
    if(!validable){
      return;
    }

    let options = this.getOptions();
    if(isFunc(value)){
      cb = value;
      value = this.getValue();
    }else{
      const fields = Object.keys(value);

      options = options.filter((opt) => fields.includes(opt.field));
    }
    const extError = validatorOptions(options,value);
    const error = objectUtil.filter({
      ...this.state.error,
      ...extError,
    },value => !!value);
    this.setState({
      error
    });
    callFunc(cb,Object.keys(error).length ? error : null,value);
  }

  render(){
    const value = this.getValue();
    const {error} = this.state;
    return <div className={classNames(this.props.validable && 'wct-query-validate','wct-query-box','wct-form-box')}>
      {
        this.getOptions().map(item => {
          const {field,component:Com,width = '50%',hasCheck = true,parent} = item;
          let {props = {}} = item;
          const checkField = this.getCheckedField(item);
          const checked = hasCheck ? value[checkField] : true;
          if(parent){
            props = {
              ...props,
              params:{
                ...props.params,
                parent:value[parent]
              }
            }
          }
          return <FormItem error={error[field]} hasCheck={hasCheck} required={item.required} onChange={this.onChange.bind(this,checkField)} checked={checked} style={{width}} key={field} title={item.title}>
            {
              <Com title={item.title} disabled={!checked} value={value[field]} onChange={this.onChange.bind(this,field)} {...props} />
            }
          </FormItem>
        })
      }
      {
        this.props.btn
      }
    </div>
  }
}

class FormItem extends PureComponent {

  checkChange = (e) => {
    callFunc(this.props.onChange,e.target.checked);
  }

  getTitle(){
    const {required,title} = this.props;
    return <span>
      {title}
      {
        required ? <span style={{color:'red'}}>*</span> : ''
      }
    </span>
  }

  getValidateStatus(){
    return this.getHelp() ? 'error' : 'success';
  }

  getHelp(){
    const {props} = this;
    return !props.hasCheck || props.checked ? props.error : '';
  }

  render(){
    const {props} = this;
    return <div className="wct-form-item">
      <div className="wct-form-label">
        {
          props.hasCheck ? <Checkbox checked={props.checked} onChange={this.checkChange}>{this.getTitle()}</Checkbox> : this.getTitle()
        }
      </div>
      <div className="wct-form-value">
        <ErrorFormItem validateStatus={this.getValidateStatus()} help={this.getHelp()}>{props.children}</ErrorFormItem>
      </div>
    </div>
  }
}



export function formValidator(validator,data){
  return objectUtil.map(validator,(value,key) => {
    return value && value(data[key],key,data)
  });
}

export function validatorOptions(options,data){
  const validators = {};
  options.forEach((opt) => {
    const {required} = opt;
    let {validator} = opt;
    if(required && !validator){
      validator = (v) => v || v === 0 ? '' : `${opt.label}不能为空`;
    }
    validators[opt.field] = validator;
  });
  return formValidator(validators,data);
}
