<script setup>
import { ref, defineEmits } from "vue"

const todoName = ref("")
const selected = ref("")

const emits = defineEmits(["add-todo"])

const addTodo = () => {
  emits("add-todo", todoName.value,selected.value,"NO")
  todoName.value = ""
  selected.value = ""
}
</script>

<template>
  <div class="flex items-center gap-2 mt-4">
    待辦事項:
    <input
      v-model.trim="todoName"
      @keydown.enter="addTodo"
      type="text"
      class="w-3/5 input input-bordered"
    />
    優先性:
    <select v-model="selected" class="w-24 input input-bordered">
    <option disabled value=""></option>
    <option value="High">高</option>
    <option value="Low">低</option>
    </select>
    <button @click="addTodo" class="btn btn-primary">新增</button>
  </div>
</template>
