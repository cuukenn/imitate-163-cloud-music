// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// <link rel="stylesheet" href="static/css/iconfont.css">
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router/index'
import {AlertPlugin, ToastPlugin} from 'vux'
import store from './store'
import 'es6-promise/auto'
Vue.use(VueRouter)
Vue.use(Vuex)
/**
 * 加载插件
 */
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
FastClick.attach(document.body)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
