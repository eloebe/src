import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
	path: '/login',
	name: 'login',
	component: r => {
		require(['./login/login'], r)
	},
	meta: {
		title: 'console 登录保函'
	}
},
{
	path: '/Login-old',
	name: 'Login-old',
	component: r => {
		require(['./login/Login-old'], r)
	},
	meta: {
		title: 'console 登录'
	}
},
{
	path: '/register',
	name: 'register',
	component: r => {
		require(['./register/register'], r)
	},
	meta: {
		title: 'register 注册'
	}
},
{
	path: '/baohansystem',
	name: 'baohansystem',
	component: r => {
		require(['./baohansystem/baohansystem'], r)
	},
	meta: {
		title: '电子保函系统'
	}
},
{
	path: '/buy-card',
	name: 'buy-card',
	component: r => {
		require(['./buy-card/buy-card'], r)
	},
	meta: {
		title: 'card'
	}
},
{
	path: '/apply-recordsystem',
	name: 'apply-recordsystem',
	component: r => {
		require(['./apply-recordsystem/apply-recordsystem'], r)
	},
	meta: {
		title: '保函申请记录'
	}
},
{
	path: '/searchReason',
	name: 'searchReason',
	component: r => {
		require(['./searchReason/searchReason'], r)
	},
	meta: {
		title: '查询结果'
	}
},
{
	path: '/',
	name: 'homepage',
	component: r => {
		require(['./homepage/homepage'], r)
	},
	meta: {
		title: '首页'
	},
	children:[          
      {                      //二级路由
        path:'/',            //二级的默认路由（此path指向上一级，即path:'/about'）
        name:'expressLink',        
        component: r => {
        	require(['./homechild2/homechild2'], r)
        }
      },
      {
        path:'/homechild1',
        name:'homechild1',
       component: r => {
       	require(['./homechild1/homechild1'], r)
       },
	   meta: {
	   	title: 'homechild1'
	   }
      },
      {
        path:'/homechild2',
        name:'homechild2',
        component: r => {
        	require(['./homechild2/homechild2'], r)
        }
      }
	   /* children:[            
          {                                     //三级路由
            path:'/about/contact/personName',
            name:'personNameLink',
            component:PersonName,
          },
          {
            path:'/about/contact/phone',
            name:'phoneLink',
            component:Phone
          },
 
        ] */
    ]
}
/* {
	path: '/aurl2',
	name: 'aurl2',
	component: r => {
		require(['aurl2'], r)
	},
	meta: {
		title: '电子'
	}
} */
]

export default new VueRouter({
	routes: routes,
	mode: "history"
})
