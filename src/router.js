import VueRouter from 'vue-router'

import Home from './components/tabbar/Home.vue'
import Video from './components/tabbar/Video.vue'
import Search from './components/tabbar/Search.vue'
import Message from './components/tabbar/Message.vue'
import Member from './components/tabbar/Member.vue'


var router = new VueRouter({
	routes:[
		{ path:'/',redirect:'/home' },
		{ path:'/home',component:Home },
		{ path:'/video',component:Video },
		{ path:'/search',component:Search },
		{ path:'/message',component:Message },
		{ path:'/member',component:Member }
	],
	linkActiveClass:"mui-active" // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active

})

export default router