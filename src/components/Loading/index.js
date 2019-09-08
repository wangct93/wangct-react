import React, {PureComponent} from 'react';
import {Spin} from 'antd';

import './index.less';

export default class WctLoading extends PureComponent {

  render() {
    const {loading,title} = this.props;
    return loading ? <div className="wct-loading-wrap">
      <div className="wct-loading-content">
        <Spin size="large" spinning tip={title} />
      </div>
    </div> : null
  }
}
