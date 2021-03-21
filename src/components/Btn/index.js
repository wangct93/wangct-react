import React from 'react';
import {getProps, toPromise} from "@wangct/util";
import DefineComponent from "../DefineComponent";
import Auth from "../Auth";
import {isObj, isStr} from "@wangct/util/lib/typeUtil";
import {AntButton} from "../utils/baseCom";

/**
 * 按钮
 */
export default class Btn extends DefineComponent{

  state = {
    loading:false,
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

  getAuth(){
    const auth = this.getProp('auth');
    if(isStr(auth)){
      return {
        and:auth,
      };
    }
    if(isObj(auth)){
      return auth;
    }
    return {};
  }

  render() {
    return <Auth {...this.getAuth()}>
      <AntButton {...getProps(this)} auth={null} onClick={this.onClick} />
    </Auth>;
  }
}
