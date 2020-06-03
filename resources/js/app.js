require('./bootstrap');
import store from './store/index'
window.Vue = require('vue');
import VueRouter from 'vue-router'
import App from './views/App'
import Home from './views/Home'
import Cart from './views/Cart'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Accueil'
            }
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            meta: {
                title: 'Panier'
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store
});
