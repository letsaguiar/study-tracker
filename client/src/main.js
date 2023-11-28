import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './assets/css/notus.css';
import './assets/css/tailwind.css';

import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

const app = createApp(App);

app.use(router)

app.mount('#app');