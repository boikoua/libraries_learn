<script setup>
import TheTodoItem from './TheTodoItem.vue';

defineProps({
  todos: Array,
  deleteTodo: Function,
});
</script>

<template>
  <div class="flex flex-col gap-5">
    <TheTodoItem v-for="todo in todos" :key="todo.id" :todo="todo" :delete-todo="deleteTodo" />
  </div>
</template>
