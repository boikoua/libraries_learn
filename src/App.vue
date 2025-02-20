<script setup>
import { computed, onMounted, ref } from 'vue';
import { v4 as randomId } from 'uuid';
import TheForm from './components/TheForm.vue';
import TheHeader from './components/TheHeader.vue';
import TheTodoList from './components/TheTodoList.vue';
import TheActions from './components/TheActions.vue';

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

onMounted(() => {
  const savedTodos = localStorage.getItem('todos-on-track');

  if (savedTodos) {
    todos.value = JSON.parse(savedTodos);
  }
});

function addNewTodo(text) {
  if (!text.trim()) return;

  const newTodo = {
    id: randomId(),
    text: text,
    complete: false,
  };

  todos.value.push(newTodo);

  localStorage.setItem('todos-on-track', JSON.stringify(todos.value));
}

function deleteTodo(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id);

  localStorage.setItem('todos-on-track', JSON.stringify(todos.value));
}

function toggleComplete(id) {
  const todo = todos.value.find((todo) => todo.id === id);

  if (todo) {
    todo.complete = !todo.complete;
    localStorage.setItem('todos-on-track', JSON.stringify(todos.value));
  }
}

function deleteAllCompleteTodos() {
  todos.value = todos.value.filter((todo) => !todo.complete);
  localStorage.setItem('todos-on-track', JSON.stringify(todos.value));
}

function clearTodos() {
  todos.value = [];
  localStorage.setItem('todos-on-track', JSON.stringify(todos.value));
}

const completedTodos = computed(() => todos.value.filter((todo) => todo.complete).length);
</script>

<template>
  <div class="w-1/3 m-auto">
    <TheHeader />

    <main>
      <TheForm :addTodo="addNewTodo" />

      <TheActions :delete-all-complete-todos="deleteAllCompleteTodos" :clear-todos="clearTodos" />

      <TheTodoList :todos="todos" :delete-todo="deleteTodo" :toggle-complete="toggleComplete" />
    </main>

    <footer v-if="completedTodos">
      <h2 data-aos="fade-up" class="text-2xl text-white text-center">
        You have completed <span class="font-bold text-3xl">{{ completedTodos }}</span>
        {{ completedTodos === 1 ? 'todo' : 'todos' }}!
      </h2>
    </footer>
  </div>
</template>

<style>
@import 'aos/dist/aos.css';
</style>
