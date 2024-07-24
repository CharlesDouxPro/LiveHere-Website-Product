import './assets/style.scss'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('PrimeButton', Button)
app.component('InputText', InputText)

app.use(createPinia())
app.use(PrimeVue, {
  unstyled: true
})
app.use(router)

app.mount('#app')
