<script setup>
import TheForm from './components/TheForm.vue';
import TheHeader from './components/TheHeader.vue';
import TheTodoList from './components/TheTodoList.vue';
</script>

<template>
  <div class="w-1/3 m-auto">
    <TheHeader />

    <main>
      <TheForm />

      <TheTodoList />
    </main>
  </div>
</template>
