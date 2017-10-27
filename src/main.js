import Vue from 'vue'
import App from './App'
import router from './router'
import vueLazyLoay from "vue-lazyload";

Vue.config.productionTip = false

Vue.use(vueLazyLoay, {
        preLoad: 1.3,
        loading: "/static/loading-svg/loading-bars.svg"
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})