<template>
   <div class='school'>
       <div class="content">
            <div class="citySchool">
                    <van-nav-bar
                        left-text=""
                        title="全国各城市教学点查询（点击进入）"
                        right-text=""
                        @click-right="onClickSchool"
                    />
                    <div class="city">
                        <div v-for="(item,index) in cityList" :key="index"  class="btn" @click="clickCity(item)">
                            {{item.name}}
                        </div>
                    </div>
            </div>
            <div class="findMap">
                <van-nav-bar
                    left-text=""
                    title="搜索龙文教育，查看身边校区"
                    right-text=""
                />
                <div class="mapWrap">
                   <van-search
                    v-model="address"
                    placeholder="请搜索地址"
                    show-action
                    shape="round"
                    @search="onSearch"
                    >
                    <div slot="action" @click="onSearch">搜索</div>
                    </van-search>
                </div>
            </div>
       </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
      address:"龙文教育",
      cityList:[], // 城市列表
      activeCity:'', // 激活城市
    };
  },
  created(){
    this.cityListRequest()
  },
  methods: {
     cityListRequest(){ // 城市请求
        var  cityList = sessionStorage.CITYLIST;
        if(cityList){
            this.cityList = JSON.parse(cityList)
            return;
        }
        this.$req.cityList().then(res=>{
            if(res.code === 200){
                this.cityList = res.data.row
                sessionStorage.CITYLIST = JSON.stringify(res.data.row) 
            }
        })
    },
    clickCity(item){ //点击城市
        this.$router.push({
            path:'schoolDetial',
            query:{
                cityId:item.id
            }
        })
    }, 
    onClickSchool(){
        
    },
    onSearch(){
        this.$router.push({
            path:'map',
            query:{
                address:this.address
            }
        })
    }
  }
}

</script>
<style lang='less' scoped>
.school{
   .content{
       // vant style start
        .van-nav-bar{
            background:rgb(239, 135, 0);
            .van-nav-bar__text{
                color:#fff;
            }
            .van-nav-bar__title{
                font-size:12px;
                color:#fff;
            }
        }
        // vant style end
       .citySchool{
           .city{
                min-height:100px;
                width:330px;
                margin:0 auto;
                padding:18px 0;
                display: flex;
                flex-wrap: wrap;
                .btn{
                    width:56px;
                    height:26px;
                    margin:5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius:5px;
                    border:1px solid rgb(197, 197, 197);
                    font-size:12px; 
                    transition:.2s;
                    &:active{
                        background: rgb(239, 135, 0);
                        border:1px solid rgb(239, 135, 0);
                        color:#fff;
                    }
                }
              
            }
       }
       .findMap{
            width:100%;
           .mapWrap{
                width:85%;
                height:80px;
                margin:15px auto;
                .van-search__action{
                    padding:0 20px;
                    background:#ef8700;
                    color:#fff;
                    border-radius:10px;
                    margin-left:10px;
                }
           }
       }
   }
}
</style>