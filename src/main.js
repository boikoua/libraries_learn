import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';

createApp(App).mount('#app');

AOS.init({
  duration: 1000,
});
