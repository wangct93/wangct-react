import React from 'react';
import {classNames} from "@wangct/util/lib/util";
import DefineComponent from "../DefineComponent";
import {getDivProps} from "../utils/utils";

/**
 * 布局元素
 * @author wangchuitong
 */
export default class Flex extends DefineComponent {

  state = {

  };

  render() {
    const {props} = this;
    return <div {...getDivProps(props)} className={classNames('w-flex',props.className,props.column && 'w-flex-column',props.verticalCenter && 'w-flex-vertical-center',props.center && 'w-flex-center',props.wrap && 'w-flex-wrap')}>{props.children}</div>;
  }
}

/**
 * 自适应元素
 * @author wangchuitong
 */
export class FlexItem extends DefineComponent {
  state = {};

  render() {
    const {props} = this;
    return <div {...getDivProps(props)} className={classNames('w-flex-item',props.className)}>{props.children}</div>;
  }
}

Flex.Item = FlexItem;
