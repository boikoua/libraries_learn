<script setup>
defineProps({
  onClick: Function,
});
</script>

<template>
  <button
    title="$attrs"
    @click="onClick"
    class="bg-white rounded-lg p-4 text-black transition hover:shadow-2xl"
  >
    <slot></slot>
  </button>
</template>
