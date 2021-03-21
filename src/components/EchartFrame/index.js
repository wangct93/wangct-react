import React from 'react';
import {callFunc} from "@wangct/util";
import DefineComponent from "../DefineComponent";
import {getResizeSign, reduxConnect} from "../../frame";

/**
 * echart框架
 */
@reduxConnect(() => ({
  resizeSign:getResizeSign(),
}))
export default class EchartFrame extends DefineComponent {

  componentDidMount() {
    this.drawEchart();
  }

  componentDidUpdate(prevProps, prevState) {
    this.drawEchart();
  }

  drawEchart(){
    const chart = this.getChart();
    if(!chart){
      return;
    }
    callFunc(this.props.onDraw || this.props.draw,chart,this.props.data,this.getElem());
    chart.resize();
  }

  getChart(){
    const {chart} = this;
    if(chart){
      return chart;
    }
    const elem = this.getElem();
    const {echarts} = this.props;
    if(!echarts){
      return;
    }
    this.chart = echarts.init(elem);
    return this.chart;
  }

  render(){
    return <div ref={this.setElem} {...this.getDivProps()} />;
  }
}
