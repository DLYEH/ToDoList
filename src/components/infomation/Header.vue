<script setup>
import { defineProps, computed } from "vue"

const props = defineProps({
  todolists: {
    type: Array,
    required: true,
    default: [],
  },
})

const todoCount = computed(() => {
  return props.todolists.filter((todo) => todo.title.length > 2).length
})
</script>

<template>
  <h2 class="text-xl" v-if="todolists.length == 0">目前無任何資料</h2>
  <h2 class="text-xl" v-else>目前共有 {{ todoCount }} 條待辦事項</h2>
</template>
