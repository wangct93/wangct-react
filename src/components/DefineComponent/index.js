import {PureComponent} from "react";
import {getProps, toAry, toPromise, validateArray} from "wangct-util";

/**
 * 自定义组件
 */
export default class DefineComponent extends PureComponent {

  updateState(type,value){
    const {parentField,field} = type.split('.');
    this.setState({
      [parentField]:field ? {
        ...this.state[parentField],
        [field]:value,
      } : value,
    });
  }

  getOptions(){
    return toAry(getProps(this).options);
  }

  getValue(){
    return getProps(this).value;
  }

  loadOptions(){
    const {loadOptions} = getProps(this);
    if(!loadOptions){
      return;
    }
    toPromise(loadOptions).then(options => {
      this.setState({
        options
      });
    });
  }

  loadData(){
    const {loadData} = this.props;
    if(!loadData){
      return;
    }
    toPromise(loadData).then(data => {
      this.setState({
        data
      })
    })
  }

  getTextField(){
    return getProps(this).textField || 'text';
  }

  getValueField(){
    return getProps(this).valueField || 'value';
  }

  getItemValue(item){
    return item && item[this.getValueField()];
  }

  getItemText(item){
    return item && item[this.getTextField()];
  }

  setTarget = (target) => {
    this.refTarget = target;
  };

  getTarget(){
    return this.refTarget;
  }

  setSubTarget = (target) => {
    this.refSubTarget = target;
  };

  getSubTarget(){
    return this.refSubTarget;
  }

}
