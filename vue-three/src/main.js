import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import.meta.env.NODE_ENV = 'production'
console.log(import.meta.env)

createApp(App).mount('#app')
