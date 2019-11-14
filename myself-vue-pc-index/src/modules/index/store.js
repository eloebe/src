import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
			products:[
				{name:"鼠标",proice:20},
				{name:"键盘",proice:30},
				{name:"电脑",proice:40},
			],
			// swagger地址:
			// http://10.0.0.18:8088/swagger-ui.html
			Api:"https://api.it120.cc/4d5c85aa214e44192ef7672ed624541b",
			// Api3:"http://10.0.0.30",
			// Api3:"http://47.99.121.153:8088",
			// 饺子前台接口
			Api3:"http://10.0.0.18:8088",
			tokenId:'',
			// 小白前台接口
			// Api3:'http://10.0.0.14:8088',
			// Api3:'http://10.0.0.29:8088',

			companyname:'',
			token:''
  },
  mutations: {

  },
  actions: {

  }
})
