import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

new Vue({
  render: function(h) {
    return h(App)
  }
}).$mount('#app')
