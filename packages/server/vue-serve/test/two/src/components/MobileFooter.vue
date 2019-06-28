<template>
   <div class='mobileFooter'>
        <div class="content">
            <p>龙文教育电话：400-900-6656</p>
            <p>龙文地址：北京市东城区环球贸易中心A座5层</p>
            <p>备案号：京ICP备19016392号</p>
        </div>
         <div class="bottomBtn">
            <a href="tel:400-900-6656">
                <div class="phone"><span>电话咨询</span></div>
            </a>
            <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                <div class="online"><span>在线咨询</span></div>
            </a>
            <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                <div class="school"><span>最近校区</span></div>
            </a>
            
       </div>
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
.mobileFooter{
    width:100%;
    background: #E6FAFA;
    .content{
        text-align: center;
        padding:40px 0 140px 0;
        p{
            margin:5px 0;
            font-size: 26px;
            color:#777;
        }
    }
    .bottomBtn{
        position:fixed;
        bottom:0;
        z-index: 999999999;
        width:100%;
        height:100px;
        display:  flex;
        color:#fff;
        a{
            display: block;
            width:33.33%;
            height:100%;
            color:#fff;
           >div{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size:32px;
            span{
                margin-left:24px;
            }
        }
       
        }
        .phone{
           width:100%;
           height:100%;
           background:url('../assets/m-img/phone.png') no-repeat 18px center #4800BB;
           background-size:40px auto;
        }
        .online{
            width:100%;
            height:100%;
           background:url('../assets/m-img/kef.png') no-repeat 18px center #FF5755;
           background-size:40px auto;
        }
        .school{
            width:100%;
            height:100%;
           background:url('../assets/m-img/address.png') no-repeat 18px center #A7A7FF;
           background-size:40px auto;
        }
    }
}
</style>