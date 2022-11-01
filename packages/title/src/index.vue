<!--
 * @Author: lee
 * @Date: 2022-10-30 20:36:32
 * @LastEditTime: 2022-10-30 22:00:05
-->
<script setup lang="ts">
import { defineProps } from "vue";

const { title, color, size } = defineProps<{
  title: string;
  color: string;
  size: number;
}>();
</script>

<template>
  <div class="lc-title" :style="{ color: color, fontSize: `${size}px` }">
    {{ title }}
  </div>
</template>
