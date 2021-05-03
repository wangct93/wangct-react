import {NodeCircle, NodeImg, NodeLine, NodeRect, NodeText} from "./Node";
import React from "react";
import {aryToObject} from "@wangct/util/lib/arrayUtil";
import {getConfig, setConfig} from "../frame/utils/globalUtil";

export const FieldsNode = {
  rect:'rect',
  line:'line',
  circle:'circle',
  text:'text',
  img:'img',
};

export const options = [
  {
    title:'矩形',
    component:NodeRect,
    value:FieldsNode.rect,
  },
  {
    title:'线',
    component:NodeLine,
    value:FieldsNode.line,
  },
  {
    title:'园',
    component:NodeCircle,
    value:FieldsNode.circle,
  },
  {
    title:'文本',
    component:NodeText,
    value:FieldsNode.text,
  },
  {
    title:'图片',
    component:NodeImg,
    value:FieldsNode.img,
  },
];

export function getNodeOption(nodeType){
  let map = getConfig('svgEditorOptionsMap');
  if(!map){
    map = aryToObject(options,'value');
    setConfig('svgEditorOptionsMap',map);
  }
  return map[nodeType];
}

