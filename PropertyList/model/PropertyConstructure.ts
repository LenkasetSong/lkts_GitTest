import { PropertyType, IPropertyConstructure } from "../interface/IPropertyConstructure";

export class PropertyConstructure implements IPropertyConstructure {
  name: string = "";
  displayName: string = "";
  type: PropertyType = PropertyType.NONE;
  groupName: string = "";
  index: number = -1;
  value: any = {};
  minValue: any = {};
  maxValue: any = {};
  displayStrs: string[] = [];
  values: any[] = [];

  constructor(name: string, displayName: string, groupName: string, index: number) {
    this.name = name;
    this.displayName = displayName;
    this.groupName = groupName;
    this.index = index;
  }

  public setText(value: string): PropertyConstructure {
    this.type = PropertyType.TEXT;
    this.value = value;
    return this;
  }

  public setRange(value: number, min: number, max: number, isInteger: boolean = false): PropertyConstructure {
    this.type = isInteger ? PropertyType.RANGE_INTEGER : PropertyType.RANGE_DECIMAL;
    console.log(this.type)
    this.value = value;
    this.minValue = min;
    this.maxValue = max;
    return this;
  }

  public setSelection(value: string, strs: string[], vals: any[]): PropertyConstructure {
    this.type = PropertyType.SELECTION;
    this.value = value;
    this.displayStrs = strs;
    this.values = vals;
    return this;
  }

  public setBoolean(value: boolean, boolStrs: string[], boolVals: boolean[]): PropertyConstructure {
    this.type = PropertyType.BOOL;
    this.value = value;
    this.displayStrs = boolStrs;
    this.values = boolVals;
    return this;
  }
}

