/**
 * 配置记录 文件配置
 */


module.exports = {
   //命令配置
   cmdOpt:{
      dirName:"", // 创建的目录名
   },

   // 选择前端库
   frames:{
      name:'', // 
   },

   // Vue 配置回答
   answerVue:{ 
      platform: '', // 平台 (1:pc端,2:移动端)
      useRouter: false, // 是否使用router
      useVuex:false, // 是否使用vuex
      request: 0, // 选择交互请求(0:不选,1:axios,2:flyio)
   }
};