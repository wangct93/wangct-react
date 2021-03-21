
import React from 'react';
import {toPromise, equal, getProps} from "@wangct/util";
import DefineComponent from "../DefineComponent";
import {toAry} from "@wangct/util/lib/arrayUtil";
import {toStr} from "@wangct/util/lib/stringUtil";
import {isUndef} from "@wangct/util/lib/typeUtil";
import {classNames} from "@wangct/util/lib/util";
import {getText, getValue} from "../utils/utils";
import {AntSelect,AntTreeSelect} from "../utils/baseCom";
import Icon from "../Icon";


/**
 * 下拉框
 */
export default class Select extends DefineComponent {
  state = {
    options: [],
    allowClear: true,
    placeholder:'请选择' + (this.props.title || ''),
  };

  componentDidMount() {
    this.initValue();
    this.loadOptions();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.checkParams(prevProps);
  }

  checkParams(prevProps) {
    if (!equal(this.getParams(), this.getParams(prevProps)) || this.props.loadData !== prevProps.loadData) {
      this.loadOptions();
    }
  }

  getParams(props = this.props) {
    return props.params;
  }

  loadOptions() {
    const params = this.getParams();
    toPromise(this.props.loadData,params).then((options) => {
      options = toAry(options).map((opt) => ({
        ...opt,
        value:toStr(opt.value),
      }));
      this.setState({
        options,
      });
      if(!this.getValue() && this.getProp('initValue') && options.length){
        const data = options[0];
        const key = data.value;
        if(this.isMultiple()){
          this.onChange([key],[data]);
        }else{
          this.onChange(key,data);
        }
      }
    });
  }

  getValue() {
    const value = this.getProp('value');
    if (isUndef(value)) {
      return undefined;
    }
    if (this.isMultiple()) {
      return toAry(value).map((item) => toStr(item));
    }
    return toStr(value);
  }

  isMultiple() {
    return this.props.mode === 'multiple';
  }

  filterOption(input, option) {
    return option.props.children.toLowerCase().includes(input.toLowerCase());
  }

  getFilterOption() {
    return this.props.showSearch ? this.filterOption : undefined;
  }

  getPlaceholder() {
    return this.props.disabled ? '' : this.getProp('placeholder');
  }

  render() {
    return <AntSelect
      filterOption={this.getFilterOption()}
      placeholder={this.getPlaceholder()}
      {...this.props}
      value={this.getValue()}
      onChange={this.onChange}
      className={classNames('w-select',this.props.className)}
      ref={this.setTarget}
    >
      {
        this.getOptions().map((item) => {
          const value = getValue(this,item);
          if(value == null){
            return null;
          }
          return <AntSelect.Option text={item.text} data={item} key={item.value}>{getText(this, item)}</AntSelect.Option>;
        })
      }
    </AntSelect>;
  }
}

/**
 * 下拉树选择
 */
export class TreeSelect extends DefineComponent {
  state = {
    childrenField: 'children',
    textField: 'text',
    valueField: 'value',
    showSearch:true,
    allowClear:true,
    suffixIcon:<Icon type="caret-down"/>,
    treeDefaultExpandAll:true,
    filterTreeNode,
    placeholder:'请选择上级菜单',
  };

  componentDidMount() {
    this.initOptions();
  }

  initOptions(){
    toPromise(this.props.loadData).then((options) => {
      this.setState({
        options:toAry(options),
      });
    });
  }

  getTreeNodes(list) {
    const textField = this.getProp('textField');
    const valueField = this.getProp('valueField');
    const childrenField = this.getProp('childrenField');
    const textFormatter = this.getProp('textFormatter');
    const valueFormatter = this.getProp('valueFormatter');
    return toAry(list).map((item) => {
      if(!item){
        return null;
      }
      const text = textFormatter ? textFormatter(item[textField],item) : item[textField];
      const value = valueFormatter ? valueFormatter(item[valueField],item) : item[valueField];
      return <AntTreeSelect.TreeNode title={text} key={value} value={value}>
        {this.getTreeNodes(item[childrenField])}
      </AntTreeSelect.TreeNode>;
    })
  }

  render() {
    return <AntdTreeSelect
      {...getProps(this)}
    >
      {
        this.getTreeNodes(this.getOptions())
      }
    </AntdTreeSelect>;
  }
}

/**
 * 过滤树节点
 */
function filterTreeNode(str,node){
  return node.props.title.indexOf(str) > -1;
}
