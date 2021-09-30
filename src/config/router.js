import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
// import Articles from '@/components/home/Articles'

Vue.use(VueRouter)

const routes = [{
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'adminPages',
        path: '/admin',
        component: AdminPages
    },
    { 
        name: 'articles',
        path: '/articles',
        // component: Articles
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})