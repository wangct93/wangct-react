
import React from 'react';
import css from './index.less';
import Flex, {FlexItem} from "../Flex";
import Link from "../Link";
import DefineComponent from "../frame/components/DefineComponent";
import {getPathname, pathJoin, pathMatch, pathTo, reduxConnect} from "../frame";
import menus from "./menus";
import ComViewContent from "./View";

@reduxConnect(() => ({
  pathname:getPathname(),
}))
export default class ComView extends DefineComponent{

  state = {
    options:menus.map((menu) => ({
      ...menu,
      path:pathJoin(this.props.match && this.props.match.path,menu.path),
    })),
  };

  componentDidMount() {
    super.componentDidMount();
    this.initUrl();
  }

  initUrl(){
    const target = this.getTarget();
    if(!target){
      pathTo(this.getOptions()[0].path);
    }
  }

  getTarget(){
    const options = this.getOptions();
    return options.find((item) => pathMatch(item.path,this.props.pathname));
  }

  render(){
    const target = this.getTarget();
    if(!target){
      return null;
    }
    return <Flex className="w-com-view">
      <Left options={this.getOptions()} />
      <FlexItem className="w-com-view-body">
        <h1 className="w-com-body-title">
          {
            target.title
          }
        </h1>
        <div className="w-com-view-component">
          <ComViewContent {...target} />
        </div>
      </FlexItem>
    </Flex>
  }
}

class Left extends DefineComponent {
  state = {

  };

  render() {
    return <div className="w-com-view-left">
      {
        this.getOptions().map((opt,index) => {
          return <Link path={opt.path} className="w-com-view-nav" key={index}>{opt.title}</Link>
        })
      }
    </div>
  }
}
