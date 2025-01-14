import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { translate } from '@/locales/translation';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$translate = translate;

app.use(createPinia())
app.use(router)

app.mount('#app')
