import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "layout",
      component: resolve => require(["../views/home/Home.vue"], resolve),
      children: [
       

      ]
    }
  ]
});

router.afterEach((to) => {
  document.title = "龙文教育 —— " + to.name
})


export default router