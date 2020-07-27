import React, { Component } from "react"
import "../styles/TextControl.less"
import { Input, Form } from "antd";

interface ITextProps {
  name: string;
  displayName: string;
  text: string;
  OnTextChanged: Function;
}

class TextControl extends Component<ITextProps> {

  Id = Math.trunc(Math.random() * 0x1000000).toString();

  constructor(props: ITextProps) {
    super(props);
  }

  textChanged(e: any) {
    this.props.OnTextChanged?.(this.props.name, e.target.value);
  }

  render() {
    return (
      <Form.Item label={`${this.props.displayName} :`}>
        <Input id={this.Id} defaultValue={this.props.text} placeholder="请输入字符串..."
          onChange={this.textChanged.bind(this)}></Input>
      </Form.Item>
    )
  }
}

export default TextControl;