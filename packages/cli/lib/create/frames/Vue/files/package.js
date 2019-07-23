
let packageJsonStr =
    `import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'



/**
 * elementUl  https://element.eleme.cn/2.0/#/zh-CN/component/installation
 */
import {
  Button
} from "element-ui"

Vue.use(Button)




Vue.config.productionTip = false

new Vue({
    el:"#app",
    router,
    store,
    render: h => h(App)
})
`




module.exports = packageJsonStr;