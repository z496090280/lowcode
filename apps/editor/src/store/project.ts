/*
 * @Author: lee
 * @Date: 2022-05-07 15:20:48
 * @LastEditTime: 2022-12-17 21:22:12
 */
import app from "@/app";
import { getMaterialDefaultProps, getMaterialRenderFun } from "@/data";
import { loadMaterial } from "@/utils";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import {
  IElement,
  IMaterial,
  IProject,
  PageElement,
  Project,
} from "../../../../packages/shared/dist/index";

const p = Project.create();

export const useProjectStore = defineStore("project", () => {
  // console.log(p.getJson())
  const materials = ref<Record<string, IMaterial>>({});
  const project = ref<IProject>(p.getJson());

  const currentPageIndex = ref(0);

  const currentPage = computed(
    () => project.value.pages[currentPageIndex.value]
  );

  const currentPageElements = computed(
    () => project.value.pages[currentPageIndex.value].elements
  );

  const currentElementIndex = ref(0);
  const currentElementId = ref();

  const currentElement = computed(() => {
    if (currentElementId.value) {
      return p
        .getPageByIndex(currentPageIndex.value)
        .getElementById(currentElementId.value);
    } else {
      return currentPageElements[currentElementIndex.value];
    }
  });

  function setCurrentElement(id: string) {
    currentElementId.value = id;
  }

  function addElement(ele: PageElement) {
    currentElementId.value = ele.id;
    p.getPageByIndex(currentPageIndex.value).addElement(ele);
    project.value = p.getJson();
  }

  function changeElementProps(props: Record<string, any>) {
    const element = p
      .getPageByIndex(currentPageIndex.value)
      .getElementById(currentElement.value.id);
    element.props = {
      ...element.props,
      ...props,
    };
    project.value = p.getJson();
  }

  function changeElementStyle(style: Record<string, any>) {
    const element = p
      .getPageByIndex(currentPageIndex.value)
      .getElementById(currentElement.value.id);
    element.style = {
      ...element.style,
      ...style,
    };
    project.value = p.getJson();
  }

  function isLoaded(mid: number) {
    return materials.value[mid];
  }

  async function load(material: IMaterial) {
    if (isLoaded(material.id)) {
      return;
    }

    await loadMaterial(material);
    const renderFun = getMaterialRenderFun(material);
    app.component(material.name, renderFun);

    materials.value = {
      ...materials.value,
      [material.id]: material,
    };
    // 异步加载完需要手动添加props
    changeElementProps(getMaterialDefaultProps(material));
  }

  function saveProject() {
    const json = p.getJson();
    localStorage.setItem("__project", JSON.stringify(json));
  }

  return {
    project,
    currentPage,
    currentPageElements,
    currentElement,

    addElement,
    changeElementProps,
    changeElementStyle,
    setCurrentElement,

    load,
    isLoaded,

    saveProject,
  };
});
