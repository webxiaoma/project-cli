<template>
    <div class='layout'>
          <div class="headerWrap">
          </div>
          <div class="main">
              <router-view></router-view>
          </div>
          <div class="footerWrap">
          </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    components:{
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