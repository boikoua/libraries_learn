<script setup>
import { ClipboardIcon, TrashIcon, CheckCircleIcon } from '@heroicons/vue/24/solid';

defineProps({
  todo: Object,
  deleteTodo: Function,
  toggleComplete: Function,
});
</script>

<template>
  <article
    data-aos="fade-left"
    class="flex justify-between items-center w-full py-3 px-6 bg-white rounded-lg shadow-2xl"
  >
    <div class="flex items-center gap-3">
      <ClipboardIcon class="w-7 h-7" />
      <p class="text-2xl">{{ todo.text }}</p>
    </div>

    <div class="flex gap-3">
      <TrashIcon
        class="w-7 h-7 cursor-pointer transition hover:text-red-600"
        @click="deleteTodo(todo.id)"
      />
      <CheckCircleIcon
        :class="[
          'w-7 h-7 cursor-pointer transition hover:text-green-500',
          todo.complete ? 'text-green-500' : 'text-gray-400',
        ]"
        @click="toggleComplete(todo.id)"
      />
    </div>
  </article>
</template>
