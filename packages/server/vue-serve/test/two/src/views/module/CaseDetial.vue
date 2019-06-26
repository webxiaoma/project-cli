<template>
   <div class='caseDetial'>
        <div class="caseContent">
            <h3 class="title">{{caseDetialData.title}}</h3>
            <p class="caseMsg">
                日期：<span>{{caseDetialData.time.split(".")[0]}}</span>
            </p>
            <div class="detial">
              <p>{{caseDetialData.text}}</p> 
              <p>
                <img :src="caseDetialData.pic2ImgPath" alt="">
              </p>
            </div>
        </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
        caseId:'',
        caseDetialData:{}, // 新闻详情
    };
  },
  created(){
        this.caseId = this.$route.query.id
        this.caseDetialReq()
  },
  methods: {
        caseDetialReq(){ // 新闻详情
           var obj = {
               Id:this.caseId
           }
           this.$req.caseDetial(obj).then(res=>{
             console.log(res)
                if(res.code == 200){
                    this.caseDetialData = Object.assign({},res.data)
                }
           })
       },
  }
}

</script>
<style lang='less' scoped>
.caseDetial{
    width:100%;
    overflow-x:scroll;
    .caseContent{
        width:100%;
        padding:10px;
        .title{
            margin:10px 0;
            color:#111;
        }
        .caseMsg{
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