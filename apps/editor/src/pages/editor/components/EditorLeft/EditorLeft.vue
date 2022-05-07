<script  lang="ts" setup>
  import './EditorLeft.less'
  import MaterialBlock from '../MaterialBlock/MaterialBlock.vue'
  import { getMaterialDefaultProps, materialList } from '@/data'
  import { IMaterial, PageElement } from '../../../../../../../packages/shared/dist/index'
  import { useProjectStore } from '@/store'

  const projectStore = useProjectStore()
  
  const onclick =  (e: Event, item: IMaterial) => {
    console.log(item)
    const ele = PageElement.create()
    ele.materialId = item.id
    ele.materialVersion = item.version
    ele.props = getMaterialDefaultProps(item)
    projectStore.addElement(ele)
  }
</script>

<template>
  <div class="editor-left">
    <div v-for="item in materialList" :key="item.id" class="material">
      <MaterialBlock :title="item.title" @click="onclick($event, item)" />
    </div>
  </div>
</template>
