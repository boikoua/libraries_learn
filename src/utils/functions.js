import { HOURS_IN_THE_DAY } from './constants';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants';

export function generateTimelineItems() {
  const timeLineItems = [];

  for (let hour = 0; hour < HOURS_IN_THE_DAY; hour++) {
    timeLineItems.push({ hour });
  }

  return timeLineItems;
}

export function normalizePageHash() {
  const hash = window.location.hash.slice(1);

  const condition = [PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].some(
    (item) => item.title === hash,
  );

  if (condition) {
    return hash;
  }

  window.location.hash = PAGE_TIMELINE;

  return PAGE_TIMELINE;
}
