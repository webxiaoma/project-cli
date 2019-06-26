<template>
   <div class='teacher'>
         <div class="city">
            <div v-for="(item,index) in cityList" :key="index" :class="activeCity.id === item.id?'btn active':'btn'" @click="clickCity(item)">
                    {{item.name}}
            </div>
        </div>
        <div class="teacherList">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多教师了"
                :offset="150"
                @load="teacherListReq"
                >
                    <div class="item" v-for="(item,index) in teacherListData.row" :key="index">
                        <div class="teacherPhoto">
                            <img :src="item.zpImgPath" :alt="item.tname"/>
                        </div>
                        <div class="teacherMsg">
                            <div class="name">姓名：{{item.tname}}</div>
                            <p>辅导科目：{{item.zw}} </p>
                            <p>辅导年级：{{item.nj}}</p>
                            <p class="testimonials">教学感言：{{item.gy}}</p>
                        </div>
                        <div class="message">
                            <div class="lookMsg" v-show="!item.lookJJ" @click="item.lookJJ = true">点击查看简介</div>
                            <div class="lookMs" v-show="item.lookJJ">{{item.tname}}简介</div>
                            <div class="brief"  v-show="item.lookJJ" >{{item.jj}}</div>
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
        cityList:[], // 城市列表
        activeCity:'', // 激活城市
        teacherReqData:{ // 教师列表请求数据
            page:1,
            pageSize:5,
            cityId:'',
        },
        teacherListData:{ // 教师列表
            row:[],
            total:0,
        }
    };
  },
  created(){
     let cityId = this.$route.query.cityId
     this.teacherReqData.cityId = cityId?cityId:"";
     this.cityListRequest();
  },
  methods: {
    teacherListReq(){ // 教师列表请求
        this.$req.teacherList(this.teacherReqData).then(res=>{
            if(res.code == 200){
                var length = res.data.row.length;
                if(length > 0){
                    var rows = [...this.teacherListData.row,...res.data.row].map(item=>{
                        item.lookJJ = false;
                        return item
                    });

                    this.teacherListData.row = Object.assign([],rows)
                    this.teacherReqData.page =  this.teacherReqData.page + 1;
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
    cityListRequest(){ // 城市请求
        var  cityList = sessionStorage.CITYLIST;
        if(cityList){
            this.cityList = JSON.parse(cityList);
            return;
        }
        this.$req.cityList().then(res=>{
            if(res.code === 200){
                this.cityList = res.data.row;
                sessionStorage.CITYLIST = JSON.stringify(res.data.row) 
            }
        })
    },
     clickCity(item){ // 点击城市
        this.activeCity = item;
        this.teacherReqData.cityId = item.id;
        this.teacherReqData.page = 1;
        this.teacherListData.row = [];
        this.finished = false;
        this.teacherListReq()

    },
  } 
}

</script>
<style lang='less' scoped>
.teacher{
    .city{
        min-height:70px;
        width:330px;
        margin:0 auto;
        padding:15px 0;
        display: flex;
        flex-wrap: wrap;
        border-bottom:1px solid #eee;
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
        }
        .active{
            background: rgb(239, 135, 0);
            border:1px solid rgb(239, 135, 0);
            color:#fff;
        }
    }
    .teacherList{
         .item{
             width:100%;
             padding:10px;
             display:flex;
             flex-wrap:wrap;
             border-bottom:1px solid #eee;
             &:active{
                 background:rgb(248, 248, 248);
             }
             .teacherPhoto{
                 min-height:90px;
                 display:flex;
                 align-items:center;
                 img{
                   width:100px;
                 }
             }
             .teacherMsg{
                 width:230px;
                 margin-left:10px;
                 p{
                     margin:2px 0;
                 }
             }
             .message{
                 width:100%;
                 margin-top:10px;
                 .brief{
                     margin-top:5px;
                     font-size:13px;
                     text-indent:28px;
                     line-height:19px;
                     text-align:justify;
                    //  overflow:hidden; 
                    //  text-overflow:ellipsis;
                    //  display:-webkit-box; 
                    //  -webkit-box-orient:vertical;
                    //  -webkit-line-clamp:4; 
                   
                 }
                 .lookMsg{
                    width:100%;
                    text-align:center;
                    &:active{
                        color:#e10000;
                    }
                 }
                .lookMs{
                    width:100%;
                    text-align:center;
                }
             }
         }
    }
}

</style>