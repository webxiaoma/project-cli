<template>
   <div class='case'>
        <div class="caseList">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多案例了"
                @load="caseListReq"
                >
                <div class="item"  v-for="(item,index) in caseListData.row" :key="index"  :title="item.title" @click="jumpLink(item)">
                    <div class="casePhoto">
                        <img :src="item.pic2ImgPath"/>
                    </div>
                    <div class="message">
                        <div class="name">{{item.title}}</div>
                        <div class="brief">{{item.text}}</div>
                    </div>

                </div>
            </van-list>
        </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
        loading:false,
        finished:false,
        caseListData:{
            row:[],
            total:0,
        },
        caseListReqData:{
            page:1,
            pageSize:10,
        },
    };
  },
  created(){
  },
  methods: {
      caseListReq() {
            this.$req.caseList(this.caseListReqData).then(res=>{
               if(res.code == 200){
                    var length = res.data.row.length;
                    if(length > 0){
                        var rows = [...this.caseListData.row,...res.data.row]
                        this.caseListData.row = Object.assign([],rows)
                        this.caseListReqData.page =  this.caseListReqData.page + 1;
                    }else{
                        this.finished = true;
                    }
                    this.loading = false;
                }

           }).catch(err=>{
              this.loading = false;
              this.finished = true;   
           })
      },
       jumpLink(item){ // 链接跳转
          this.$router.push({
              path:'/caseDetial',
              query:{
                  id:item.id,
              }
          })
       },
  } 
}

</script>
<style lang='less' scoped>
.case{
    width:100%;
    .caseList{
        width:100%;
         .item{
             width:100%;
             padding:10px;
             display:flex;
             justify-content:space-between;
             border-bottom:1px solid #eee;
             &:active{
                 background:rgb(248, 248, 248);
             }
             .casePhoto{
                 width:130px;
                 min-height:90px;
                 img{
                   width:100%;
                 }
             }
             .message{
                 margin-left:10px;
                 width:210px;
                 .name{
                     margin-bottom:4px;
                     font-size:15px;
                     color:#111;
                     display: -webkit-box;
                     -webkit-box-orient: vertical;
                     -webkit-line-clamp: 2;
                     overflow: hidden;
                 }
                 .brief{
                     font-size:13px;
                     line-height:19px;
                     text-align:justify;
                     display: -webkit-box;
                     -webkit-box-orient: vertical;
                     -webkit-line-clamp: 5;
                     overflow: hidden;
                 }
             }
         }
    }
}

</style>