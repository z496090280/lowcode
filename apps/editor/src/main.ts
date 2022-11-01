/*
 * @Author: lee
 * @Date: 2022-05-03 21:41:49
 * @LastEditTime: 2022-11-01 20:14:24
 */
import "./main.less";
import { router } from "./router";
import { createPinia } from "pinia";
import app from "./app";

const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
