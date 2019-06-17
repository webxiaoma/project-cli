<template>
   <div class='bottomBar'>
     <van-tabbar>
        <van-tabbar-item>
            <a href="">在线咨询</a>
        </van-tabbar-item>
        <van-tabbar-item >
            <a href="tel:400-900-6656">电话咨询</a>
        </van-tabbar-item>
    </van-tabbar>
   </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  created(){

  },
  methods: {

  }
}

</script>
<style lang='less' scoped>
.bottomBar{
    .van-tabbar-item--active{
        font-size: 16px;
        a{
            color:#fff;
        }
    }
    .van-tabbar-item{
        font-size: 16px;
        a{
            color:#fff;
            &:active{
                background:none;
            }
        }
        &:nth-of-type(1){
          background:rgb(239, 135, 0);
          &:active{
               background:rgb(226, 137, 20);
          }
        }
         &:nth-of-type(2){
          background:rgb(225, 0, 0);
          &:active{
             background:rgb(231, 26, 26);
          }
        }
    }
}

</style>