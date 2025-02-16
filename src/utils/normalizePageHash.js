import { PAGE_TIMELINE } from './constants';

export function normalizePageHash(arr) {
  const hash = window.location.hash.slice(1);

  const condition = arr.some((item) => item.title === hash);

  if (condition) {
    return hash;
  }

  window.location.hash = PAGE_TIMELINE;

  return PAGE_TIMELINE;
}
