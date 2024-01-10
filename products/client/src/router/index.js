import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Login from '../views/login.vue'
import SignChack from '../views/SignChack.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/SignChack',
        name: 'SignChack',
        component: SignChack
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router