import React, { Component } from "react"
import "../styles/ListControl.less"
import /*antd,*/ { Form, Input, InputNumber, Select, Button } from "antd";
import { PropertyConstructure } from "../model/PropertyConstructure";
import { PropertyType } from "../interface/IPropertyConstructure";

//var Table = antd.Table;

interface IListProps {
  name: string;
  displayName: string;
  items: Array<PropertyConstructure[]>;
  OnListChanged: Function;
}

class ListControl extends Component<IListProps, any> {

  private itemsCache: Array<PropertyConstructure[]> = Array<PropertyConstructure[]>();

  Id = Math.trunc(Math.random() * 0x1000000).toString();

  constructor(props: IListProps) {
    super(props);
    this.state = {
      itemstag: 0
    }
    this.itemsCache = [...this.props.items]
  }

  textChanged = (idx: number, index: number, e: any) => {
    let txt = e.target.value;
    this.itemsCache[idx][index].value = txt;
  }

  valueChanged = (idx: number, index: number, value: any) => {
    var re = /^[0-9]+.?[0-9]*/;
    if (re.test(value)) {
      this.itemsCache[idx][index].value = value;
    }
  }

  selectionChanged = (idx: number, index: number, value: any) => {
    this.itemsCache[idx][index].value = value;
  }

  deleteClick = (idx: number) => {
    this.itemsCache.splice(idx, 1);
    this.setState(
      { itemstag: this.state.itemstag + 1 }
    )
  }

  addClick = () => {
    this.itemsCache.push(
      this.props.items[0]
    );
    this.setState(
      { itemstag: this.state.itemstag + 1 }
    )
  }

  saveClick = () => {
    this.props.OnListChanged?.(this.props.name, this.itemsCache);
  }

  renderList(properties: PropertyConstructure[], idx: number): any {
    const list = properties.map((item, index) => {
      let keyID = Math.trunc(Math.random() * 0x1000000).toString();
      switch (item.type) {
        case PropertyType.TEXT: {
          return (
            <tr key={keyID}>
              <td style={{ textAlign: "right" }}>{`${item.displayName}:`}</td>
              <td colSpan={2}>
                <Input defaultValue={item.value} placeholder="请输入字符串..."
                  onChange={this.textChanged.bind(this, idx, index)}></Input>
              </td>
            </tr>
          );
        };
        case PropertyType.RANGE_DECIMAL: {
          return (
            <tr key={keyID}>
              <td style={{ textAlign: "right" }}>{`${item.displayName}:`}</td>
              <td>
                <InputNumber min={item.minValue} max={item.maxValue} defaultValue={item.value} step={0.01}
                  onChange={this.valueChanged.bind(this, idx, index)}/>
              </td>
              <td>
                <a href="##" style={{ margin: '0px 20px' }}>
                  {item.minValue} ~ {item.maxValue}
                </a>
              </td>
            </tr>
          );
        };
        case PropertyType.SELECTION: {
          return (
            <tr key={keyID}>
              <td style={{ textAlign: "right" }}>{`${item.displayName}:`}</td>
              <td colSpan={2}>
                <Select defaultValue={item.value} style={{ width: "90%" }} 
                  onChange={this.selectionChanged.bind(this, idx, index)}>
                  {
                    item.values.map((val, ix) => {
                      return (
                        <Select.Option key={ix} value={val}>{item.displayStrs[ix]}</Select.Option>
                      );
                    })
                  }
                </Select>
              </td>
            </tr>
          );
        };
        default: return null; /*break;*/
      }
    })
    let keyID = Math.trunc(Math.random() * 0x1000000).toString();
    list.push(
      <tr key={keyID}>
        <td></td>
        <td style={{ textAlign: "right" }} colSpan={2}>
          <Button style={{ color: "red", margin: "2px" }} onClick={this.deleteClick.bind(this, idx)}>删除</Button>
        </td>
      </tr>
    )
    return list;
  }

  render() {
    return (
      <Form.Item label={`${this.props.displayName} :`}>
        {
          this.itemsCache.map((itm, idx) => {
            let keyID = Math.trunc(Math.random() * 0x1000000).toString();
            return (
              <table key={keyID} style={{ border: "1px solid #ccc", marginBottom: "5px", width: "100%"/*, boxShadow: "1px 1px 2px #888"*/ }}>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.renderList(itm, idx)
                  }
                </tbody>

              </table>
            )
          })
        }
        <Button style={{ margin: "5px", color: "blue" }} onClick={this.addClick.bind(this)}>添加</Button>
        <Button style={{ margin: "5px" }} onClick={this.saveClick.bind(this)}>保存</Button>
      </Form.Item>
    )
  }
}

export default ListControl;