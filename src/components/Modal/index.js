import React from 'react';
import {getProps, classNames} from "@wangct/util";
import './index.less';
import DefineComponent from "../frame/components/DefineComponent";
import {toPromise} from "@wangct/util/lib/promiseUtil";
import {AntModal} from "../utils/baseCom";

/**
 * 弹窗
 */
export default class Modal extends DefineComponent {

  state = {
    maskClosable:true,
  };

  onOk = (...args) => {
    this.setState({
      confirmLoading:true
    });
    return toPromise(this.props.onOk,...args).finally(() => {
      this.setState({
        confirmLoading:false
      });
    });
  };

  render() {
    const props = getProps(this);
    return <AntModal
      {...props}
      wrapClassName={classNames('w-modal',this.props.wrapClassName)}
      onOk={props.onOk && this.onOk}
    >
      this.props.children
    </AntModal>
  }
}
