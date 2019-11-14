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
			Api:"https://api.it120.cc/4d5c85aa214e44192ef7672ed624541b",
			token:''
  },
  mutations: {

  },
  actions: {

  }
})
