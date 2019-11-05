import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import i18n from '@/plugins/i18n'
import '@/assets/css/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueTypedJs from 'vue-typed-js'
import vueHeadful from 'vue-headful';

Vue.component('vue-headful', vueHeadful);

Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,i18n,
  render: h => h(App),
}).$mount('#app')
