const answerVue = require("../../../options.js").answerVue

let mainContentStr = 
`import Vue from 'vue'
import App from './App.vue'
${answerVue.useRouter ? "import router from './router';" : ""}
${answerVue.useVuex ? "import store from './store';" : ""}
${answerVue.useRouter ?"import router from './router';":""}

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


Vue.config.productionTip = false

new Vue({
    el:"#app",
    ${answerVue.useRouter ? 'router,' : ""},
    ${answerVue.useVuex ? 'store,':""},
    render: h => h(App)
})
`

module.exports = mainContentStr;