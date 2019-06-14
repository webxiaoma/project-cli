import Vue from "vue";
import Router from "vue-router";
import Layout from '@/pages/Layout'
import Home from '@/pages/home/Home.vue'

Vue.use(Router);

const route = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: "/",
      children: [
        {
          path: "/",
          name: "首页", // 首页
          component: Home,
          // component:resolve => require(['../pages/home/Home.vue'], resolve),
        }
      ]
    }
  ]
});



export default route;