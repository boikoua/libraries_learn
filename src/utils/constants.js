import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline';

export const HOURS_IN_THE_DAY = 24;

export const PAGE_TIMELINE = 'timeline';
export const PAGE_ACTIVITIES = 'activities';
export const PAGE_PROGRESS = 'progress';

// Все пункты для нижнего меню которые мы отрендерим в нижней навигации
export const NAV_ITEMS = [
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

// Значение всех вариантов для выпадающего списка
export const OPTIONS_VALUES = [
  {
    value: 1,
    label: 'Coding',
  },
  {
    value: 2,
    label: 'Reading',
  },
  {
    value: 3,
    label: 'Training',
  },
];
