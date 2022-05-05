<template>
  <div class="editor-layout">
    <div class="editor-layout-left">
      <EditorLeft />
    </div>
    <div class="editor-layout-content">
      <EditorContent /> 
    </div>
    <div class="editor-layout-right">
      <EditorRight />
    </div>
  </div>
</template>

<script  lang="ts">
  import { defineComponent } from 'vue'
  import EditorLeft from '../EditorLeft/EditorLeft.vue'
  import EditorRight from '../EditorRight/EditorRight.vue'
  import EditorContent from '../EditorContent/EditorContent.vue'
  import './EditorLayout.less'

  export default defineComponent({
    name: 'EditorLayout',
    components: {
      EditorLeft,
      EditorRight,
      EditorContent
    },
    setup() {}
  })
</script>
