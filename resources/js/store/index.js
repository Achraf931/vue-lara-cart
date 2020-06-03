import Vue from 'vue'
import Vuex from 'vuex'
import basket from './modules/basket/index'
import products from './modules/products/index'

import axios from 'axios'
axios.defaults.headers.common['Content-Type'] = 'application/json'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        basket,
        products
    }
})
