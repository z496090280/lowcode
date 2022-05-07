<script setup  lang="ts">
  import './EditorRight.less'
  import { useProjectStore } from '@/store'
import { getMaterialEditorProps, materialMap } from '@/data';
import { computed, watchEffect } from 'vue';

  const projectStore = useProjectStore()
  const editorPros = computed(() => {
    if(projectStore.currentElement === undefined) {
      return undefined
    }
    return getMaterialEditorProps(materialMap[projectStore.currentElement?.materialId])
  })

  const elementPros = computed(() => {
    if(projectStore.currentElement === undefined) {
      return undefined
    }
    return projectStore.currentElement.props
  })

  const onPropsChange = (e: Event) => {
    projectStore.changeElementProps({
      src: (e.target as HTMLInputElement).value
    })
  }
</script>

<template>
  <div class="editor-right">
    <input type="text" v-if="projectStore.currentElement !== undefined" :value="elementPros.src" @change="onPropsChange($event)">
  </div>
</template>


