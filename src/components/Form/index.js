import React, {PureComponent} from "react";
import {Form} from 'antd';
import WctText from '../Text';
import './index.less';
import {objectUtil, getProps, callFunc, classNames, aryToObject} from "wangct-util";

const ErrorFormItem = Form.Item;

export default class WctForm extends PureComponent {
  state = {
    options:[],
    error:{},
    value:this.props.defaultValue
  };

  getOptions(){
    return getProps(this).options || []
  }

  getValue(){
    return getProps(this).value || {}
  }

  clear(){
    this.setState({
      value:{},
      error:{}
    })
  }

  onChange(value,...args){
    this.setState({
      value
    });
    callFunc(this.props.onChange,value,...args);
  }

  onFieldChange = (field,value,...args) => {
    const extValue = field === 'multiple' ? value : {[field]:value};
    const oldValue = this.getValue();
    const formatValue = this.formatValue(extValue,oldValue);
    const formValue = {
      ...oldValue,
      ...formatValue
    };
    this.validator(extValue);

    const target = this.getOptions().find(opt => opt.field === field);
    if(target){
      callFunc(target.onChange,value,...args);
    }
    this.onChange(formValue,field,value,...args);
  };

  formatValue(value,oldValue){
    const options = this.getOptions();
    const temp = aryToObject(options,'field',item => item);
    return objectUtil.map(value,(value,key) => {
      const target = temp[key];
      return target && target.formatter ? target.formatter(value,oldValue[key]) : value;
    })
  }

  validator(value){
    let options = this.getOptions();
    if(value){
      const fields = Object.keys(value);

      options = options.filter((opt) => fields.includes(opt.field));
    }else{
      value = this.getValue();
    }
    const extError = validatorOptions(options,value);
    const error = objectUtil.filter({
      ...this.state.error,
      ...extError,
    },value => !!value);
    this.setState({
      error
    });
    return Object.keys(error).length ? Promise.reject(error) : Promise.resolve(value);
  }

  render(){
    const value = this.getValue();
    const props = getProps(this);
    return <div className={classNames('wct-form-box',props.className)} style={props.style}>
      {
        this.getOptions().map(opt => {
          const {field,readonly = props.readonly} = opt;
          const {title} = opt;
          const Com = readonly ? Text : opt.component;
          return <FormItem required={opt.required} title={title} key={field} error={this.state.error[field]}>
            <Com title={title} value={value[field]} onChange={this.onFieldChange.bind(this,field)} {...opt.props} />
          </FormItem>
        })
      }
    </div>
  }
}

class Text extends PureComponent {
  render() {
    const {props} = this;
    return <WctText {...props}>{props.value}</WctText>
  }
}



export class FormItem extends PureComponent{

  getValidateStatus(){
    return this.props.error ? 'error' : 'success';
  }

  render(){
    const {props} = this;
    return <div className="wct-form-line">
      <div className="wct-form-label">
        {
          props.required && <span style={{color:'red'}}>*</span>
        }
        <span>{props.title}{props.sep === false ? '' : props.sep || '：'}</span>
      </div>
      <div className="wct-form-value">
        <ErrorFormItem validateStatus={this.getValidateStatus()} help={props.error}>{props.children}</ErrorFormItem>
      </div>
    </div>
  }
}


export function formValidator(validators,data){
  return objectUtil.map(validators,(value,key) => {
    return value && value(data[key],key,data)
  });
}

export function validatorOptions(options,data){
  const validators = getValidators(options);
  return formValidator(validators,data);
}

function getValidators(options = []){
  return aryToObject(options,'field',(opt) => {
    const {required} = opt;
    let {validator} = opt;
    if(required && !validator){
      validator = (v) => v || v === 0 ? '' : `${opt.title}不能为空`;
    }
    return validator;
  })
}
