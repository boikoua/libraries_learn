<script setup>
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline';
import NavItem from './NavItem.vue';

// Все пункты для нижнего меню которые мы отрендерим в нижней навигации
const navItems = [
  {
    id: 1,
    title: 'timeline',
    icon: ClockIcon,
  },
  {
    id: 2,
    title: 'activities',
    icon: ListBulletIcon,
  },
  {
    id: 3,
    title: 'progress',
    icon: ChartBarIcon,
  },
];
</script>

<template>
  <nav>
    <ul class="flex items-center justify-around">
      <NavItem v-for="item in navItems" :key="item.id" :href="`#${item.title}`">
        <component :is="item.icon" class="h-6 w-6" />
        <span>{{ item.title }}</span>
      </NavItem>
    </ul>
  </nav>
</template>
