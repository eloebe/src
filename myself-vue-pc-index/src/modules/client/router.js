import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
	path: '/login',
	name: 'login',
	component: r => {
		require(['./login/Login'], r)
	},
	meta: {
		title: 'client 登录'
	}
}]

export default new VueRouter({
	mode: "history",
	routes: routes
})
