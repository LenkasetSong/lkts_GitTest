import React, { Component } from "react"
import "../styles/TextControl.less"
import { Switch, Form, Tooltip } from "antd";

interface IBooleanProps {
  name: string;
  displayName: string;
  bool: boolean;
  displayStrs: Array<string>;
  items: Array<boolean>;
  OnBoolChanged: Function;
}

class SwitchControl extends Component<IBooleanProps, any> {

  Id = Math.trunc(Math.random() * 0x1000000).toString();

  constructor(props: IBooleanProps) {
    super(props);
    this.state = {
      currentBool: this.props.bool,
    }
  }

  boolChanged(value: any) {
    this.props.OnBoolChanged?.(this.props.name, value);
    this.setState({ currentBool: value })
  }

  render() {
    return (
      <Form.Item label={`${this.props.displayName} :`}>
        <Form.Item noStyle rules={[{ required: true, message: '该属性不能为空' }]}>
          <Switch checked={this.state.currentBool}
            onChange={this.boolChanged.bind(this)}></Switch>
        </Form.Item>
        {/* <Slider min={this.props.min} max={this.props.max} value={this.state.currentValue} step={0.01}
            onChange={this.onChange.bind(this)} onAfterChange={this.onAfterChange.bind(this)}></Slider> */}
        <Tooltip title="功能开关">
          <a href="##" style={{ margin: '0px 20px' }}>
            {this.props.displayStrs[this.props.items.indexOf(this.state.currentBool)]}
          </a>
        </Tooltip>
      </Form.Item>
    )
  }
}

export default SwitchControl;