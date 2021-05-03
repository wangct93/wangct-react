import * as React from "react";
import {callFunc, classNames} from "@wangct/util/lib/util";
import {toAry} from '@wangct/util';
import {toNum} from "@wangct/util/lib/numberUtil";
import DefineComponent from "../frame/components/DefineComponent";
import {getNodeOption} from "./options";

/**
 * SVG编辑器
 */
export default class SvgEditor extends DefineComponent {
  state = {
    drawMode:null,
    value:[],
  };

  updateNode = (node) => {
    const value = this.getValue();
    const index = value.findIndex((item) => item.id === node.id);
    if(index !== -1){
      value[index] = node;
      this.onChange([...value]);
    }
  };

  getSvgInnerStyle() {
    return ' .svg-disabled .svg-line-point{\n' +
      '    display: none;\n' +
      '  }' +
      '.svg-line-point{\n' +
      '    fill:transparent;\n' +
      '  }\n' +
      '\n' +
      '  .svg-line:hover .svg-line-point{\n' +
      '    fill: #1890ff;\n' +
      '    cursor: pointer;\n' +
      '  }';
  }

  getValue() {
    return toAry(super.getValue());
  }

  onSelect = (node,e) => {
    e.stopPropagation();
    this.setSelectedKey(node.id);
    callFunc(this.props.onSelect,node);
  };

  svgClick = () => {
    this.setSelectedKey(null);
  };

  getSortNodeList(){
    return this.getValue().sort((a,b) => toNum(a.zIndex) - toNum(b.zIndex));
  }

  getStyle(){
    const {width,height,style = {}} = this.props;
    const extStyle = {};
    if(width){
      extStyle.width = width;
    }
    if(height){
      extStyle.height = height;
    }
    return {
      ...style,
      ...extStyle,
    };
  }

  render() {
    return <svg style={this.getStyle()} onClick={this.svgClick} ref={this.setElem} className={classNames("w-svg",this.isDisabled() && 'w-svg-disabled',this.props.className)}>
      <style>{this.getSvgInnerStyle()}</style>
      {
        this.getSortNodeList().map((item) => {
          let {component:Com} = item;
          if(!Com){
            const nodeOpt = getNodeOption(item.value);
            if(nodeOpt){
              Com = nodeOpt.component;
            }else{
              return null;
            }
          }
          return <g onClick={this.onSelect.bind(this,item)} key={item.id} className="svg-node-g">
            <Com
              {...item}
              selected={item.id === this.getSelectedKey()}
              onChange={this.updateNode}
              disabled={this.isDisabled()}
            />
          </g>;
        })
      }
    </svg>;
  }
}
