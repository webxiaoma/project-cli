const answerVue = require("../../../../options.js").answerVue
const formattingStr = require("../../../../utils").formattingStr

let mainContentStr = 
`import Vue from 'vue';
import App from './App.vue';
${answerVue.useRouter?"import router from './router';" : "placeholder-mxx"}
${answerVue.useVuex?"import store from './store';" : "placeholder-mxx"}
import { apis } from "@/api"; 
${answerVue.request !== 0 ? "import { request } from '@/utils';" : "placeholder-mxx"}

${
  answerVue.useElementUl?
`
/**
* elementUl  https://element.eleme.cn/2.0/#/zh-CN/component/installation
*/
import {
  Button
} from "element-ui"

Vue.use(Button)
`:""
}

${
  answerVue.useVant?
`
/**
* Vant  https://youzan.github.io/vant/#/zh-CN/intro
*/
import {
  Button
} from "element-ui"

Vue.use(Button)
`:""
}

Vue.prototype.api = apis;  // 接口api
${answerVue.request !== 0 ? "Vue.prototype.request = request; // 接口请求" : "placeholder-mxx"} 
Vue.config.productionTip = false

new Vue({
    el:"#app",
    ${answerVue.useRouter ? 'router,' : "placeholder-mxx"}
    ${answerVue.useVuex ? 'store,':"placeholder-mxx"}
    render: h => h(App)
})
`

module.exports = formattingStr(mainContentStr,"placeholder-mxx")
