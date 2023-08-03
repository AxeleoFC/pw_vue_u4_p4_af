import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'

//Antes de montar una aplicacion, se nesesita mandar/montar el router
createApp(App).use(router).mount('#app')
