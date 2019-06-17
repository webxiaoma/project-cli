<template>
   <div class='newsDetial'>
        <div class="newsContent">
            <h3 class="title">{{newsDetialData.title}}</h3>
            <p class="newsMsg">
                编辑人：<span>{{newsDetialData.bj}}</span>
                日期：<span>{{newsDetialData.addtime}}</span>
            </p>
            <div v-html="newsDetialData.pcontent" class="detial">

            </div>
        </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
        newsId:'',
        newsDetialData:{}, // 新闻详情
    };
  },
  created(){
        this.newsId = this.$route.query.id
        this.newsDetialReq()
  },
  methods: {
        newsDetialReq(){ // 新闻详情
           var obj = {
               Id:this.newsId
           }
           this.$req.newsDetial(obj).then(res=>{
                if(res.code == 200){
                    this.newsDetialData = Object.assign({},res.data)
                }
           })
       },
  }
}

</script>
<style lang='less' scoped>
.newsDetial{
    width:100%;
    overflow-x:scroll;
    .newsContent{
        width:100%;
        padding:10px;
        .title{
            margin:10px 0;
            color:#111;
        }
        .newsMsg{
            margin-bottom:15px;
            text-align:center;
            font-size:12px;
            color:#666;
        }
        /deep/.detial{
            width:100%;
            text-align:justify;
            line-height:24px;
            p{
                img{
                    width:100% !important;
                    height:auto!important;
                    margin:0!important;
                }
            }
        }
    }
}

</style>