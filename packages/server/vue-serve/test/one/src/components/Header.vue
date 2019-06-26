<template>
    <div class="header">
        <div class="center" v-show="header">
            <div class="logo">
                <router-link to="/">
                  <img src="../assets/img/logo.png" alt="">
                </router-link>
            </div>
            <div class="phone">
               400-900-6656
            </div>
        </div>
        <div class="topImg" v-show="topImg">
           <img src="@/assets/topImg.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
              topImg:false,
              header:true,
            }
        },
        watch:{
            '$route' (to, from) {
               this.controllerShow(to)
            }
        },
        created(){
            this.controllerShow(this.$route)
        },
        methods:{
            controllerShow(route){ // 控制头部图片
                 this.header = route.meta.hideHeader?false:true;
                 this.topImg = route.meta.topImg?true:false;
            }
        }
    }
</script>

<style lang="less" scoped>
.header{
    width:100%;
    .center{
        height:100%;
        padding:8px 10px; 
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo{
            width:78px;
            a{
                display: block;
                width:100%;
                min-height:20px;
                img{
                    width:100%;
                }

            }
        }
        .phone{
            height:100%;
            font-size:16px;
            color:#E73948;
            padding-left:18px;
        }
    }
    .topImg{
       width:100%;
       img{
           width:100%;
       }
    }
    
}
</style>