<script setup>
const props = defineProps(['timelineItems']);

import TimelineItem from '@/components/TimelineItem.vue';
</script>

<template>
  <div class="mt-10">
    <ul>
      <TimelineItem
        v-for="timelineItem in props.timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>
