import Vue from 'vue'
import App from './App'


import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import mycenter from './pages/mycenter/mycenter.vue'
Vue.component('mycenter',mycenter)

import waterfall from './pages/waterfall/waterfall.vue'
Vue.component('waterfall',waterfall)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
