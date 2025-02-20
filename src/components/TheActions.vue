<script setup lang="ts">
import { ArchiveBoxXMarkIcon, ArrowPathIcon } from '@heroicons/vue/24/solid';
import BaseButton from './BaseButton.vue';

defineProps({
  deleteAllCompleteTodos: Function,
  clearTodos: Function,
});
</script>

<template>
  <div class="flex justify-center gap-5 mb-6">
    <BaseButton title="Clear all todos" :on-click="clearTodos">
      <ArrowPathIcon class="w-6 h-6" />
    </BaseButton>

    <BaseButton title="Delete all complete todos" :on-click="deleteAllCompleteTodos">
      <ArchiveBoxXMarkIcon class="w-6 h-6" />
    </BaseButton>
  </div>
</template>
