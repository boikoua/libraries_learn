<script setup>
import { reactive } from 'vue';
import TheForm from './components/TheForm.vue';
import TheHeader from './components/TheHeader.vue';
import TheTodoList from './components/TheTodoList.vue';

let todos = reactive([
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
    text: 'Reading',
    complete: false,
  },
]);

function addNewTodo(text) {
  if (!text.trim()) return;

  const newTodo = {
    id: todos.length + 1,
    text: text,
    complete: false,
  };

  todos.push(newTodo);
}
</script>

<template>
  <div class="w-1/3 m-auto">
    <TheHeader />

    <main>
      <TheForm :addTodo="addNewTodo" />

      <TheTodoList :todos="todos" />
    </main>
  </div>
</template>
