import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Pages/Home.vue'
import Posts from './components/Pages/Posts.vue'
import CreatePost from './components/Pages/CreatePost.vue'
import {createRouter , createWebHistory} from 'vue-router'

const routes = [
    {
        path : '/',
        component: Home,
    },
    {
        path : '/form',
        component: Posts,
    },
    {
        path : '/table',
        component: CreatePost,
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
