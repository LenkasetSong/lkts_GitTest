
export enum PropertyType {
  TEXT,  // 普通文本类型
  RANGE_INTEGER,  // 带范围的整数
  RANGE_DECIMAL,  // 带范围的小数
  SELECTION,  // 选择项
  BOOL,  // 开关项
  LIST,  // 嵌套列表型
  NONE
}

export interface IPropertyConstructure {
  name: string;//属性名称
  displayName: string;//页面显示属性名称
  type: PropertyType;//属性类型:text|range|selection|(boolean)

  groupName: string;//分组名称
  index: number;//排序号
  isReadonly: boolean;

  value: object;//属性值

  //#region text 
  /**
  * （没有验证限制）
  * */
  //#endregion

  //#region range （验证）
  minValue: object;//最小值
  maxValue: object;//最大值
  //#endregion

  //#region selection|boolean 
  /**
   * （boolean类型转化为selection） （没有验证限制）
   * */
  displayStrs: Array<string>;//显示字符列表
  values: Array<object>;//实际值列表
  //#endregion

  //#region hirearchical list
  children: Array<any>;
  //#endregion
}