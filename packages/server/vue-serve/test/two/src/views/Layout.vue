<template>
    <div class='layout'>
          <div class="headerWrap">
             <Header></Header>
          </div>
          <div class="main">
              <router-view></router-view>
          </div>
          <div class="footerWrap">
            <Footer></Footer>
          </div>
    </div>
</template>

<script>
import {Header,Footer,BottomBar} from '@/components'
export default {
    data(){
        return{
            
        }
    },
    components:{
        Header,
        Footer,
        BottomBar
    }
}
</script>

<style lang="less" scoped>
.layout{
    .main{
         margin-bottom:80px;
    }
    .footerWrap{
        margin-top:40px;
    }
}
</style>