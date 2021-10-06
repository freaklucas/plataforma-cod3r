import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ContentArticle from '@/components/template/ContentArticle'
import Login from '@/components/home/Login'

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
        name: 'ContentArticles',
        path: '/articles',
        component: ContentArticle
    },
    { 
        name: 'Login',
        path: '/login',
        component: Login
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})