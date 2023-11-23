import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Form from './components/Form.vue'
import Table from './components/Table.vue'
import {createRouter , createWebHistory} from 'vue-router'


const routes = [
    {
        path : '/',
        component: Home
    },
    {
        path : '/form',
        component: Form
    },
    {
        path : '/table',
        component: Table
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes,
    linkActiveClass: 'Active',
})

const app = createApp(App);
app.use(router);
app.mount('#app');
