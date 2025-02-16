<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <li class="flex-1">
    <a
      v-bind="$attrs"
      class="flex flex-col justify-center items-center border p-2 text-xs capitalize"
    >
      <slot></slot>
    </a>
  </li>
</template>
