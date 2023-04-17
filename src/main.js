import Vue from 'vue'
import App from './App.vue';
import store from './store';
import { provideStore } from './components/compostions/useStoreInjection'
import { synchronizeAwesomeness } from './synchronize_vuex';
Vue.config.productionTip = false

synchronizeAwesomeness(store)
new Vue({
  setup() {
    provideStore()
  },
  store,
  render: h => h(App),
}).$mount('#app')
