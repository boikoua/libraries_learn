<script setup>
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './../utils/constants';
import NavItem from './NavItem.vue';

defineProps(['currentPage']);

const emit = defineEmits(['navigate']);

// Все пункты для нижнего меню которые мы отрендерим в нижней навигации
const navItems = [
  {
    id: 1,
    title: PAGE_TIMELINE,
    icon: ClockIcon,
  },
  {
    id: 2,
    title: PAGE_ACTIVITIES,
    icon: ListBulletIcon,
  },
  {
    id: 3,
    title: PAGE_PROGRESS,
    icon: ChartBarIcon,
  },
];
</script>

<template>
  <nav>
    <ul class="flex items-center justify-around">
      <NavItem
        v-for="item in navItems"
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
