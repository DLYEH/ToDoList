<script setup>
import { v4 as uuid } from "uuid"
import { getLists, saveLists } from "@/auo-lib/storage"
import { reactive, onBeforeMount } from "vue"
import Header from "@/components/infomation/Header.vue"
import TodoItem from "@/components/todolists/Item.vue"
import AddTodoForm from "@/components/forms/AddTodo.vue"

const todolists = reactive([])

const removeTodo = (id) => {
  if (id) {
    const todoIndex = todolists.findIndex((todo) => todo.id == id)

    if (todoIndex >= 0) {
      todolists.splice(todoIndex, 1)
      saveLists(todolists)
    }
  }
}

const finishTodo = (id) => {
  if (id) {
    const todoIndex = todolists.findIndex((todo) => todo.id == id)

    if (todoIndex >= 0) {
      console.log(todolists[todoIndex])
      todolists[todoIndex].finish = "YES"
      saveLists(todolists)
    }
  }
}

const addTodo = (todoName,selected,sfinish) => {
  if (todoName != "" && selected != "") {
    const todo = {
      id: uuid(),
      title: todoName,
      priority: selected,
      finish: sfinish,
    }

    todolists.unshift(todo)

    // save
    saveLists(todolists)
  }
}

onBeforeMount(() => {
  const data = getLists()
  if (data) {
    todolists.push(...data)
  }
})
</script>

<template>
  <AddTodoForm @add-todo="addTodo" />

  <div class="divider"></div>
  <div>
    <Header :todolists="todolists" />
    <table class="table">
    <thead>
    <tr>
      <th class="w-20 text-center text-xl">刪除</th>
      <th class="w-20 text-center text-xl">優先性</th>
      <th class="text-center text-xl">待辦事項</th>
      <th class="w-20 text-center text-xl">完成</th>
    </tr>
    </thead>
    <tbody>
      <TodoItem @remove-todo="removeTodo" @finish-todo="finishTodo" v-for="todo in todolists" :todo="todo" />
    </tbody>
    </table>
  </div>
</template>

<style scoped>
.title {
  @apply text-slate-800 text-5xl;
}
</style>
