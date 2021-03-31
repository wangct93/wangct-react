import DefineComponent from "../../frame/components/DefineComponent";
import React from "react";
import css from './View.less';
import {Divider, Tooltip} from "antd";
import Icon from "../../components/Icon";
import {classNames} from "@wangct/util/lib/util";


export default class ComViewContent extends DefineComponent {
  state = {

  };

  render() {
    return <div className={css.container}>
      <h2 className={css.title}>代码演示</h2>
      <div ref={this.setStateElem} className={css.list}>
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
    return <div className={css.view_item}>
      <div className={css.view}>
        {data.render && data.render()}
      </div>
      <Divider orientation="left">{data.title}</Divider>
      <div className={css.text_desc}>{data.desc}</div>
      <div className={css.action_box}>
        {
          this.state.showCode ? <Tooltip title="收起代码">
            <Icon onClick={this.showCodeChange} type="shrink" />
          </Tooltip> : <Tooltip title="展开代码">
            <Icon onClick={this.showCodeChange} type="arrows-alt" />
          </Tooltip>
        }
      </div>
      {
        this.state.showCode && <div className={css.code_box}>
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
    return <div className={classNames(css.sider_box,this.state.fixed && css.fixed)}>
      {
        this.getOptions().map((opt,index) => {
          return <div onClick={this.selectIndex.bind(this,index)} className={classNames(css.sider_item,this.getValue() === index && css.active)} key={index}>{opt.title}</div>
        })
      }
    </div>
  }
}
