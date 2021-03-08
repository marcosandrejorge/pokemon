import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
const Detalhes = () => import('../views/Detalhes')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/detalhes/:id',
        name: 'Detalhes',
        props: true,
        component: Detalhes
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    routes
})

export default router
