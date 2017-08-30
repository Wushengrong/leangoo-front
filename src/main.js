// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'element-ui/lib/theme-default/index.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import axios from 'axios'

Vue.config.productionTip = false
router.mode="history"
Vue.use(ElementUi)
Vue.use(BootstrapVue)
Vue.component('icon',Icon)
axios.defaults.baseURL = '/api'
Vue.prototype.$ajax=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
