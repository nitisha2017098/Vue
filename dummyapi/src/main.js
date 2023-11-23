// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; 
import router from './router'; 
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(VueAxios, axios)
.use(store).use(router).mount('#app');

