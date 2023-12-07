<script setup>
import { getList } from "@/auo-lib/storage"
import { useRoute } from "vue-router"
import { onBeforeMount, reactive } from "vue"

let todolist = reactive({})

const route = useRoute()
onBeforeMount(() => {
  const { params } = route
  todolist = getList(params.auo)
})
</script>

<template>
  <h1 class="text-3xl">{{ todolist.title }}</h1>
</template>
