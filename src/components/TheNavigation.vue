<script setup>
import { NAV_ITEMS } from '@/utils/constants';
import NavItem from './NavItem.vue';

defineProps({
  currentPage: {
    required: true,
    type: String,
    validate(currentPage) {
      return NAV_ITEMS.some((item) => currentPage === item.title);
    },
  },
});

const emit = defineEmits(['navigate']);
</script>

<template>
  <nav>
    <ul class="flex items-center justify-around">
      <NavItem
        v-for="item in NAV_ITEMS"
        :key="item.id"
        :href="`#${item.title}`"
        :class="{ 'bg-gray-200 pointer-events-none': item.title === currentPage }"
        @click="emit('navigate', item.title)"
      >
        <component :is="item.icon" class="h-6 w-6" />
        <span>{{ item.title }}</span>
      </NavItem>
    </ul>
  </nav>
</template>
