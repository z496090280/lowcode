/*
 * @Author: lee
 * @Date: 2022-05-03 23:24:50
 * @LastEditTime: 2022-10-22 15:28:54
 */
import { IPage, Page } from "./page";
export * from "./element";
export * from "./page";

export interface IProject {
  id: number;
  name: string;
  // type: string;
  description: string;
  pages: IPage[]
}

export class Project implements IProject {
  public static create(p?: IProject) {
    const project = new Project()

    if(p) {
      project.id = p.id
      project.name = p.name
      project.description = p.description
      project._pages = p.pages.map(page => Page.create(page))
    } else {
      project.addPage(Page.create())
    }
    return project
  }
  public id: number
  public name: string = 'New Project'
  public description: string = 'New Project description'
  private _pages: Page[] = []
  public get pages() {
    return this._pages.map(p => p.getJson())
  }

  constructor() {

  }

  public addPage(page: Page) {
    this._pages.push(page)
  }

  public getPageByIndex(index: number) {
    return this._pages[index]
  }

  public removePage(page: Page) {
    const index = this._pages.indexOf(page)
    if(index >= 0) {
      this._pages.splice(index, 1)
    }
  }

  public insertPage(index: number, page: Page) {
    this._pages.splice(index, 0, page)
  }

  public getJson(): IProject {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      pages: this._pages
    }
  }

}
