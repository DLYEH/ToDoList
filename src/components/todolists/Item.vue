<script setup>
import { defineProps, defineEmits } from "vue"

defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(["remove-todo","finish-todo"])

const removeTodo = (e) => {
  const btn = e.currentTarget
  const id = btn?.dataset.todoid
  if (id) {
    emits("remove-todo", id)
  }
}

const finishTodo = (e) => {
  const btn = e.currentTarget
  const id = btn?.dataset.todoid
  if (id) {
    emits("finish-todo", id)
  }
}
</script>

<template>

    <tr>
      <td class="text-center"><button :data-todoid="todo.id" @click="removeTodo" class="btn btn-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path
          d="M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zM143 239c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
        />
      </svg>
    </button></td>
    <td v-if="todo.priority === 'High'" class="text-center">
      <div class="tooltip" data-tip="高">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="High" viewBox="0 0 14 14" width="32" height="32">
          <path fill="#f44336" d="M6.2244898 12.67346931L1.3265307 7.7755102c-.43537415-.43537414-.43537415-1.11564624 0-1.55102039l4.8979591-4.89795913c.43537414-.43537414 1.11564624-.43537414 1.55102039 0l4.89795912 4.89795912c.43537414.43537415.43537414 1.11564625 0 1.5510204L7.7755102 12.6734693c-.43537415.43537415-1.14285713.43537415-1.5510204 0z"/><path fill="#fff" d="M6.33333334 9.38095235c0-.08163265.02721089-.1632653.05442177-.24489796.02721089-.08163265.08163265-.13605442.13605442-.19047619.05442177-.05442176.13605442-.10884353.21768707-.13605442.08163266-.02721088.1632653-.05442176.27210884-.05442176.10884354 0 .1904762.02721088.27210884.05442176.08163266.02721089.1632653.08163266.21768708.13605442.05442176.05442177.10884353.10884354.13605442.1904762.02721088.08163264.05442176.1632653.05442176.24489795s-.02721088.1632653-.05442176.24489795c-.02721089.08163266-.08163266.13605442-.13605442.1904762-.05442177.05442176-.13605442.10884353-.21768708.13605441-.08163265.02721089-.1632653.05442177-.27210884.05442177-.10884353 0-.19047618-.02721088-.27210884-.05442177-.08163265-.02721088-.13605442-.08163265-.21768707-.13605442-.05442177-.05442177-.10884353-.10884353-.13605442-.19047619-.02721088-.08163265-.05442177-.13605442-.05442177-.24489795zm1.14285713-1.25170067h-.97959182L6.36054423 4.0204082h1.25170066l-.13605442 4.10884348z"/></svg>
      </div>
    </td>
    <td v-else class="text-center">
      <div class="tooltip" data-tip="低">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Low" viewBox="0 0 14 14" width="32" height="32">
        <path fill="#4caf50" d="M6.2244898 12.67346931L1.3265307 7.7755102c-.43537415-.43537414-.43537415-1.11564624 0-1.55102039l4.8979591-4.89795913c.43537414-.43537414 1.11564624-.43537414 1.55102039 0l4.89795912 4.89795912c.43537414.43537415.43537414 1.11564625 0 1.5510204L7.7755102 12.6734693c-.43537415.43537415-1.14285713.43537415-1.5510204 0z"/><g fill="#ffeb3b"><path d="M6.98639456 9.57142854L5.08163268 7.28571428h3.80952376z"/><path d="M6.44217688 4.51020411h1.08843536v3.34693873H6.44217688z"/></g></svg>
        </div>
    </td>
      <td class="text-xl">
        <router-link :to="{ name: 'detail', params: { auo: todo.id } }">
        {{ todo.title }} 
        </router-link>
      </td>
      <td class="text-center" v-if="todo.finish === 'YES'">
        <div class="tooltip" data-tip="完成">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-check-box-outline" width="24" height="24" viewBox="0 0 24 24"><path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9" /></svg>
        </div>
      </td> 
      <td class="text-center" v-else>
        <button :data-todoid="todo.id" @click="finishTodo" class="btn btn-md">
        <div class="tooltip" data-tip="未完成">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5ZM5 4C4.44772 4 4 4.44772 4 5V15C4 15.5523 4.44772 16 5 16H15C15.5523 16 16 15.5523 16 15V5C16 4.44772 15.5523 4 15 4H5Z" fill="#212121"/>
          </svg>
          </div>
        </button>
      </td> 
    </tr>
</template>
