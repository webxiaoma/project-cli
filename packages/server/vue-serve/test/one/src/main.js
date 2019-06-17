import Vue from 'vue'
import "amfe-flexible";
import App from './App.vue'
import router from './router'
// import store from './store'
import { requestMethods } from "./api";
import api from '@/api/apis'


import {
    Button,
    Icon,
    List,
    Tabs,
    Tab,
    Search,
    Toast,
    Tabbar,
    TabbarItem,
    NavBar,
    Swipe,
    SwipeItem
} from "vant";

Vue.use(Button)
    .use(Icon)
    .use(List)
    .use(Tabs)
    .use(Tab)
    .use(Search)
    .use(Toast)
    .use(Tabbar)
    .use(TabbarItem)
    .use(NavBar)
    .use(Swipe)
    .use(SwipeItem)
    .use(SwipeItem);


Vue.prototype.toast = Toast;
Vue.config.productionTip = false
Vue.prototype.$req = requestMethods;
Vue.prototype.$api = api;

new Vue({
    el:"#app",
    router,
    // store,
    render: h => h(App)
})