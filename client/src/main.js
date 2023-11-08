import '../node_modules/material-dashboard/assets/css/nucleo-icons.css'
import '../node_modules/material-dashboard/assets/css/nucleo-svg.css'
import '../node_modules/material-dashboard/assets/css/material-dashboard.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
