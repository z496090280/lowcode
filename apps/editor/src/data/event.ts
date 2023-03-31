/*
 * @Author: lee
 * @Date: 2023-03-27 15:27:35
 * @LastEditTime: 2023-03-31 15:45:43
 */
import { TinyEmitter } from "tiny-emitter";
import { reactive } from "vue";

const globalEmitter = new TinyEmitter();
const win = window as any;
win.globalEmitter = globalEmitter;

globalEmitter.on("common:link", (args) => {
  console.log(args);
});

const editorEvents = reactive([
  {
    type: "common",
    events: [
      {
        name: "link",
        args: [
          {
            type: "string",
          },
        ],
      },
    ],
  },
  {
    type: "component",
    events: [],
  },
]);

export { globalEmitter, editorEvents };
