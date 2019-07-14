import React, {PureComponent} from 'react';
import {Button} from 'antd';
import { toPromise} from "wangct-util";

export default class WctButton extends PureComponent{

  state = {
    loading:false
  };

  onClick = (e) => {
    this.setState({
      loading:true
    });
    const hideLoading = () => {
      this.setState({
        loading:false
      });
    };
    toPromise(this.props.onClick,e).then(hideLoading).catch(hideLoading);
  };



  render() {
    const {props} = this;
    return <Button loading={this.state.loading} {...props} onClick={this.onClick} />
  }
}
