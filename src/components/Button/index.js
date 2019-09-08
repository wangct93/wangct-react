import React, {PureComponent} from 'react';
import {Button} from 'antd';
import {getProps, toPromise} from "wangct-util";

export default class WctButton extends PureComponent{

  state = {
    loading:false
  };

  onClick = (e) => {
    this.setState({
      loading:true
    });
    toPromise(this.props.onClick,e).finally(() => {
      this.setState({
        loading:false
      });
    });
  };

  render() {
    return <Button {...getProps(this)} onClick={this.onClick} />
  }
}
