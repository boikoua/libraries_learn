import { HOURS_IN_THE_DAY } from './constants';

export function generateTimelineItems() {
  const timeLineItems = [];

  for (let hour = 0; hour < HOURS_IN_THE_DAY; hour++) {
    timeLineItems.push({ hour });
  }

  return timeLineItems;
}
