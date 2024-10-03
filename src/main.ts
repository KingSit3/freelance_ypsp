import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueCountdown from '@chenfengyuan/vue-countdown'

const app = createApp(App)

app.use(createPinia())
// @ts-ignore
app.component(VueCountdown.name, VueCountdown)
app.use(router)

app.mount('#app')
