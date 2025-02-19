<script setup>
import { ClipboardIcon, TrashIcon, CheckCircleIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  todo: Object,
});

const { text, complete } = props.todo;
</script>

<template>
  <article class="flex justify-between items-center w-full py-3 px-6 bg-white rounded-lg">
    <div class="flex items-center gap-3">
      <ClipboardIcon class="w-7 h-7" />
      <p class="text-2xl">{{ text }}</p>
    </div>

    <div class="flex gap-3">
      <TrashIcon class="w-7 h-7 cursor-pointer transition hover:text-red-600" />
      <CheckCircleIcon
        :class="[
          'w-7 h-7 cursor-pointer transition hover:text-green-500',
          complete ? 'text-green-500' : '',
        ]"
      />
    </div>
  </article>
</template>
