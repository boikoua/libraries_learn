<script setup>
import TheTodoItem from './TheTodoItem.vue';

defineProps({
  todos: Array,
});
</script>

<template>
  <div class="flex flex-col gap-5">
    <TheTodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>
