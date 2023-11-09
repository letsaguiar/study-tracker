import '../node_modules/material-dashboard/assets/css/nucleo-icons.css'
import '../node_modules/material-dashboard/assets/css/nucleo-svg.css'
import '../node_modules/material-dashboard/assets/css/material-dashboard.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app')
