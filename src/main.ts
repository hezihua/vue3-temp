import { createApp } from 'vue'
import './style.css'
import { test2 } from '@utils/request'

import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index.ts'

const app = createApp(App)
const pinia = createPinia()

test2()

app.use(router)
app.use(pinia)

app.mount('#app')
