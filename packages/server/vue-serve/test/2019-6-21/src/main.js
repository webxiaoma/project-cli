import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

console.log(VueLazyload)
Vue.use(VueLazyload)


// import router from './router'
// import store from './store'
// import { requestMethods } from "./api";
// import api from '@/api/apis'




// Vue.prototype.toast = Toast;
Vue.config.productionTip = false
// Vue.prototype.$req = requestMethods;
// Vue.prototype.$api = api;

new Vue({
    el:"#app",
    // router,
    // store,
    render: h => h(App)
})