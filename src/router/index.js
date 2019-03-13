import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/vue-calendar-component/index.js'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: HelloWorld
    }]
})