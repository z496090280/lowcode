<template>
  <BasicLayout>
    <router-view />
  </BasicLayout>
</template>

<script lang="ts">
  import BasicLayout from './components/BasicLayout/BasicLayout.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    components: {
      BasicLayout
    },
    setup() {}
  })

</script>