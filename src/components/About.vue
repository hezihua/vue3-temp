<script setup lang="ts">
import { useCounterStore } from '@/store/count'
import Common from '@components/common.vue'
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useCounterStore()
</script>

<template>
 <div @click="store.increment()">about

  {{ store.count }}
  <Common />
 </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
