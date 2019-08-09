import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "core-js/stable";
import "regenerator-runtime/runtime";

Vue.config.productionTip = false;
  
  
Vue.config.productionTip = false




new Vue({
    el:"#app",
    router,
    // store,
    render: h => h(App)
})