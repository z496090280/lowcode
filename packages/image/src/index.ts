/*
 * @Author: lee
 * @Date: 2022-05-04 20:03:05
 * @LastEditTime: 2023-03-31 15:36:06
 */
import App from "./index.vue";
import "./index.css";

export default {
  render: App,
  editorProps: {
    src: {
      type: "string",
      defaultValue:
        "https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF",
    },
  },
};
