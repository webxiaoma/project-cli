import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import { request} from "@/utils"


Vue.use(VueLazyload,{
  preLoad: 1.3,
  attempt: 1
})
// 注册一个全局自定义指令 `v-url`
Vue.directive('url', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el,binding) {
    if(el){
        el.setAttribute("data-url",binding.value)
    }
  }
})


/**
 * elementUl  https://element.eleme.cn/2.0/#/zh-CN/component/installation
 */
import {
    RadioGroup,
    RadioButton,
    Form,
    FormItem,
    Select,
    Option,
    Input,
    Button,
    Loading,
    Message,
    Notification,
  } from 'element-ui'
  
  Vue.use(RadioGroup)
  Vue.use(RadioButton)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(Input)
  Vue.use(Button)
  Vue.use(Loading)
  
  Vue.config.productionTip = false;
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
  Vue.prototype.request = request; // 交换请求
  
  

// Vue.prototype.toast = Toast;
Vue.config.productionTip = false
Vue.prototype.request = request; // 交换请求

/**
 * swiper  https://www.swiper.com.cn/
 */
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)



new Vue({
    el:"#app",
    // router,
    // store,
    render: h => h(App)
})