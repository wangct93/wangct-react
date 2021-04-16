import React, {PureComponent} from "react";
import {getProps, callFunc, classNames, aryToObject, objMap, objFilter} from "@wangct/util";
import DefineComponent from "../frame/components/DefineComponent";
import {toAry} from "@wangct/util/lib/arrayUtil";
import {toStr} from "@wangct/util/lib/stringUtil";
import {isStr} from "@wangct/util/lib/typeUtil";
import {getInputCom} from "../utils/utils";

/**
 * 表单
 */
export default class Form extends DefineComponent {
  state = {
    options:[],
    error:{},
    value:this.props.defaultValue,
    itemWidth:'100%',
    hasLabel:true,
    sep:'：',
  };

  getValue(){
    return this.getProp('value') || {};
  }

  onFieldChange = (opt,fieldValue) => {
    const oldValue = this.getValue();
    const {formatter,field} = opt;
    if(formatter){
      fieldValue = formatter(fieldValue,oldValue[field]);
    }
    const value = {
      ...oldValue,
      [field]:fieldValue,
    };
    this.validator(value);
    this.onChange(value);
  };

  validator(value){
    let options = this.getShowOptions();
    if(value){
      options = options.filter((opt) => opt.field in value);
    }else{
      value = this.getValue();
      value = aryToObject(options,(opt) => opt.field,(opt) => value[opt.field]);
    }
    const extError = validatorOptions(options,value);
    const error = objFilter({...this.state.error, ...extError,},value => !!value);
    this.setState({
      error,
    });
    return Object.keys(error).length ? Promise.reject(error) : Promise.resolve(value);
  }

  getShowOptions(){
    const value = this.getValue();
    return this.getShowOptions().filter((opt) => {
      const {show} = opt;
      return !show || show(value);
    })
  }

  render(){
    const value = this.getValue();
    const props = getProps(this);
    return <div className={classNames('w-form',props.className,!props.hasLabel && 'w-form-no-label')} style={props.style}>
      {
        this.getShowOptions().map(opt => {
          const {field,readOnly = props.readOnly,width = props.itemWidth,props:comProps = {},sep = props.sep} = opt;
          let {component:Com = 'div'} = opt;
          if(isStr(Com)){
            Com = getInputCom(Com) || 'div';
          }
          const disabled = comProps.disabled || opt.disabled || readOnly;
          const params = opt.parent ? aryToObject(toAry(opt.parent),(field) => field,(field) => value[field]) : null;
          const comParams = comProps.params ? {
            ...comProps.params,
            ...params,
          } : params;
          const {title} = opt;
          return <FormItem sep={sep} className={opt.className} style={{width}} required={opt.required} title={title} key={field} error={this.state.error[field]}>
            <Com readOnly={readOnly} disabled={disabled} title={title} value={value[field]} onChange={this.onFieldChange.bind(this,opt)} {...opt.props} params={comParams} />
          </FormItem>
        })
      }
    </div>;
  }
}

/**
 * 表单单项
 */
export class FormItem extends PureComponent{

  render(){
    const {props} = this;
    return <div style={props.style} className={classNames('w-form-line',props.className)}>
      <div className="w-form-label">
        {
          props.required && <span style={{color:'red'}}>*</span>
        }
        <span>{props.title}<span className="w-form-sep">{props.sep === false ? '' : props.sep || '：'}</span></span>
      </div>
      <div className="w-form-value">
        {props.children}
      </div>
    </div>
  }
}

/**
 * 校验配置项
 * @param options
 * @param data
 * @returns {*}
 */
export function validatorOptions(options,data){
  const validators = aryToObject(options,'field',(opt) => {
    const {required,needRequiredValidator = true,component} = opt;
    const validatorAry = [opt.validator];
    if(required && needRequiredValidator){
      validatorAry.unshift((v) => {
        if(v === '' || toAry(v).length === 0){
          return opt.title + '不能为空';
        }
      });
    }
    if(component && component.validator){
      validatorAry.push(component.validator);
    }
    return (...args) => {
      return aryFindResult(validatorAry,(validFunc) => validFunc && validFunc(...args));
    };
  });
  const optTemp = aryToObject(options,'field');
  return objMap(validators,(value,key) => {
    const msg = value && value(data[key],key,data);
    if(!msg){
      return;
    }
    const target = optTemp[key];
    const title = target && target.title;
    return target.errorSkipTitle || toStr(msg).startsWith(title) ? msg : title + msg;
  });
}

/**
 * 获取数组中结果为true的一项，并返回结果
 * @param ary
 * @param func
 */
export function aryFindResult(ary,func){
  let result = null;
  toAry(ary).find((item,index) => {
    result = callFunc(func,item,index,ary);
    return !!result;
  });
  return result;
}
