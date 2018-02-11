// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'

import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

import App from './App'
import router from './router'

import 'bulma'

Vue.config.productionTip = false

Vue.use(VueProgressBar, {
  color: '#bc5d29',
  failedColor: '#874b4b'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',

  router,

  components: { App },

  template: '<App/>',

  methods: {
    setPageTitle (title) {
      document.title = `${title} - José Rizal`
    }
  }
})
