import Vue from 'vue'
Vue.use(Router)
import Router from 'vue-router'
import App from '@/App'
import business from 'components/business/business'
import evaluate from 'components/evaluate/evaluate'
import commodity from 'components/commodity/commodity'
import Index from '@/views/index/index'
import Manage from '@/views/manage/index'
import login from '@/views/login/login'
import nopwd from '@/views/nopwd/nopwd'
import register from '@/views/register/register'

export default new Router({
	mode: "history",
	routes: [
		{
			path: '/evaluate',
			name: 'evaluate',
			component: evaluate,
		},
		{
		  path: "/register",
		  name: "register",
		  component:register,
		},
		{
		  path: "/",
		  name: "login",
		   component: login,
		},
		{
			path: '/nopwd',
			name: 'nopwd',
			component: nopwd,
		},
		{
			path: '/business',
			name: 'business',
			component: business,
		},
		{
			path: '/commodity',
			name: 'commodity',
			component: commodity,
		},
		{
		  path: '/Index',
		  name: 'Index',
		  component: Index
		},
		{
		  path: '/manage',
		  name: 'Manage',
		  component: Manage
		}
	]
})
