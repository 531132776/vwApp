import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible/flexible.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'

import axios from 'axios'
import VueCropper from 'vue-cropper'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.use(ElementUI)
Vue.use(VueCropper)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')