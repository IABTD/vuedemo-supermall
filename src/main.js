import Vue from 'vue'
import App from './App.vue'
import router from './router'//不用写 /index.js,因为默认会找该目录下的index.js文件

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
