import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueResource from 'vue-resource'
Vue.use(VueResource);

import Axios from 'axios'
Vue.prototype.$ajax=Axios

import { Header,Swipe,SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

import 'mint-ui/lib/style.css'

import App from './app.vue'

import router from './router.js'


var vm = new Vue({
	el:'#app',
	render:c=>c(App),
	router
})