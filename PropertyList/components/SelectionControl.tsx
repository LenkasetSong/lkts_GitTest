import React, { Component } from "react"
import "../styles/TextControl.less"
import { Select, Form } from "antd";
import RadioGroup from "antd/lib/radio/group";
import RadioButton from "antd/lib/radio/radioButton";

interface ISeelctionProps {
  name: string;
  displayName: string;
  selectedItem: any;
  displayStrs: Array<string>;
  items: Array<any>;
  OnSelectionChanged: Function;
}

class SelectionControl extends Component<ISeelctionProps> {

  Id = Math.trunc(Math.random() * 0x1000000).toString();

  constructor(props: ISeelctionProps) {
    super(props);
  }

  selectChanged(value: any) {
    this.props.OnSelectionChanged?.(this.props.name, value);
  }

  renderOptions() {
    const options = this.props.items.map((item, index) => {
      return (
        <Select.Option key={index} value={item}>{this.props.displayStrs[index]}</Select.Option>
      );
    });
    return options;
  }

  renderGroups() {
    const options = this.props.items.map((item, index) => {
      return (
        <RadioButton key={index} value={item}>{this.props.displayStrs[index]}</RadioButton>
      );
    });
    return options;
  }

  render() {
    return (
      <Form.Item label={`${this.props.displayName} :`}>
        {
          this.props.items.length <= 3 ?
            <RadioGroup id={this.Id} value={this.props.selectedItem} onChange={this.selectChanged.bind(this)}>
              {this.renderGroups()}
            </RadioGroup>
            :
            <Select id={this.Id} value={this.props.selectedItem} onChange={this.selectChanged.bind(this)}>
              {this.renderOptions()}
            </Select>
        }
      </Form.Item>
    )
  }
}

export default SelectionControl;