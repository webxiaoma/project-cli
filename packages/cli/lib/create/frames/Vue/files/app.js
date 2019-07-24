const answerVue = require("../../../options.js").answerVue
const formattingStr = require("../../../../../utils").formattingStr

let appVueContentStr = 
`<template>
  <div class="app">
    ${answerVue.useRouter?
    "<router-view/>" :
     ` <div class="headerWrap">
        <Header></Header>
      </div>

      <div class="mainWrap">
        <h1>开始项目</h1>
        <img src="@/assets/test.jpg" alt="">
        <a href="https://webxiaoma.github.io/project-cli/docs/blogs/">
            <h3>查看工具文档</h3>
        </a>
      </div>

      <div class="footerWrap">
         <Footer></Footer>
      </div>
    `} 
  </div>
</template>

<script>
import {Header,Footer} from '@/components';

export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import "./theme/base.less";
${answerVue.useRouter ?
`.app{}`:
`.app{
    min-height:100vh;
    display: flex;
    flex-direction: column;
    .headerWrap{
      width:100%;
    }
    .footerWrap{
      width:100%;
    }
    .mainWrap{
        padding-top:100px;
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
          margin-bottom:20px;
        }
        a{
            color:#159515;
            margin-top:20px;
            &:hover{
                color:#006b00;
            }
        }
    }
}`}

</style>
`

module.exports = formattingStr(appVueContentStr,"placeholder-mxx")





