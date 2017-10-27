import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/goodsList'

Vue.use(Router)

export default new Router({
    mode: "history", // 真实的地址访问 如 http://localhost:8080
    routes: [{
        path: '/',
        component: GoodsList
    }]
})