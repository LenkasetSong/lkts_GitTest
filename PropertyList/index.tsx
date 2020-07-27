import React, { Component } from 'react';
import style from './style.less';
import antd, { Form, Button } from 'antd';
import { PropertyType } from './interface/IPropertyConstructure';
import { PropertyConstructure } from './model/PropertyConstructure';
import TextControl from './components/TextControl';
import RangeControl from './components/RangeControl';
import SelectionControl from './components/SelectionControl';
import SwitchControl from './components/SwitchControl';
import { isUndefined } from 'lodash';
import _ from 'lodash'
import ListControl from './components/ListControl';

var Collapse = antd.Collapse;
var Panel = Collapse.Panel;

export default class PropertyList extends Component<IProps, any> {

  private index: number = 0;
  // private properties1: Array<PropertyConstructure> = [];
  // private properties2: Array<PropertyConstructure> = [];
  private temproperties: Array<PropertyConstructure> = [];

  constructor(props: IProps) {
    super(props);
    this.state = {
      propArray: [this.generateList1(), this.generateList2()],
      properties: this.generateList1()
    };
    this.temproperties = [...this.state.properties];
  }

  public generateList1() {
    return [
      new PropertyConstructure("discription", "描述", "基本参数", 0).setText("text1"),
      new PropertyConstructure("frequency1", "频率1", "频率设置", 1).setRange(20, 10, 100),
      new PropertyConstructure("frequency2", "频率2", "频率设置", 2).setRange(20, 2, 24, true),
      new PropertyConstructure("frequency3", "频率3", "频率设置", 3).setRange(20, 1, 50, true),
      new PropertyConstructure("frequency4", "频率4", "频率设置", 4).setRange(20, 10, 50),
      new PropertyConstructure("frequency5", "频率5", "频率设置", 5).setRange(20, 0, 50),
      new PropertyConstructure("frequency6", "频率6", "频率设置", 6).setRange(20, 0, 100),
      new PropertyConstructure("selections1", "选择项1", "特殊参数", 7).setSelection(0x10/*"item2"*/, ["item1", "item2", "item3", "item4"], [0x0, 0x10, 0x20, 0x30]),
      new PropertyConstructure("selections2", "选择项2", "特殊参数", 8).setSelection(0x10, ["item1", "item2", "item3"], [0x0, 0x10, 0x20]),
      new PropertyConstructure("selections3", "选择项3", "特殊参数", 9).setSelection(0x0, ["item1", "item2", "item3"], [0x0, 0x10, 0x20]),
      new PropertyConstructure("bool1", "开关1", "功能开关", 10).setBoolean(true, ["打开了", "关闭了"], [true, false]),
      new PropertyConstructure("bool2", "开关2", "功能开关", 11).setBoolean(false, ["已开启", "已关闭"], [true, false]),
      new PropertyConstructure("none", "无", "Extra设置", 12),
    ];
  }

  public generateList2() {
    return [
      new PropertyConstructure("discription", "描述", "basicGroup", 0).setText("text1"),
      new PropertyConstructure("frequency1", "频率1", "Group1", 1).setRange(20, 0, 100),
      new PropertyConstructure("frequency2", "频率2", "Group1", 2).setRange(20, 0, 100, true),
      new PropertyConstructure("frequency3", "频率3", "Group1", 3).setRange(20, 0, 100),
      new PropertyConstructure("selections1", "选择项1", "Group2", 7).setSelection(0x10, ["item1", "item2", "item3", "item4"], [0x0, 0x10, 0x20, 0x30]),
      new PropertyConstructure("selections2", "选择项2", "Group2", 8).setSelection(0x20, ["item1", "item2", "item3"], [0x0, 0x10, 0x20]),
      new PropertyConstructure("bool1", "开关1", "Group3", 10).setBoolean(true, ["打开了", "关闭了"], [true, false]),
      new PropertyConstructure("bool2", "开关2", "Group3", 11).setBoolean(false, ["已开启", "已关闭"], [true, false]),
      new PropertyConstructure("paramList", "参数列表", "频点列表设置", 12).setChildren(this.getChildren())
    ];
  }
  public getChildren() {
    return [
      [
        new PropertyConstructure("name", "名称", "", 0).setText("频段20-80"),
        new PropertyConstructure("mode", "模式", "", 1).setSelection(1, ["SCAN", "P SCAN", "F SCAN"], [0, 1, 2]),
        new PropertyConstructure("step", "步进", "", 2).setSelection(10, ["5 Hz", "10 Hz", "2 Hz"], [5, 10, 2]),
        new PropertyConstructure("start", "起始频率", "", 3).setRange(20, 0, 1000),
        new PropertyConstructure("stop", "结束频率", "", 4).setRange(80, 0, 1000),
      ],
      [
        new PropertyConstructure("name", "名称", "", 0).setText("频段80-120"),
        new PropertyConstructure("mode", "模式", "", 1).setSelection(1, ["SCAN", "P SCAN", "F SCAN"], [0, 1, 2]),
        new PropertyConstructure("step", "步进", "", 2).setSelection(10, ["5 Hz", "10 Hz", "2 Hz"], [5, 10, 2]),
        new PropertyConstructure("start", "起始频率", "", 3).setRange(80, 0, 1000),
        new PropertyConstructure("stop", "结束频率", "", 4).setRange(120, 0, 1000),
      ],
      [
        new PropertyConstructure("name", "名称", "", 0).setText("频段80-120"),
        new PropertyConstructure("mode", "模式", "", 1).setSelection(1, ["SCAN", "P SCAN", "F SCAN"], [0, 1, 2]),
        new PropertyConstructure("step", "步进", "", 2).setSelection(10, ["5 Hz", "10 Hz", "2 Hz"], [5, 10, 2]),
        new PropertyConstructure("start", "起始频率", "", 3).setRange(80, 0, 1000),
        new PropertyConstructure("stop", "结束频率", "", 4).setRange(120, 0, 1000),
      ],
      [
        new PropertyConstructure("name", "名称", "", 0).setText("频段80-120"),
        new PropertyConstructure("mode", "模式", "", 1).setSelection(1, ["SCAN", "P SCAN", "F SCAN"], [0, 1, 2]),
        new PropertyConstructure("step", "步进", "", 2).setSelection(10, ["5 Hz", "10 Hz", "2 Hz"], [5, 10, 2]),
        new PropertyConstructure("start", "起始频率", "", 3).setRange(80, 0, 1000),
        new PropertyConstructure("stop", "结束频率", "", 4).setRange(120, 0, 1000),
      ]
    ];
  }

  onChangePropertyList() {
    this.temproperties = [];//this.temproperties.length=0||this.temproperties.splice(0)
    this.index++;
    this.setState({
      properties: this.state.propArray[this.index % 2]
    });
    this.temproperties = [...this.state.propArray[this.index % 2]];
  }

  onSetPropertyList() {
    console.log(this.temproperties);
  }

  // onPropertyChanged(name: string, value: any) {
  //   console.log(`**${name}:${value}`);
  /*this为子项,使用ArrowFunc可以拿到PropertyList*/
  //   let prop = this.temproperties?.find(item => item.name === name)
  //   isUndefined(prop) ? null : prop.value = value;
  //   console.log(this);
  // }
  onPropertyChanged = (name: string, value: any) => {
    console.log(`修改的属性值：${name}:${value}`);
    let prop = this.temproperties?.find(item => item.name === name)
    // isUndefined(prop) ? null : prop.value = value;
    if (!isUndefined(prop)) {
      if (prop.type === PropertyType.LIST) {
        prop.children = value;
      }
      else {
        prop.value = value;
      }
    }
  }

  public renderGroup(): any {
    const oldArr = _.groupBy(this.state.properties, 'groupName');//对象
    let newArr: { name: string; data: any[]; }[] = [];
    Object.keys(oldArr).forEach(key => {// 数组
      newArr.push({ name: key, data: oldArr[key] })
    })
    const group = newArr.map((arr, index) => {
      return <Panel header={arr.name} key={index + 1}>
        <Form {...this.layout} className="ant-form-horizontal" onFinish={this.onFinish}>
          {
            this.renderList(arr.data)
          }
        </Form>
      </Panel>
    })
    return (
      <Collapse defaultActiveKey={["1", "2"]} >
        {group}
      </Collapse>
    );
  }

  public renderList(properties: any[]): any {
    const list = properties.map((item: any) => {
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
              OnValueChanged={this.onPropertyChanged} min={item.minValue} max={item.maxValue} isInteger={true}>
            </RangeControl>
          );
        };
        case PropertyType.RANGE_DECIMAL: {
          return (
            <RangeControl key={keyID} name={item.name} displayName={item.displayName} value={item.value}
              OnValueChanged={this.onPropertyChanged} min={item.minValue} max={item.maxValue} isInteger={false}>
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
        case PropertyType.LIST: {
          return (
            <ListControl key={keyID} name={item.name} displayName={item.displayName}
              items={item.children}
              OnListChanged={this.onPropertyChanged}>
            </ListControl>
          );
        };
        default: return null; /*break;*/
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
        <Button style={{ margin: 10 }} onClick={this.onSetPropertyList.bind(this)}>设置参数</Button>
        <div className={style.view}>
          {this.renderGroup()}
        </div>
      </div>
    );
  }
}