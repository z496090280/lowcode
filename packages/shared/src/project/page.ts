/*
 * @Author: lee
 * @Date: 2022-10-22 15:18:13
 * @LastEditTime: 2022-10-22 15:26:39
 */
import { IElement, PageElement } from "./element";

export interface IPage {
  // 名称
  name: string;
  // 描述
  description: string;
  // 元素
  elements: IElement[]
}
export class Page implements IPage {
  public static create(p?: IPage) {
    const page = new Page()
    if(p) {
      page.name = p.name
      page.description = p.description
      page._elements = p.elements.map(element => PageElement.create(element))
    }
    return page
  }
  public name: string = 'New Project'
  public description: string = 'New Project description'
  private _elements: PageElement[] = []
  public get elements() {
    return this._elements.map(p => p.getJson())
  }

  constructor() {

  }

  public addElement(element: PageElement) {
    this._elements.push(element)
  }

  public getElementById(id: string) {
    return this._elements.find(e => e.id === id)
  }

  public removeElement(element: PageElement) {
    const index = this._elements.indexOf(element)
    if(index >= 0) {
      this._elements.splice(index, 1)
    }
  }

  public insertElement(index: number, element: PageElement) {
    this._elements.splice(index, 0, element)
  }

  public getJson(): IPage {
    return {
      name: this.name,
      description: this.description,
      elements: this._elements
    }
  }
}