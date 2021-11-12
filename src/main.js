import Vue from 'vue'
import App from './App.vue'
import '@/assets/common.css';
// import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false

// App.use(VueClipboard);

new Vue({
  render: h => h(App),
}).$mount('#app')
