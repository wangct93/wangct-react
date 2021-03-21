import React from 'react';
import { getProps} from "@wangct/util";
import DefineComponent from "../DefineComponent";
import {toAry} from "@wangct/util/lib/arrayUtil";
import {toPromise} from "@wangct/util/lib/promiseUtil";
import {toStr} from "@wangct/util/lib/stringUtil";
import {AntTree} from "../utils/baseCom";


/**
 * 树
 */
export default class Tree extends DefineComponent {

  state = {
    options:[],
    textField:'text',
    valueField:'value',
    childrenField:'children'
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


  getTreeNodes(list,parent = null){
    return toAry(list).map((item) => {
      if (!item) {
        return null;
      }
      const textFormatter = this.getProp('textFormatter');
      const valueFormatter = this.getProp('valueFormatter');
      const textField = this.getProp('textField');
      const valueField = this.getProp('valueField');
      const childrenField = this.getProp('childrenField');
      const title = textFormatter ? textFormatter(item[textField],item,parent) : item[textField];
      const value = valueFormatter ? valueFormatter(item[valueField],item,parent) : item[valueField];
      if(!item[childrenField]){
        return <AntTree.TreeNode data={item} title={title} key={value} />;
      }
      const childNodes = this.getTreeNodes(item[childrenField],item);
      return <AntTree.TreeNode data={item} title={title} key={value}>{childNodes}</AntTree.TreeNode>;
    });
  }

  getSelectedKeys(){
    return toAry(this.getProp('selectedKeys')).map((item) => toStr(item));
  }

  render() {
    const options = this.getOptions();
    return <AntTree
      {...getProps(this)}
      selectedKeys={this.getSelectedKeys()}
    >
      {this.getTreeNodes(options)}
    </AntTree>;
  }
}
