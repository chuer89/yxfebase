// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'
import _ from 'lodash'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'plug/layui/dist/css/layui.css'
import 'plug/layui/dist/layui.all.js'

Vue.config.productionTip = false

let DOMAIN = {
  mdHost: 'http://dev.s.56qq.cn/vue_home/src/assets/md'
}

_.extend(window, {
  axios,
  DOMAIN,
  router
})

// store.commit('increment')
// console.log(store.state.count)

Vue.use(ElementUI, {
  size: 'small'
})

window.onbeforeunload = function () {
  alert(1)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
