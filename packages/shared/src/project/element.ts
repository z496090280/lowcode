/*
 * @Author: lee
 * @Date: 2022-10-22 15:18:23
 * @LastEditTime: 2022-10-22 15:29:58
 */

import { uuid } from "../utils";

export interface IElementStyle {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  zIndex?: number;
}

export interface IElement {
  // 元素uid
  id: string;
  name: string;
  materialId: number;
  materialVersion: string;
  style: IElementStyle;
  props: Record<string, any>;
}

export class PageElement implements IElement {
  public static create(e?: IElement) {
    const element = new PageElement()
    if(e) {
      element.id = e.id
      element.name = e.name
      element.materialId = e.materialId
      element.materialVersion = e.materialVersion
      element.style = e.style
      element.props = e.props
    }
    return element
  }
  public id: string = uuid()
  public name: string = 'New Element'
  public materialId: number
  public materialVersion: string
  public style: IElementStyle = {}
  public props: Record<string, any> = {}

  constructor() {}

  public getJson(): IElement {
    return {
      id: this.id,
      name: this.name,
      materialId: this.materialId,
      materialVersion: this.materialVersion,
      style: this.style,
      props: this.props
    }
  }
}