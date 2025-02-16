<script setup>
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

// Все пункты для нижнего меню которые мы отрендерим в нижней навигации
const navItems = ['timeline', 'activities', 'progress']
</script>

<template>
  <nav>
    <ul class="flex items-center justify-around">
      <li v-for="page in navItems" :key="page" class="flex-1">
        <a
          :href="`#${page}`"
          class="flex flex-col justify-center items-center border p-2 text-xs capitalize"
        >
          <ClockIcon v-if="page === 'timeline'" class="h-6 w-6" />
          <ListBulletIcon v-else-if="page === 'activities'" class="h-6 w-6" />
          <ChartBarIcon v-else class="h-6 w-6" />
          <span>{{ page }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
