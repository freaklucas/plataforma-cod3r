import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ContentArticle from '@/components/template/ContentArticle'

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
        component: ContentArticle
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})