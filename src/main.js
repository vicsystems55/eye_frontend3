import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import Breadcrumbs from './components/bread_crumbs'
import { store } from './store';
import VueFeather from 'vue-feather';
import Toasted from 'vue-toasted';
import PxCard  from './components/Pxcard.vue'
Vue.component(PxCard.name, PxCard)

// Import Theme scss
import './assets/scss/app.scss'

import vueCountryRegionSelect from 'vue3-country-region-select'

Vue.use(VueFeather);
Vue.use(BootstrapVue)
Vue.use(vueCountryRegionSelect);
Vue.component('Breadcrumbs', Breadcrumbs)

Vue.use(Toasted,{
  iconPack: 'fontawesome'
});

new Vue({
  router,
  store,
  vueCountryRegionSelect,
  render: h => h(App)
}).$mount('#app')