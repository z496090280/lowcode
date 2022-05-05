<template>
  <div class="basic-layout">
    <div class="basic-layout-header">
      <BasicHeader />
    </div>

    <div class="basic-layout-content">
      <slot></slot>
    </div>
  </div>
  
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import BasicHeader from '../BasicHeader/BasicHeader.vue'
  import './BasicLayout.less'

  export default defineComponent({
    name: 'BasicLayout',
    components: {
      BasicHeader
    },
    setup() {}
  })

</script>
