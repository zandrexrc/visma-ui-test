import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import UI from '@vismaux/nordic-cool-vue';
import '@vismaux/nordic-cool-vue/dist/nc.css';

Vue.use(UI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
