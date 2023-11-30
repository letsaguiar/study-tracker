import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './assets/css/notus.css';
import './assets/css/tailwind.css';
import '../node_modules/flowbite/dist/flowbite.min.js';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import router from './router';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router)

app.mount('#app');
