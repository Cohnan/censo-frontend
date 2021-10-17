import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // La variable router se está exportando del index.js... también sirve ./router/index

createApp(App).use(router).mount('#app')
