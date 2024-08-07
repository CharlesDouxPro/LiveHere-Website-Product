import './assets/style.scss'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vue-good-table/dist/vue-good-table.css'
import CKEditor from '@ckeditor/ckeditor5-vue'

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
app.use(CKEditor)
app.use(PrimeVue)
app.mount('#app')
