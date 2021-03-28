
import React from 'react';
import {DefineComponent} from "../../components";
import Flex, {FlexItem} from "../../components/Flex";
import css from './index.less';
import {reduxConnect} from "../../frame";
import {toAry} from "@wangct/util/lib/arrayUtil";
import Link from "../../components/Link";


export default class Layout extends DefineComponent{

  state = {
  };

  render(){
    return <div className={css.container}>
      <Header />
      <div className={css.body}>
        {this.props.children}
      </div>
    </div>
  }
}

@reduxConnect(({global}) => ({
  menus:global.menus,
}))
class Header extends DefineComponent {
  state = {

  };

  render() {
    return <Flex className={css.header}>
      <FlexItem />
      <Flex className={css.menu_list}>
        {
          toAry(this.props.menus).map((menu,index) => {
            return <Link path={menu.path} className={css.menu} key={index}>{menu.title}</Link>
          })
        }
      </Flex>
    </Flex>
  }
}
