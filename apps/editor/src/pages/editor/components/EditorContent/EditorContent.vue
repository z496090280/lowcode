<script setup lang="ts">
  import './EditorContent.less'
  import { useProjectStore } from '@/store'
  import { materialMap } from '@/data'
import { watchEffect } from 'vue';

  const projectStore = useProjectStore()
  watchEffect(() => {
    console.log(projectStore.currentPageElements)
  })
</script>
<template>
  <div class="editor-content">
    <div v-for="item in projectStore.currentPageElements" :key="item.id">
      <component :is="materialMap[item.materialId].name" v-bind="item.props" />
    </div>
    
  </div>
</template>