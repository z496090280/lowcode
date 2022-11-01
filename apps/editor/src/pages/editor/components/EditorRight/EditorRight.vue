<!--
 * @Author: lee
 * @Date: 2022-05-05 11:20:39
 * @LastEditTime: 2022-11-01 21:07:47
-->
<script setup lang="ts">
import "./EditorRight.less";
import { useProjectStore } from "@/store";
import { getMaterialEditorProps, materialMap } from "@/data";
import { computed, watchEffect } from "vue";

const projectStore = useProjectStore();
const pageProps = computed(() => projectStore.currentElement !== undefined);
const loading = computed(
  () =>
    !projectStore.isLoaded(projectStore.currentElement.materialId)
);
const editorPros = computed(() => {
  if (projectStore.currentElement === undefined) {
    return {};
  }

  // 异步加载组件
  let props = getMaterialEditorProps(
    materialMap[projectStore.currentElement?.materialId]
  );

  return props;
});

const elementPros = computed(() => {
  if (projectStore.currentElement === undefined) {
    return undefined;
  }
  return projectStore.currentElement.props;
});

const onPropsChange = (e: Event, key: string) => {
  projectStore.changeElementProps({
    [key]: (e.target as HTMLInputElement).value,
  });
};
</script>

<template>
  <div class="editor-right">
    <div v-if="projectStore.currentElement === undefined">page</div>

    <div v-else-if="loading">loading...</div>

    <div v-else>
      <div v-for="key in Object.keys(editorPros)" :key="key">
        <input
          v-if="editorPros[key].type === 'number'"
          type="number"
          :value="editorPros[key].defaultValue"
          @change="onPropsChange($event, key)"
        />

        <input
          v-if="editorPros[key].type === 'string'"
          type="text"
          :value="editorPros[key].defaultValue"
          @change="onPropsChange($event, key)"
        />

        <input
          v-if="editorPros[key].type === 'color'"
          type="text"
          :value="editorPros[key].defaultValue"
          @change="onPropsChange($event, key)"
        />
      </div>
    </div>
  </div>
</template>
