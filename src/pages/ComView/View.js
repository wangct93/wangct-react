import DefineComponent from "../../frame/components/DefineComponent";
import React from "react";
import css from './View.less';
import {Divider, Tooltip} from "antd";
import Icon from "../../components/Icon";


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
    console.log(e);
  };

  selectIndex(){

  }

  render() {
    return <div className={css.sider_box}>
      {
        this.getOptions().map((opt,index) => {
          return <div className={css.sider_item} key={index}>{opt.title}</div>
        })
      }
    </div>
  }
}
