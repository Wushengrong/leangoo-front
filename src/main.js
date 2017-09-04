// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import axios from 'axios'
import VueFuse from 'vue-fuse'
import Vue2Filters from 'vue2-filters'
import lodash from 'lodash'

Vue.config.productionTip = false;
router.mode = "history"
Vue.use(BootstrapVue)
Vue.use(VueFuse)
Vue.use(Vue2Filters)
Vue.component('icon', Icon)
axios.defaults.baseURL = '/api'
Vue.prototype.$ajax = axios
Vue.prototype.lodash=lodash
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
