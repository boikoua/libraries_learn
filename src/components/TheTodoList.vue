<script setup>
import TheTodoItem from './TheTodoItem.vue';

const todos = [
  {
    id: 1,
    text: 'Drink Coffee',
    complete: false,
  },
  {
    id: 2,
    text: 'Coding my app',
    complete: true,
  },
  {
    id: 3,
    text: 'Readind',
    complete: false,
  },
];
</script>

<template>
  <div class="flex flex-col gap-5">
    <TheTodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>
