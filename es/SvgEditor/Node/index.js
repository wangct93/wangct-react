import * as React from "react";
import DragSvgElem from "../DragSvgElem";
import {callFunc, classNames} from "@wangct/util/lib/util";
import DefineComponent from "../../frame/components/DefineComponent";
import {mousedown} from "../../utils/domUtil";

class BaseNode extends DefineComponent {
  state = {

  };

  onChange = (value) => {
    value = {
      ...this.props,
      ...value,
    };
    this.setState({
      value,
    });
    callFunc(this.props.onChange,value);
  };

  getColor(color = ''){
    return this.getProp('selected') ? 'red' : color;
  }

}

/**
 * 编辑线视图
 * @author wangchuitong
 */
export class NodeLine extends BaseNode {
  state = {};

  getPath(){
    const {x1,x2,y1,y2,x3 = (x1 + x2) / 2,y3 = (y1 + y2) / 2} = this.props;
    if(this.props.hasCurve){
      return `M${x1},${y1} Q${x3},${y3} ${x2},${y2} L${x2},${y2}`;
    }
    return `M${x1},${y1} L${x2},${y2}`;
  }

  startMousedown = (e) => {
    e.stopPropagation();
    const {props} = this;
    const ox = props.x1;
    const oy = props.y1;
    mousedown(e,{
      onMove:(e,dx,dy) => {
        this.onChange({
          x1:ox + dx,
          y1:oy + dy,
        });
      },
    });
  };

  endMousedown = (e) => {
    e.stopPropagation();
    const {props} = this;
    const ox = props.x2;
    const oy = props.y2;
    mousedown(e,{
      onMove:(e,dx,dy) => {
        this.onChange({
          x2:ox + dx,
          y2:oy + dy,
        });
      },
    });
  };

  mousedown = (e) => {
    const {x1,x2,y1,y2} = this.props;
    const {x:x3,y:y3} = this.getCurvePos();
    mousedown(e,{
      onMove:(e,dx,dy) => {
        this.onChange({
          x1:x1 + dx,
          y1:y1 + dy,
          x2:x2 + dx,
          y2:y2 + dy,
          x3:x3 + dx,
          y3:y3 + dy,
        });
      },
    });
  };

  curveMoveDown = (e) => {
    const {x:x3,y:y3} = this.getCurvePos();
    e.stopPropagation();
    mousedown(e,{
      onMove:(e,dx,dy) => {
        this.onChange({
          x3:x3 + dx,
          y3:y3 + dy,
        });
      },
    });
  };

  getCurvePos(){
    const {x1,x2,y1,y2,x3 = (x1 + x2) / 2,y3 = (y1 + y2) / 2} = this.props;
    return {
      x:x3,
      y:y3,
    };
  }

  render() {
    const {props} = this;
    const radius = 10;
    const {x1,x2,y1,y2} = props;
    const {x:x3,y:y3} = this.getCurvePos();
    return <g onMouseDown={this.mousedown} transform={`rotate(${props.angle},${(x1 + x2) / 2} ${(y1 + y2) / 2})`}>
      <g className={classNames('svg-line')}>
        {
          props.hasArrow && <defs>
            <marker id={props.id}
                    markerUnits="strokeWidth"
                    markerWidth="12"
                    markerHeight="12"
                    viewBox="0 0 12 12"
                    refX="8"
                    refY="6"
                    orient="auto">
              <path d="M2,2 L10,6 L2,10 L6,6 L2,2" fill={this.getColor(props.arrowColor || props.strokeColor)} />
            </marker>
          </defs>
        }
        <path fill="transparent" d={this.getPath()} style={{
          strokeWidth:props.strokeWidth,
        }} markerEnd={`url(#${props.id})`} stroke={this.getColor(props.strokeColor)} className={classNames('svg-line-target')} />
        <path fill="transparent" d={this.getPath()} stroke="transparent" strokeWidth={props.strokeWidth + 20} />
        <rect x={Math.min(x1,x2,x3)} y={Math.min(y1,y2,y3)} width={Math.max(x1,x2,x3) - Math.min(x1,x2,x3)} height={Math.max(y1,y2,y3) - Math.min(y1,y2,y3)} fill="transparent" />
        {
          props.hasCurve && <circle
            cx={this.getCurvePos().x}
            cy={this.getCurvePos().y}
            r={radius}
            className={'svg-line-point'}
            onMouseDown={this.curveMoveDown}
          />
        }
        <circle
          cx={x1}
          cy={y1}
          r={radius}
          className={'svg-line-point'}
          onMouseDown={this.startMousedown}
        />
        <circle
          cx={x2}
          cy={y2}
          r={radius}
          className={'svg-line-point'}
          onMouseDown={this.endMousedown}
        />
      </g>
    </g>;
  }
}

/**
 * 编辑矩形视图
 * @author wangchuitong
 */
export class NodeRect extends BaseNode {
  state = {
  };

  rectChange = (rect) => {
    this.onChange({
      ...this.props,
      ...rect,
    });
  };

  render() {
    const {props} = this;
    return <g transform={`rotate(${props.angle},${props.x + props.w / 2} ${props.y + props.h / 2})`}>
      <rect
        strokeWidth={props.strokeWidth}
        fill={props.fillColor}
        stroke={this.getColor(props.strokeColor)}
        x={props.x}
        y={props.y}
        width={props.w}
        height={props.h}
        rx={props.radius}
        ry={props.radius}
        strokeDasharray={props.strokeStyle === 'dashed' ? '6 10' : undefined}
        className={'svg-rect'}
      />
      <DragSvgElem disabled={this.isDisabled()} color={this.getColor(props.strokeColor)} onChange={this.rectChange} value={{x:props.x,y:props.y,w:props.w,h:props.h}} />
    </g>;
  }
}

/**
 * 编辑圆形视图
 * @author wangchuitong
 */
export class NodeCircle extends BaseNode {
  state = {};

  rectChange = (rect) => {
    this.onChange({
      ...this.props,
      ...rect,
    });
  };

  getEllipsePos(){
    const {props} = this;
    return {
      cx:props.x + props.w / 2,
      cy:props.y + props.h / 2,
      rx:props.w / 2,
      ry:props.h / 2,
    };
  }

  getStyle = () => {
    const {props} = this;
    return {
      strokeWidth:props.strokeWidth,
      fill:props.fillColor,
      stroke:this.getColor(props.strokeColor),
      strokeDasharray: props.strokeStyle === 'dashed' ? '6 10' : undefined,
    };
  };

  render() {
    const {props} = this;
    const ellipsePos = this.getEllipsePos();
    return <g transform={`rotate(${props.angle},${props.x + props.w / 2} ${props.y + props.h / 2})`}>
      <ellipse
        style={this.getStyle()}
        {...ellipsePos}
      />
      <DragSvgElem disabled={this.isDisabled()} onChange={this.rectChange} value={{x:props.x,y:props.y,w:props.w,h:props.h}} />
    </g>;
  }
}

/**
 * 编辑文本视图
 * @author wangchuitong
 */
export class NodeText extends BaseNode {
  state = {
  };

  mousedown = (e) => {
    const {x,y} = this.props;
    mousedown(e,{
      onMove:(e,dx,dy) => {
        this.onChange({
          x:x + dx,
          y:y + dy,
        });
      },
    });
  };

  render() {
    const {props} = this;
    return <g onMouseDown={this.mousedown} transform={`rotate(${props.angle},${props.x} ${props.y})`}>
      <text alignmentBaseline="before-edge" fill={this.getColor(props.color)} x={props.x} y={props.y} className={'svg-text'} >{props.text}</text>
    </g>;
  }
}

/**
 * 默认编辑视图
 * @author wangchuitong
 */
export class NodeImg extends BaseNode {
  state = {};


  render() {
    const {props} = this;
    return <g transform={`rotate(${props.angle},${props.x + props.w / 2} ${props.y + props.h / 2})`} >
      <image preserveAspectRatio="none" x={props.x} y={props.y} width={props.w} height={props.h} href={props.img} />
      <DragSvgElem disabled={this.isDisabled()} alwaysShow color={this.getColor()} onChange={this.onChange} value={{x:props.x,y:props.y,w:props.w,h:props.h}} />
    </g>;
  }
}
