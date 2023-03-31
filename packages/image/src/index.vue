<!--
 * @Author: lee
 * @Date: 2023-03-01 16:32:06
 * @LastEditTime: 2023-03-27 20:46:41
-->
<script setup lang="ts">
import { defineProps } from "vue";

const { src, events } = defineProps<{
  src: string;
  events: Record<string, any[]>;
}>();

function onClick() {
  const win = window as any;
  win.globalEmitter.emit("common:link", events["common:link"]);
}
</script>

<template>
  <img :src="src" class="lc-image" @click="onClick" />
</template>
