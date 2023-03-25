<!--
 * @Author: lee
 * @Date: 2022-05-05 11:23:38
 * @LastEditTime: 2023-03-25 15:01:47
-->
<script setup lang="ts">
import "./EditorContent.less";
import { useProjectStore } from "@/store";
import { materialMap } from "@/data";
import { onMounted, ref, watchEffect } from "vue";
import VueDragResize from "vue-drag-resize-next";
import "vue-drag-resize-next/lib/style.css";
import { useRouter } from "vue-router";

const projectStore = useProjectStore();
const router = useRouter();
const pageRef = ref<HTMLElement>();
let pageWidth = 0;
let pageHeight = 0;
watchEffect(() => {
  console.log(projectStore.currentPageElements);
});
onMounted(() => {
  if (pageRef.value) {
    pageWidth = pageRef.value.offsetWidth;
    pageHeight = pageRef.value.offsetHeight;
  }
});
function onDragEnd(ev: any) {
  const { x, y, ...rest } = ev;

  const left = Math.min(Math.max(x, 0), pageWidth - rest.width);
  const top = Math.min(Math.max(y, 0), pageHeight - rest.height);
  console.log(left, top, pageWidth, pageHeight);
  projectStore.changeElementStyle({
    left,
    top,
    ...rest,
  });
}

function onSave() {
  projectStore.saveProject();
}
function onPreview() {
  router.push("/preview");
}
function addPage() {
  projectStore.addPage();
}
function onClickPage(index) {
  projectStore.setCurrentPageIndex(index);
}
function onClickElement(id: string) {
  projectStore.setCurrentElement(id);
}
</script>
<template>
  <div class="editor-content">
    <div class="editor-content-header">
      <button @click="onSave">保存</button>
      <button @click="onPreview">预览</button>
    </div>

    <div class="editor-content-editor">
      <div class="editor-content-editor-pages">
        <p>页面列表</p>
        <div
          class="page"
          v-for="(item, index) in projectStore.project.pages"
          :key="index"
          :class="{ active: projectStore.currentPageIndex === index }"
          @click="onClickPage(index)"
        >
          {{ item.name }}
        </div>
        <div class="addPage" @click="addPage">添加页面</div>
      </div>

      <div class="editor-content-editor-elements">
        <p>页面元素列表</p>
        <div
          class="element"
          v-for="item in projectStore.currentPage.elements"
          :key="item.id"
          :class="{ active: projectStore.currentElementId === item.id }"
          @click="onClickElement(item.id)"
        >
          {{ item.name }}
        </div>
      </div>

      <div class="editor-content-editor-page" ref="pageRef">
        <div v-for="item in projectStore.currentPageElements" :key="item.id">
          <VueDragResize
            :active="projectStore.currentElement?.id === item.id"
            :x="item.style.left || 0"
            :y="item.style.top || 0"
            :width="item.style.width"
            :height="item.style.height"
            @dragging="onDragEnd"
            @resizing="onDragEnd"
            :immediate="true"
            @click="projectStore.setCurrentElement(item.id)"
            :rotatable="false"
            ><component
              v-if="projectStore.isLoaded(item.materialId)"
              :is="materialMap[item.materialId].name"
              v-bind="item.props"
            />
            <div v-else>loading</div>
          </VueDragResize>
        </div>
      </div>
    </div>
  </div>
</template>
