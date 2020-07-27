import React, { Component } from 'react';
import style from './style.less';
import { Form, Button } from 'antd';
import { PropertyType } from './interface/IPropertyConstructure';
import { PropertyConstructure } from './model/PropertyConstructure';
import TextControl from './components/TextControl';
import RangeControl from './components/RangeControl';
import SelectionControl from './components/SelectionControl';
import SwitchControl from './components/SwitchControl';


export default class PropertyList extends Component<IProps, any> {

  private index: number = 0;
  // private properties1: Array<PropertyConstructure> = [];
  // private properties2: Array<PropertyConstructure> = [];

  constructor(props: IProps) {
    super(props);
    this.state = {
      propArray: [this.generateList1(), this.generateList2()],
      properties: this.generateList1()
    };
  }

  public generateList1() {
    return [
      new PropertyConstructure("discription", "描述", "basicGroup", 0).setText("text1"),
      new PropertyConstructure("frequency1", "频率1", "Group1", 1).setRange(20, 0, 100),
      new PropertyConstructure("frequency2", "频率2", "Group1", 2).setRange(20, 0, 100, true),
      new PropertyConstructure("frequency3", "频率3", "Group1", 3).setRange(20, 0, 100, true),
      new PropertyConstructure("frequency4", "频率4", "Group1", 4).setRange(20, 0, 100),
      new PropertyConstructure("frequency5", "频率5", "Group1", 5).setRange(20, 0, 100),
      new PropertyConstructure("frequency6", "频率6", "Group1", 6).setRange(20, 0, 100),
      new PropertyConstructure("selections1", "选择项1", "Group2", 7).setSelection("item2", ["item1", "item2", "item3", "item4"], [0x0, 0x10, 0x20, 0x30]),
      new PropertyConstructure("selections2", "选择项2", "Group2", 8).setSelection("item2", ["item1", "item2", "item3"], [0x0, 0x10, 0x20]),
      new PropertyConstructure("selections3", "选择项3", "Group2", 9).setSelection("item2", ["item1", "item2", "item3"], [0x0, 0x10, 0x20]),
      new PropertyConstructure("bool1", "开关1", "Group3", 10).setBoolean(true, ["打开了", "关闭了"], [true, false]),
      new PropertyConstructure("bool2", "开关2", "Group3", 11).setBoolean(false, ["已开启", "已关闭"], [true, false]),
      new PropertyConstructure("none", "无", "basicGroup", 12),
    ];
  }

  public generateList2() {
    return [
      new PropertyConstructure("discription", "描述", "basicGroup", 0).setText("text1"),
      new PropertyConstructure("frequency1", "频率1", "Group1", 1).setRange(20, 0, 100),
      new PropertyConstructure("frequency2", "频率2", "Group1", 2).setRange(20, 0, 100, true),
      new PropertyConstructure("frequency3", "频率3", "Group1", 3).setRange(20, 0, 100),
      new PropertyConstructure("selections1", "选择项1", "Group2", 7).setSelection("item2", ["item1", "item2", "item3", "item4"], [0x0, 0x10, 0x20, 0x30]),
      new PropertyConstructure("selections2", "选择项2", "Group2", 8).setSelection("item2", ["item1", "item2", "item3", "item4"], [0x0, 0x10, 0x20, 0x30]),
      new PropertyConstructure("bool1", "开关1", "Group3", 10).setBoolean(true, ["打开了", "关闭了"], [true, false]),
      new PropertyConstructure("bool2", "开关2", "Group3", 11).setBoolean(false, ["已开启", "已关闭"], [true, false]),
    ];
  }

  onChangePropertyList() {
    this.index++;
    this.setState({
      properties: this.state.propArray[this.index % 2]
    });
  }

  onPropertyChanged(name: string, value: any) {
    console.log(`**${name}:${value}`);
  }

  public renderList(): any {
    const list = this.state.properties.map((item: any) => {
      let keyID = Math.trunc(Math.random() * 0x1000000).toString();
      switch (item.type) {
        case PropertyType.TEXT: {
          return (
            <TextControl key={keyID} name={item.name} displayName={item.displayName} text={item.value}
              OnTextChanged={this.onPropertyChanged}>
            </TextControl>
          );
        };
        case PropertyType.RANGE_INTEGER: {
          return (
            <RangeControl key={keyID} name={item.name} displayName={item.displayName} value={item.value}
              isInteger={true}
              OnValueChanged={this.onPropertyChanged} min={item.minValue} max={item.maxValue} >
            </RangeControl>
          );
        };
        case PropertyType.RANGE_DECIMAL: {
          return (
            <RangeControl key={keyID} name={item.name} displayName={item.displayName} value={item.value}
              isInteger={false}
              OnValueChanged={this.onPropertyChanged} min={item.minValue} max={item.maxValue} >
            </RangeControl>
          );
        };
        case PropertyType.SELECTION: {
          return (
            <SelectionControl key={keyID} name={item.name} displayName={item.displayName}
              items={item.values} displayStrs={item.displayStrs} selectedItem={item.value}
              OnSelectionChanged={this.onPropertyChanged}>
            </SelectionControl>
          );
        };
        case PropertyType.BOOL: {
          return (
            <SwitchControl key={keyID} name={item.name} displayName={item.displayName}
              items={item.values} displayStrs={item.displayStrs} bool={item.value}
              OnBoolChanged={this.onPropertyChanged}>
            </SwitchControl>
          );
        };
        default: return null; break;
      }
    });
    return list;
  }

  layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  public render() {
    return (
      <div>
        <Button style={{ margin: 10 }} onClick={this.onChangePropertyList.bind(this)}>切换参数</Button>
        <div className={style.view}>
          <Form {...this.layout} className="ant-form-horizontal" onFinish={this.onFinish}>
            {
              this.renderList()
            }
            {/* <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit">确定</Button>
          </Form.Item> */}
          </Form>
        </div>
      </div>
    );
  }
}