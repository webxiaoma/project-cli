import Vue from "vue";
import router from "./router";
import App from './App'

export default new Vue({
    el: '#app',
    router,
    render: h => h(App)
});