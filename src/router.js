import VueRouter from 'vue-router'

import Slide from './components/Slide/Slide.vue'


var router = new VueRouter({
	routes:[
		{ path:'/',redirect:'/slide' },
		{ path:'/slide',component:Slide }

	]

})

export default router