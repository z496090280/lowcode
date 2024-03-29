/*
 * @Author: lee
 * @Date: 2022-05-06 15:41:20
 * @LastEditTime: 2023-03-31 15:02:30
 */
import { IMaterial } from "@lowcode1024/shared/dist";

export const materialList: IMaterial[] = [
  {
    id: 1,
    type: "component",
    category: {
      name: "基础组件",
    },
    source: "/lc-image.1.0.0.umd.js",
    version: "0.0.1",
    name: "LcImage",
    title: "图片组件",
    thumbnail: "",
    data: [
      {
        source: "/lc-image.1.0.0.umd.js",
        version: "0.0.1",
      },
    ],
  },
  {
    id: 2,
    type: "component",
    category: {
      name: "基础组件",
    },
    source: "/lc-title.0.0.1.umd.js",
    version: "0.0.1",
    name: "LcTitle",
    title: "title",
    thumbnail: "",
    data: [
      {
        source: "/lc-title.0.0.1.umd.js",
        version: "0.0.1",
      },
    ],
  },
];

export const materialMap: { [key: string]: IMaterial } = materialList.reduce(
  (pre, item) => {
    pre[item.id] = item;
    return pre;
  },
  {}
);

export function getMaterialEditorProps(material: IMaterial) {
  return (window as any)[material.name]?.editorProps;
}

export function getMaterialRenderFun(material: IMaterial) {
  return (window as any)[material.name].render;
}

export function getMaterialDefaultProps(material: IMaterial) {
  const props = getMaterialEditorProps(material);
  if (!props) return {};
  return Object.keys(props).reduce((pre, key) => {
    pre[key] = props[key].defaultValue;
    return pre;
  }, {});
}
