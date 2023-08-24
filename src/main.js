import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'
import 'bootstrap/dist/css/bootstrap.css'

//Antes de montar una aplicacion, se nesesita mandar/montar el router
createApp(App).use(router).mount('#app')
