<template>
  <div class="material-block">
    {{title}}
  </div>
</template>

<script lang="ts">
export default { 
  name: 'MaterialBlock'
}
</script>

<script setup  lang="ts">
  import './MaterialBlock.less'

  interface IMaterialBlock {
    title: string;
  }
  const { title } = defineProps<IMaterialBlock>()
</script>
