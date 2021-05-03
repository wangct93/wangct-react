
import {callFunc, classNames} from "@wangct/util/lib/util";
import React from "react";
import DefineComponent from "../../frame/components/DefineComponent";
import {mousedown} from "../../utils/domUtil";

/**
 * 拖拽元素
 * @author wangchuitong
 */
export default class DragSvgElem extends DefineComponent {
  state = {
    value:{
      x:0,
      y:0,
      w:0,
      h:0,
    }
  };

  getValue() {
    return super.getValue() || {};
  }

  onChange = (value) => {
    value = {
      ...this.getValue(),
      ...value,
    };
    this.setState({
      value,
    });
    callFunc(this.props.onChange,value);
  };

  lineMousedown = (type,e) => {
    e.stopPropagation();
    const value = this.getValue();
    const ox = type === 'left' ? value.x : value.x + value.w;
    const oy = type === 'top' ? value.y : value.y + value.h;
    mousedown(e,{
      onMove:(e,dx,dy) => {
        if(type === 'left' || type === 'right'){
          const fixedX = type === 'left' ? value.x + value.w : value.x;
          const nx = ox + dx;
          const x = Math.min(fixedX,nx);
          const w = Math.abs(fixedX - nx);
          this.onChange({
            x,
            w,
          });
        }else{
          const fixedY = type === 'top' ? value.y + value.h : value.y;
          const ny = oy + dy;
          const y = Math.min(fixedY,ny);
          const h = Math.abs(fixedY - ny);
          this.onChange({
            y,
            h,
          });
        }
      },
    });
  };

  pointMousedown = (type,e) => {
    e.stopPropagation();
    const value = this.getValue();
    const ox = type.includes('left') ? value.x : value.x + value.w;
    const oy = type.includes('Top') ? value.y : value.y + value.h;
    mousedown(e,{
      onMove:(e,dx,dy) => {
        let fixedX,fixedY;
        switch(type){
          case 'leftTop':
            fixedX = value.x + value.w;
            fixedY = value.y + value.h;
            break;
          case 'leftBottom':
            fixedX = value.x + value.w;
            fixedY = value.y;
            break;
          case 'rightTop':
            fixedX = value.x;
            fixedY = value.y + value.h;
            break;
          case 'rightBottom':
            fixedX = value.x;
            fixedY = value.y;
            break;
        }
        const nx = ox + dx;
        const ny = oy + dy;
        const x = Math.min(fixedX,nx);
        const y = Math.min(fixedY,ny);
        const w = Math.abs(fixedX - nx);
        const h = Math.abs(fixedY - ny);
        this.onChange({
          x,
          y,
          w,
          h,
        });
      }
    });
  };

  mousedown = (e) => {
    const value = this.getValue();
    const ox = value.x;
    const oy = value.y;
    mousedown(e,{
      onMove:(e,dx,dy) => {
        this.onChange({
          x:ox + dx,
          y:oy + dy,
        });
      },
    });
  };

  render() {
    const {x,y,w,h} = this.getValue();
    const radius = 5;
    if(this.isDisabled()){
      return null;
    }
    return <g className={classNames('w-svg-drag',this.props.alwaysShow && "w-svg-drag-show")}>
      <rect x={x} y={y} width={w} stroke={this.getProp('color') || 'transparent'} height={h} fill="transparent" className="w-svg-drag-content" onMouseDown={this.mousedown} />
      <rect x={x} y={y} width={radius} height={h} onMouseDown={this.lineMousedown.bind(this,'left')} className={classNames("w-svg-drag-line","w-svg-drag-line-left")} />
      <rect x={x + w - radius} y={y} width={radius} height={h}  onMouseDown={this.lineMousedown.bind(this,'right')} className={classNames("w-svg-drag-line","w-svg-drag-line-right")} />
      <rect x={x} y={y + h - radius} width={w} height={radius}  onMouseDown={this.lineMousedown.bind(this,'bottom')} className={classNames("w-svg-drag-line","w-svg-drag-line-bottom")} />
      <rect x={x} y={y} width={w} height={radius}  onMouseDown={this.lineMousedown.bind(this,'top')} className={classNames("w-svg-drag-line","w-svg-drag-line-top")} />
      <rect x={x} y={y} width={radius} height={radius}  onMouseDown={this.pointMousedown.bind(this,'leftTop')} className={classNames("w-svg-drag-point","w-svg-drag-point-left-top")} />
      <rect x={x} y={y + h - radius} width={radius} height={radius}  onMouseDown={this.pointMousedown.bind(this,'leftBottom')} className={classNames("w-svg-drag-point","w-svg-drag-point-left-bottom")} />
      <rect x={x + w - radius} y={y} width={radius} height={radius}  onMouseDown={this.pointMousedown.bind(this,'rightTop')} className={classNames("w-svg-drag-point","w-svg-drag-point-right-top")} />
      <rect x={x + w - radius} y={y + h - radius} width={radius} height={radius}  onMouseDown={this.pointMousedown.bind(this,'rightBottom')} className={classNames("w-svg-drag-point","w-svg-drag-point-right-bottom")} />
    </g>;
  }
}
