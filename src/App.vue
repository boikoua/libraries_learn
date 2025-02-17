<script setup>
import { ref } from 'vue';
import { normalizePageHash } from '@/utils/normalizePageHash';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './utils/constants';
import TheHeader from './components/TheHeader.vue';
import TheNavigation from './components/TheNavigation.vue';
import TheTimeline from './pages/TheTimeline.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';

// Текущая страница
const currentPage = ref(normalizePageHash());
</script>

<template>
  <TheHeader
    @go-to-timeline="currentPage = PAGE_TIMELINE"
    @go-to-progress="currentPage = PAGE_PROGRESS"
  />

  <main class="flex flex-col flex-grow">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" />

    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />

    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <footer class="sticky bottom-0 z-20 bg-white border-t">
    <TheNavigation :current-page="currentPage" @navigate="currentPage = $event" />
  </footer>
</template>

<style scoped></style>
