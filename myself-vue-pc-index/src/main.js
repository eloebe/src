import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import {
  Select,
  Button,
  Switch,
  Loading,
  Image,
  Upload,
  Checkbox
  // ...
} from 'element-ui'
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
 Vue.use(Button).use(Select).use(Checkbox).use(Switch).use(Loading).use(Image).use(Upload)
// import qs from "qs"
// import Axios from "axios"
// Vue.prototype.$axios = Axios
 // Axios.defaults.baseURL = 'https://api.it120.cc/4d5c85aa214e44192ef7672ed624541b';
 // Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//全局设置接口基础路径
// import fns from '@/assets/js/jing.js';
		// Vue.prototype.$fun=fns;
/* import {Button,Icon,Checkbox,CheckboxGroup,Field,Loading,Cell,CellGroup,Toast,Row,Col} from 'vant'
Vue.use(Button).use(Icon).use(Checkbox).use(CheckboxGroup).use(Field).use(Loading).use(Cell).use(CellGroup).use(Toast).use(Row).use(Col);
import 'vant/lib/index.css'; */
// import '@/assets/css/iconfont.css'
// import 'lib-flexible/flexible.js'
Vue.config.productionTip = false
 import  'babel-polyfill'
// Vue.prototype.HOST = '/api'
// 发送请求的拦截器
Axios.interceptors.request.use(function(config) {
	if (config.method === "post") {
		config.data = qs.stringify(config.data)
	}
	return config;
}, function(error) {
	// Do something with request error
	return Promise.reject(error);
});

// 获取数据的拦截器
// Add a request interceptor
Axios.interceptors.request.use(function(config) {
	if (config.method === "post") {
		config.data = qs.stringify(config.data)
	}
	return config;
}, function(error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function(response) {
	// Do something with response data
	return response;
}, function(error) {
	// Do something with response error
	return Promise.reject(error);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
