<!--
 * @Author: lee
 * @Date: 2022-05-05 11:23:38
 * @LastEditTime: 2022-10-22 23:13:06
-->
<script setup lang="ts">
import "./EditorContent.less";
import { useProjectStore } from "@/store";
import { materialMap } from "@/data";
import { watchEffect } from "vue";
import VueDragResize from "vue-drag-resize-next";
import 'vue-drag-resize-next/lib/style.css'

const projectStore = useProjectStore();
watchEffect(() => {
  console.log(projectStore.currentPageElements);
});
function onDragEnd (ev: any) {
  const { x, y, ...rest } = ev;
  const parentContainer = document.querySelector('.editor-content');
  
  const valueX = Math.max(x, 0) && Math.min(x, parentContainer.clientWidth - rest.width);
  const valueY = Math.max(y, 0) && Math.min(y, parentContainer.clientHeight - rest.height);
  projectStore.changeElementStyle({
    left: valueX,
    top: valueY,
    ...rest
  })
}

</script>
<template>
  <div class="editor-content">
    <div v-for="item in projectStore.currentPageElements" :key="item.id">
      <VueDragResize
        :active="projectStore.currentElement?.id === item.id"
        :x="item.style.left || 0"
        :y="item.style.top || 0"
        :width="item.style.width"
        :height="item.style.height"
        @drag-end="onDragEnd"
        @resize-end="onDragEnd"
        @click="projectStore.setCurrentElement(item.id)"
        :rotatable="false"
        ><component :is="materialMap[item.materialId].name" v-bind="item.props"
      /></VueDragResize>
    </div>
  </div>
</template>
