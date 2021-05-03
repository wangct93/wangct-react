import React from "react";
import {Divider, Tooltip} from "antd";
import {classNames} from "@wangct/util/lib/util";
import DefineComponent from "../frame/components/DefineComponent";
import Icon from "../Icon";

export default class ComViewContent extends DefineComponent {
  state = {

  };

  render() {
    return <div className="w-com-view-content">
      <h2 className="w-com-view-content-title">代码演示</h2>
      <div ref={this.setStateElem} className="w-com-view-content-list">
        {
          this.getOptions().map((opt,index) => {
            return <ViewItem data={opt} key={index} />
          })
        }
      </div>
      <Sider contentElem={this.getStateElem()} options={this.getOptions()} />
    </div>
  }
}

class ViewItem extends DefineComponent {
  state = {
    showCode:false,
  };

  showCodeChange = () => {
    this.setState({
      showCode:!this.state.showCode,
    });
  };

  render() {
    const data = this.getData();
    return <div className="w-com-view-content-item">
      <div className="w-com-view-content-item-view">
        {data.render && data.render()}
      </div>
      <Divider orientation="left">{data.title}</Divider>
      <div className="w-com-view-content-item-desc">{data.desc}</div>
      <div className="w-com-view-content-item-footer">
        {
          this.state.showCode ? <Tooltip title="收起代码">
            <Icon onClick={this.showCodeChange} type="shrink" />
          </Tooltip> : <Tooltip title="展开代码">
            <Icon onClick={this.showCodeChange} type="arrows-alt" />
          </Tooltip>
        }
      </div>
      {
        this.state.showCode && <div className="w-com-view-content-item-code">
          {
            data.code
          }
        </div>
      }

    </div>
  }
}


class Sider extends DefineComponent {
  state = {

  };

  componentDidMount() {
    super.componentDidMount();
    this.addEvent();
    this.updatePosStatus();
  }

  componentWillUnmount() {
    this.removeEvent();
  }

  addEvent(){
    document.addEventListener('scroll',this.scrollEvent);
  }

  removeEvent(){
    document.removeEventListener('scroll',this.scrollEvent);
  }

  scrollEvent = (e) => {
    const elem = this.props.contentElem;
    if(!elem){
      return;
    }
    const children = elem.children;
    const index = Array.from(children).findIndex((el) => {
      return el.getBoundingClientRect().bottom > 0;
    });
    const activeIndex = index === -1 ? children.length - 1 : index;
    this.onChange(activeIndex);
    this.updatePosStatus();

  };

  updatePosStatus = () => {
    const scrollTop = document.documentElement.scrollTop;
    this.setState({
      fixed:scrollTop > 105,
    });
  };

  selectIndex = (index) => {
    const elem = this.props.contentElem;
    if(!elem){
      return;
    }
    const dt = elem.children[index].getBoundingClientRect().top;
    document.documentElement.scrollTop += dt - 20;
  };

  render() {
    return <div className={classNames('w-com-view-content-sider',this.state.fixed && 'w-com-view-content-sider-fixed')}>
      {
        this.getOptions().map((opt,index) => {
          return <Tooltip title={opt.title} key={index}>
            <div onClick={this.selectIndex.bind(this,index)} className={classNames('w-com-view-content-sider-item',this.getValue() === index && 'active')}>{opt.title}</div>
          </Tooltip>
        })
      }
    </div>
  }
}
