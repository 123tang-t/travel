import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/address',
        name: 'address',
        component: () => import(/* webpackChunkName: "about" */ '../views/Address.vue')
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: Details
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
