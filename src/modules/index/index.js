import Vue from 'vue'
import store from './store'

import Console from './index.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);


// import Swiper from 'swiper';
	// Vue.use(Swiper);
	 // Vue.prototype.$Swiper = Swiper;

// import '@/assets/css/idangerous.swiper2.7.6.css';

/* import {
  Select,
  Button,
  Switch,
  Loading,
  Image,
  Upload,
  Checkbox,
  Carousel
  // ...
} from 'element-ui' */
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
 // Vue.use(Button).use(Select).use(Checkbox).use(Switch).use(Loading).use(Image).use(Upload).use(Carousel)
 import axios from 'axios';
 Vue.prototype.$axios = axios;
 	// axios.defaults.baseURL = 'http://47.99.121.153:8088';
	// axios.defaults.baseURL = 'http://10.0.0.8:8088';
	// 饺子前台接口
	axios.defaults.baseURL = 'http://10.0.0.18:8088'; 
	// 小白前台接口
	// axios.defaults.baseURL = 'http://10.0.0.14:8088',
	// axios.defaults.headers.common['Content-Type'] = 'application/json';
	// axios.defaults.headers.common['tokenId'] = store.state.tokenId;
				/* xhrFields: {
						       withCredentials: true
						   }, */
	// axios.defaults.xhrFields.common['withCredentials'] = true;
	axios.defaults.withCredentials = true;
	// alert(store.state.tokenId)
	// Vue.prototype.HOST = '/api'
 	// axios.defaults.baseURL = 'http://10.0.0.8:8088';
	// axios.defaults.baseURL = 'http://10.0.0.30:8088';
	// axios.defaults.baseURL = 'http://10.0.0.29:8088';

	 // axios.defaults.baseURL = 'http://10.0.0.8:8088';

import fns from '@/assets/js/jing.js';
		Vue.prototype.$fun=fns;
// import sig from '@/assets/js/sign_online.js';
// var opo = sig.initEventHandle()
		    // console.log(opo)

		// Vue.prototype.$sig=sig;
 import  'babel-polyfill'
 Vue.config.productionTip = false

/* import {Button,Icon,Checkbox,CheckboxGroup,Field,Loading,Cell,CellGroup,Toast,Row,Col} from 'vant'
Vue.use(Button).use(Icon).use(Checkbox).use(CheckboxGroup).use(Field).use(Loading).use(Cell).use(CellGroup).use(Toast).use(Row).use(Col);
import 'vant/lib/index.css'; */
import '@/assets/css/iconfont.css'
// import 'lib-flexible/flexible.js'
Vue.use(require('vue-wechat-title'))

new Vue({
    router,
	store,
    render: h => h(Console)
}).$mount('#console')