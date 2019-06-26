<template>
   <div class='news'>
     <div class="list">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多新闻了"
                @load="newsListReq"
                >
                <div class="item"  v-for="(item,index) in newsListData.row" :key="index"  :title="item.title" @click="jumpLink(item)">
                    <h3 class="title">{{item.title}}</h3>
                    <div class="time"><van-icon name="clock-o" />{{item.addtime}}</div>
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
        newsListData:{
            row:[],
            total:0,
        },
        newsListReqData:{
            page:1,
            pageSize:10,
        },
    };
  },
  created(){

  },
  methods: {
      newsListReq(){ // 新闻列表请求
           this.$req.newsList(this.newsListReqData).then(res=>{
               if(res.code == 200){
                var length = res.data.row.length;
                if(length > 0){
                    var rows = [...this.newsListData.row,...res.data.row]
                    this.newsListData.row = Object.assign([],rows)
                    this.newsListReqData.page =  this.newsListReqData.page + 1;
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
              path:'/newsDetial',
              query:{
                  id:item.id,
              }
          })
       },
  }
}

</script>
<style lang='less' scoped>
.news{
  .list{
      width: 100%;
      margin-top:20px;
      padding:0 10px;
      .item{
          width:100%;
          padding:10px 0px 10px 20px;
          border-bottom:1px solid  #eee;
          position: relative;
          &:active{
              background: rgb(247, 247, 247);
          }
          &:nth-of-type(1){
              &::after{
                  content:"01";
                  display: block;
                  position: absolute;
                  left:0px;
                  top:11px;
                  padding:1px 2px;
                  background:rgb(226, 42, 22);
                  color:#fff;
                  border-radius: 2px;
                  font-size:12px;

              }
          }
           &:nth-of-type(2){
              &::after{
                  content:"02";
                  display: block;
                  position: absolute;
                  left:0px;
                  top:11px;
                  padding:1px 2px;
                  background:rgb(249, 145, 83);
                  color:#fff;
                  border-radius: 2px;
                  font-size:12px;

              }
          }
           &:nth-of-type(3){
              &::after{
                  content:"03";
                  display: block;
                  position: absolute;
                  left:0px;
                  top:11px;
                  padding:1px 2px;
                  background:rgb(183, 208, 82);
                  color:#fff;
                  border-radius: 2px;
                  font-size:12px;

              }
          }
          .title{
             width:100%;
             height:20px;
             margin-bottom:6px;
             overflow: hidden;
             text-overflow:ellipsis;
             white-space: nowrap;
             font-size:16px;
          }
          .content{
             font-size:12px;
          }
          .time{
             display: flex;
             align-items: center;
             color:#666;
             i{
                 margin-right:6px;
             }
          }
      }
  }
}

</style>