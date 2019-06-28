import Vue from 'vue'
// import VueRouter from 'vue-router'
import Layout from '../views/Layout'
let aaa = import('../views/Layout')

let Router;

// 使用cdn
try {
  Router = VueRouter
} catch (error) {
  Router = require("vue-router").default
  Vue.use(Router)
}


const route = new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: "/",
      children: [
        {
          path: "/",
          name: "中国中小学1对1个性化辅导品牌", // 首页
          component: resolve => require(["../views/home/Home.vue"], resolve)
        },
        {
          path: "oneToOne",
          name: "一对一",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/OneToOne.vue"], resolve)
        },
        {
          path: "debugging",
          name: "59纠错",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/Debugging.vue"], resolve)
        },
        {
          path: "study",
          name: "国际游学",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/Study.vue"], resolve)
        },
        {
          path: "tutorship",
          name: "K12辅导",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/Tutorship.vue"], resolve)
        },
        {
          path: "upgrade",
          name: "小升初",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/Upgrade.vue"], resolve)
        },
        {
          path: "sprint",
          name: "中考冲刺",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/Sprint.vue"], resolve)
        },
        {
          path: "volunteer",
          name: "高考志愿",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/Volunteer.vue"], resolve)
        },
        {
          path: "school",
          name: "龙文校区",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/School.vue"], resolve)
        },
        {
          path: "map",
          name: "龙文校区",
          meta: {
            hideHeader: true,
          },
          component: resolve => require(["../views/module/Map.vue"], resolve)
        },
        {
          path: "schoolDetial",
          name: "校区详情",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/SchoolDetial.vue"], resolve)
        },
        {
          path: "teacher",
          name: "龙文教师",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/Teacher.vue"], resolve)
        },
        {
          path: "news",
          name: "龙文资讯",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/News.vue"], resolve)
        },
        {
          path: "newsDetial",
          name: "资讯详情",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/NewsDetial.vue"], resolve)
        },
        {
          path: "case",
          name: "成功案例",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/Case.vue"], resolve)
        },
        {
          path: "caseDetial",
          name: "成功案例详情",
          meta: {
            topImg: true,
          },
          component: resolve => require(["../views/module/CaseDetial.vue"], resolve)
        },

      ]
    }
  ]
});

route.afterEach((to) => {
  document.title = "龙文教育 —— " + to.name
})


export default route