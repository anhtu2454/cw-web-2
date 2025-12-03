import { createRouter, createWebHistory} from 'vue-router'

import Home from './views/Home.vue'
import Product from './views/Product.vue'
import New from './views/New.vue'
import Edit from './views/Edit.vue'
import Show from './views/Show.vue'
import ShowUser from './views/ShowUser.vue'
import ViewOrder from './views/ViewOrder.vue'
import Login from './views/Login.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/home/product/:id',
        name: 'ShowUser',
        component: ShowUser
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    // ADMIN ROUTES
    {
        path: '/admin',
        redirect: '/admin/product'
    },
    {
        path: '/admin/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/admin/new',
        name: 'New',
        component: New
    },
    {
        path: '/admin/product/edit/:id',
        name: 'Edit',
        component: Edit
    },
    {
        path: '/admin/product/:id',
        name: 'Show',
        component: Show
    },
    {
        path: '/admin/order',
        name: 'ViewOrder',
        component: ViewOrder
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    const requiresAuth = to.path.startsWith('/admin'); 

    const isAuthenticated = localStorage.getItem('userToken'); 

    if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else if (to.path === '/login' && isAuthenticated) {
        next('/admin');
    } else {
        next();
    }
})

export default router