
export enum PropertyType {
  TEXT,
  RANGE_INTEGER,
  RANGE_DECIMAL,
  SELECTION,
  BOOL,
  NONE
}

export interface IPropertyConstructure {
  name: string;//属性名称
  displayName: string;//页面显示属性名称
  type: PropertyType;//属性类型:text|range|selection|(boolean)

  groupName: string;//分组名称
  index: number;//排序号

  value: object;//属性值

  //#region text 
  /**
  * （没有验证限制）
  * */
  //#region 

  //#region range （验证）
  minValue: object;//最小值
  maxValue: object;//最大值
  //#region 

  //#region selection|boolean 
  /**
   * （boolean类型转化为selection） （没有验证限制）
   * */
  displayStrs: Array<string>;//显示字符列表
  values: Array<object>;//实际值列表
  //#region

}