<script setup>
import { ref } from 'vue';
import TheForm from './components/TheForm.vue';
import TheHeader from './components/TheHeader.vue';
import TheTodoList from './components/TheTodoList.vue';

const todos = ref([
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
    id: todos.value.length + 1,
    text: text,
    complete: false,
  };

  todos.value.push(newTodo);
}

function deleteTodo(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}

function toggleComplete(id) {
  const todo = todos.value.find((todo) => todo.id === id);

  if (todo) {
    todo.complete = !todo.complete;
  }
}
</script>

<template>
  <div class="w-1/3 m-auto">
    <TheHeader />

    <main>
      <TheForm :addTodo="addNewTodo" />

      <TheTodoList :todos="todos" :delete-todo="deleteTodo" :toggle-complete="toggleComplete" />
    </main>
  </div>
</template>
