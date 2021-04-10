
import React, {PureComponent} from 'react';

import './index.less';
import {Portal} from '@lib';
import DefineComponent from "../../frame/components/DefineComponent";


export default class Test extends DefineComponent{

  state = {
  };

  render(){
    return <Portal >
      <div>123</div>
    </Portal>;
  }
}
