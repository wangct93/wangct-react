
import React, {PureComponent, useContext, useEffect, useMemo, useRef, useState} from 'react';
import {Form,Upload,Img,Icon,Text,Input} from '@lib';

import './index.less';
import {random} from "@wangct/util/lib/util";
import {reduxConnect, updateModel} from "../../frame";
import {useSelector} from "react-redux";
import DefineComponent from "../../frame/components/DefineComponent";

const Context = React.createContext({name:'wangct'});


export default class Test extends DefineComponent{

  state = {

  };

  render(){
    const {state} = this;
    return <Context.Provider value={state.context} >
      <T name={"w"} />
    </Context.Provider>;
  }
}

function T(props){
  const [name,setName] = useState('0');
  console.log('T',name,setName,props);
  return <B>123 ---  {name}</B>;
}

function B(){
  const [name,setName] = useState('0');
  console.log('b',name,setName);
  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    console.log('effect');
    console.log(11,el.current);
    return () => {
      console.log('uneffect');
    }
  });

  const el = useRef();
  console.log(el.current);

  return <div ref={el} onClick={() => {
    setName(random());
    updateModel('global',{
      name:random(),
    });
  }}>123 ---  {name}</div>;
}
