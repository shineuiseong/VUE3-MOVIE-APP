import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(router).use(store).mount('#app')
