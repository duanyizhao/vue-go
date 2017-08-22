import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/reset.less'


new Vue({
  el: '#app',
  router,
  ...App
})
