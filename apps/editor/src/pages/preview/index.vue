<!--
 * @Author: lee
 * @Date: 2022-12-17 21:22:54
 * @LastEditTime: 2022-12-17 22:24:01
-->
<template>
  <div v-if="loading">loading...</div>
  <div class="page" v-else>
    <div
      v-for="item in pages[0]._elements"
      :key="item.id"
      :style="{
        position: 'absolute',
        left: item.style.left + 'px',
        top: item.style.top + 'px',
        width: item.style.width + 'px',
        height: item.style.height + 'px',
      }"
    >
      <component :is="materialMap[item.materialId].name" v-bind="item.props" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { materialMap } from "@/data";
import { useMaterial } from "./material";

const { loading, pages } = useMaterial();
console.log(pages);
// 组件是否加载 及 刷新时加载
</script>

<style lang="less" scoped>
.page {
  position: relative;
  width: 375px;
  height: 667px;
  margin: 0 auto;
}
</style>
