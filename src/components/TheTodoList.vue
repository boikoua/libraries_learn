<script setup>
import TheTodoItem from './TheTodoItem.vue';

defineProps({
  todos: Array,
  deleteTodo: Function,
  toggleComplete: Function,
});
</script>

<template>
  <div class="flex flex-col gap-5 mb-10">
    <TheTodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :delete-todo="deleteTodo"
      :toggle-complete="toggleComplete"
    />
  </div>
</template>
