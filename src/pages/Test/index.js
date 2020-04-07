
import React, {PureComponent} from 'react';
import {Form,Upload,Img,Icon,Text,Input} from '@lib';

import './index.less';
import {random,loop} from "wangct-util";
import {Button } from "antd";
import {DefineComponent, Swiper, Table} from "../../components";
import TableView from "../../components/TableView";
import Loading from "../../components/Loading";
import {Portal} from '@lib';


export default class Test extends DefineComponent{

  state = {
  };

  doTest = () => {
    this.setState({
      _date:+new Date(),
    })
  }

  setElem = (elem) => {
    console.log(2222222);
    if(elem){
      window.a = elem;
    }
  }

  render(){
    console.log(12);
    return <div onClick={this.doTest}>
      {
        this.state._date || <Test1 ref={this.setElem} />
      }

      {
        new Array(10).fill(true).map((index) => {
          return <Img width={50} src="https://fuss10.elemecdn.com/0/77/64237a0feace7b5d73841c825f2f0png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" key={index + random()} />
        })
      }
      <div style={{}}>
        {
          new Array(10).fill(true).map((index) => {
            return <Img width={50} src="https://fuss10.elemecdn.com/0/77/64237a0feace7b5d73841c825f2f0png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" key={index + random()} />
          })
        }
      </div>
    </div>;
  }
}

class Test1 extends DefineComponent {
  render() {
    return <div>
11
    </div>
  }
}
