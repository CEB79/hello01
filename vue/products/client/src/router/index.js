import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Login from '../views/login.vue'
import SignChack from '../views/SignChack.vue'
import SignUp from '../views/SignUp.vue'
import IdPw from '../views/IdPw.vue'
import UserControl from '../views/UserControl.vue'
import main from '../views/main.vue'
import RecipeBoard from '../views/RecipeBoard.vue'
import RecipeDetails from "../views/RecipeDetails.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: main
    },
    {
        path: '/login',
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
    },
    {
        path: '/IdPw',
        name: 'IdPw',
        component: IdPw
    },
    {
        path: '/UserControl',
        name: 'UserControl',
        component: UserControl
    },
    {
        path: '/RecipeBoard',
        name: 'RecipeBoard',
        component: RecipeBoard
    },
    {
        path: '/RecipeDetails',
        name: 'RecipeDetails',
        component: RecipeDetails
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
// process.env.BASE_URL
export default router