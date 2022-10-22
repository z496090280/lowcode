/*
 * @Author: lee
 * @Date: 2022-05-07 15:20:48
 * @LastEditTime: 2022-10-23 00:39:42
 */
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { IElement, IProject, PageElement, Project } from '../../../../packages/shared/dist/index'

const p = Project.create()

export const useProjectStore = defineStore('project', () => {
  // console.log(p.getJson())
  const project = ref<IProject>(p.getJson())

  const currentPageIndex = ref(0)

  const currentPage = computed(
    () => project.value.pages[currentPageIndex.value]
  )

  const currentPageElements = computed(
    () => project.value.pages[currentPageIndex.value].elements
  )

  const currentElementIndex = ref(0)
  const currentElementId = ref()

  const currentElement = computed(() => {
    if(currentElementId.value) {
      return p.getPageByIndex(currentPageIndex.value).getElementById(currentElementId.value)
    } else {
      return currentPageElements[currentElementIndex.value]
    }
  })

  function setCurrentElement(id: string) {
    currentElementId.value = id;
  }

  function addElement(ele: PageElement) {
    currentElementId.value = ele.id;
    p.getPageByIndex(currentPageIndex.value).addElement(ele)
    project.value = p.getJson()
  }

  function changeElementProps(props: Record<string, any>) {
    const element = p.getPageByIndex(currentPageIndex.value).getElementById(currentElement.value.id)
    element.props = {
      ...element.props,
      ...props
    }
    project.value = p.getJson()
  }

  function changeElementStyle(style: Record<string, any>) {
    const element = p.getPageByIndex(currentPageIndex.value).getElementById(currentElement.value.id)
    element.style = {
      ...element.style,
      ...style
    }
    project.value = p.getJson()
  }

  return {
    project,
    currentPage,
    currentPageElements,
    currentElement,
    
    addElement,
    changeElementProps,
    changeElementStyle,
    setCurrentElement
  }
})