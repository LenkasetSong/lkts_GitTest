import React, { Component } from "react"
import "../styles/RangeControl.less"
import { InputNumber, Form, /*Slider,*/ Tooltip } from "antd";

interface IRangeProps {
  name: string;
  displayName: string;
  value: number;
  min: number;
  max: number;
  isInteger: boolean;
  OnValueChanged: Function;
}

class RangeControl extends Component<IRangeProps, any> {

  Id = Math.trunc(Math.random() * 0x1000000).toString();

  constructor(props: IRangeProps) {
    super(props);
    this.state = {
      currentValue: this.props.value,
    };
  }

  valueChanged(value: any) {
    var re = /^[0-9]+.?[0-9]*/;//判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/
    if (re.test(value)) {
      if (value <= this.props.max || value >= this.props.min) {
        this.setState({ currentValue: value });
        this.props.OnValueChanged?.(this.props.name, value);
      }
    }
  }

  // onChange(value: any) {
  //   this.setState({ currentValue: value });
  // }

  // onAfterChange(value: any) {
  //   this.props.OnValueChanged?.(this.props.name, value);
  // }

  limitDecimals = (value: string | number | undefined): string => {
    const reg = /^(\-)*(\d+)\.(\d\d).*$/;
    //console.log(value);
    if (typeof value === 'string') {
      return !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : '';
    } else if (typeof value === 'number') {
      return !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : '';
    } else {
      return '';
    }
  };

  render() {
    return (
      <Form.Item label={`${this.props.displayName} :`}>
        <Form.Item noStyle rules={[{ required: true, message: '该属性不能为空' }]}>
          <InputNumber min={this.props.min} max={this.props.max} value={this.state.currentValue} step={this.props.isInteger ? 1 : 0.01}
            onChange={this.valueChanged.bind(this)} /*formatter={this.limitDecimals} parser={this.limitDecimals}*/ />
        </Form.Item>
        <Tooltip title="取值范围">
          <a href="##" style={{ margin: '0px 20px' }}>
            {this.props.min} ~ {this.props.max} {this.props.isInteger ? '整数' : '小数'}
          </a>
        </Tooltip>
        {/* <Slider min={this.props.min} max={this.props.max} value={this.state.currentValue} step={this.props.isInteger ? 1 : 0.01}
          onChange={this.onChange.bind(this)} onAfterChange={this.onAfterChange.bind(this)}></Slider> */}
      </Form.Item>
    )
  }
}

export default RangeControl;