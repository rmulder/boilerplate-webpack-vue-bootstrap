// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './component/App/App.vue'
import Icon from './component/UI/Icon/Icon.vue'
import router from './router'
import store from './store'

Vue.use(Vuex)
Vue.use(App)
Vue.component('icon', Icon)

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', function () {
  console.info(window);
  const vm = new Vue({
    router,
    store: store(),
    template: '<app/>',
    components: {
      App
    }
  })
  vm.$mount(document.getElementById('app'))
})
