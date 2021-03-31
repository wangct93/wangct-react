
import React from 'react';
import {DefineComponent} from "../../components";
import Flex, {FlexItem} from "../../components/Flex";
import css from './index.less';
import {getPathname, pathMatch, reduxConnect} from "../../frame";
import {toAry} from "@wangct/util/lib/arrayUtil";
import {FieldsRoutePaths} from "../../json/dic";
import Link from "../../components/Link";

@reduxConnect(({global}) => ({
  menus:global.menus,
  pathname:getPathname(),
}))
export default class ComView extends DefineComponent{

  state = {
  };

  getTarget(){
    const target = toAry(this.props.menus).find((item) => item.path === FieldsRoutePaths.component) || {};
    return toAry(target.children).find((item) => pathMatch(item.fullPath,this.props.pathname)) || {};
  }

  render(){
    return <Flex className={css.container}>
      <Left />
      <FlexItem className={css.body}>
        <h1 className={css.title}>
          {
            this.getTarget().title
          }
        </h1>
        <div className={css.content}>{this.props.children}</div>
      </FlexItem>
    </Flex>
  }
}

@reduxConnect(({global}) => ({
  menus:global.menus,
}))
class Left extends DefineComponent {
  state = {

  };

  getOptions(){
    const target = toAry(this.props.menus).find((item) => item.path === FieldsRoutePaths.component);
    return toAry(target && target.children);
  }

  render() {
    return <div className={css.menu_list}>
      {
        this.getOptions().map((opt,index) => {
          return <Link path={opt.fullPath} className={css.menu} key={index}>{opt.title}</Link>
        })
      }
    </div>
  }
}
