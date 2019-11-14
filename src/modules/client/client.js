import Vue from 'vue'
import Console from './Client.vue'
import router from './router'

Vue.use(require('vue-wechat-title'))
 import  'babel-polyfill'

new Vue({
    router,
    render: h => h(Console)
}).$mount('#client')