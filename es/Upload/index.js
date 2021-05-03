/**
 * Created by wangct on 2019/1/19.
 */
import React, {useEffect, useState} from 'react';
import DefineComponent from "../frame/components/DefineComponent";
import Btn from "../Btn";
import {classNames} from "@wangct/util/lib/util";
import {toAry} from "@wangct/util/lib/arrayUtil";
import Flex, {FlexItem} from "../Flex";
import Icon from "../Icon";
import Img from "../Img";
import {toStr} from "@wangct/util/lib/stringUtil";
import {isStr} from "@wangct/util/lib/typeUtil";
import {getDivProps} from "../utils/utils";

/**
 * 上传组件
  */
export default class Upload extends DefineComponent {

  state = {
  };

  getChildren(){
    const {children} = this.props;
    if(children){
      const child = React.Children.only(this.props.children);
      return React.cloneElement(child,{
        onClick:this.doClick,
      });
    }
    return <Btn onClick={this.doClick} type="primary" icon="upload">上传图片</Btn>;
  }

  inputChange = (e) => {
    const {files} = e.target;
    const value = this.isMultiple() ? Array.from(files) : files[0];
    this.onChange(value);
    e.target.value = null;
  };

  doClick = () => {
    this.getElem().click();
  };

  isMultiple(){
    return this.props.multiple;
  }

  doRemove = (index) => {
    if(this.isMultiple()){
      const list = toAry(this.getValue()).slice(0);
      list.splice(index,1);
      this.onChange(list);
    }else{
      this.onChange(null);
    }
  };

  render() {
    return <React.Fragment>
      {
        this.getChildren()
      }
      <input {...getDivProps(this.props)} value={undefined} className={classNames(this.props.className,'w-upload-input')} multiple={this.isMultiple()} ref={this.setElem} type="file" onChange={this.inputChange} />
      {
        this.getProp('showList') && toAry(this.getValue()).map((file,index) => {
          return <Flex verticalCenter className="w-upload-item" key={index}>
            {
              this.props.showPreview && <ImgView blob={file} />
            }
            <div className="w-upload-item-name">{file.name}</div>
            <FlexItem />
            <Icon onClick={this.doRemove.bind(this,index)} type="delete" />
          </Flex>
        })
      }
    </React.Fragment>
  }
}

function ImgView(props){
  const [src,setSrc] = useState(null);
  useEffect(() => {
    if(isStr(props.blob)){
      setSrc(props.blob);
    }else if(props.blob && isImgFileType(props.blob.type)){
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        setSrc(base64);
      };
      reader.readAsDataURL(props.blob);
    }
  });
  if(src){
    return <Img className="w-upload-item-img" src={src} />
  }
  return <div />;
}


function isImgFileType(type){
  return type.startsWith('image');
}
