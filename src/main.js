import Vue from 'vue';
import App from './App.vue';
import UI from '@vismaux/nordic-cool-vue';
import '@vismaux/nordic-cool-vue/dist/nc.css';

Vue.use(UI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
