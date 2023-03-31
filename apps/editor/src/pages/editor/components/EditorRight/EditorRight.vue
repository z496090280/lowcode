<!--
 * @Author: lee
 * @Date: 2022-05-05 11:20:39
 * @LastEditTime: 2023-03-31 16:12:38
-->
<script setup lang="ts">
import "./EditorRight.less";
import { useProjectStore, useEventsStore } from "@/store";
import { getMaterialEditorProps, materialMap } from "@/data";
import { computed, watchEffect } from "vue";
import { editorEvents } from "@/data/event";

const projectStore = useProjectStore();
const eventsStore = useEventsStore();

const pageProps = computed(() => projectStore.currentElement !== undefined);
const loading = computed(
  () => !projectStore.isLoaded(projectStore.currentElement.materialId)
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

function onChangePage(e: Event) {
  projectStore.setPageName((e.target as HTMLInputElement).value);
}

function onSave() {
  eventsStore.saveEvent(
    projectStore.currentPageIndex,
    projectStore.currentElementId
  );
}
function onChangeArgs(e: Event, index: number) {
  const ev = e.target as HTMLInputElement;
  eventsStore.changeArgsValues(ev.value, index);
}
</script>

<template>
  <div class="editor-right">
    <div v-if="projectStore.currentElement === undefined">
      <input
        type="text"
        @change="($event) => onChangePage($event)"
        :value="projectStore.currentPage.name"
      />
    </div>

    <div v-else-if="loading">loading...</div>

    <div v-else>
      <div v-for="key in Object.keys(editorPros)" :key="key">
        <input
          v-if="editorPros[key].type === 'number'"
          type="number"
          :value="editorPros[key].defaultValue"
          @input="onPropsChange($event, key)"
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

      <div>
        <select
          :value="eventsStore.currentType"
          @change="e => eventsStore.changeType((e.target as any).value)"
        >
          <option
            v-for="item in editorEvents"
            :key="item.type"
            :value="item.type"
          >
            {{ item.type }}
          </option>
        </select>

        <select>
          <option v-for="item in eventsStore.currentEvents" :key="item.name">
            {{ item.name }}
          </option>
        </select>

        <div v-if="eventsStore.currentEventArgs">
          <div v-for="(item, key) in eventsStore.currentEventArgs" :key="key">
            <input @input="($event) => onChangeArgs($event, key)" />
          </div>
        </div>

        <div>
          <button @click="onSave">save</button>
        </div>
      </div>
    </div>
  </div>
</template>
