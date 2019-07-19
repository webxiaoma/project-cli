<template>
   <div class='home'>
        <div class="banner">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <img src="@/assets/banner.png" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="@/assets/banner.png" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="@/assets/banner.png" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="grid">
             <div class="chunk">
                <router-link to="/oneToOne">
                     <div class="tagImg">
                        <img src="@/assets/tag1.png" alt="">
                    </div>
                    <p class="text">一对一</p>
                </router-link>
             </div>
              <div class="chunk">
                <router-link to="/debugging">
                     <div class="tagImg">
                        <img src="@/assets/tag2.png" alt="">
                    </div>
                    <p class="text">59错题</p>
                </router-link>
             </div>
              <div class="chunk">
                <router-link to="/study">
                     <div class="tagImg">
                        <img src="@/assets/tag3.png" alt="">
                    </div>
                    <p class="text">国际游学</p>
                </router-link>
             </div>
              <div class="chunk">
                <router-link to="/tutorship">
                     <div class="tagImg">
                        <img src="@/assets/tag4.png" alt="">
                    </div>
                    <p class="text">K12辅导</p>
                </router-link>
             </div>
              <div class="chunk">
                <router-link to="/upgrade">
                     <div class="tagImg">
                        <img src="@/assets/tag5.png" alt="">
                    </div>
                    <p class="text">小升初</p>
                </router-link>
             </div>
              <div class="chunk">
                <router-link to="/sprint">
                     <div class="tagImg">
                        <img src="@/assets/tag6.png" alt="">
                    </div>
                    <p class="text">中考冲刺</p>
                </router-link>
             </div>
             <div class="chunk">
                <router-link to="/volunteer">
                     <div class="tagImg">
                        <img src="@/assets/tag7.png" alt="">
                    </div>
                    <p class="text">高考志愿</p>
                </router-link>
             </div>
             <div class="chunk">
                <router-link to="/school">
                     <div class="tagImg">
                        <img src="@/assets/tag8.png" alt="">
                    </div>
                    <p class="text">龙文校区</p>
                </router-link>
             </div> 
             <div class="chunk">
                <router-link to="/teacher">
                     <div class="tagImg">
                        <img src="@/assets/tag9.png" alt="">
                    </div>
                    <p class="text">龙文教师</p>
                </router-link>
             </div>
              <div class="chunk">
                <router-link to="/case">
                     <div class="tagImg">
                        <img src="@/assets/tag10.png" alt="">
                    </div>
                    <p class="text">成功案例</p>
                </router-link>
             </div>
        </div>

        <div class="hotSchool">
            <van-nav-bar
                left-text="热门校区"
                right-text="更多校区>"
                right-arrow
                @click-right="onClickSchool"
            />
            <div class="city">
                <div v-for="(item,index) in cityList" :key="index" :class="activeCity.id === item.id?'btn active':'btn'" @click="clickCity(item)">
                      {{item.name}}
                </div>
            </div>
            <div class="schoolImg">
               <img :src="activeCity.imgPath1" :alt="activeCity.name">
            </div>
            <div class="brief">
                {{activeCity.csjj}}
            </div>

        </div>

        <div class="news">
            <van-nav-bar
                left-text="龙文教育资讯"
                right-text="更多资讯 >"
                right-arrow
                @click-right="onClickNew"
            />

            <div class="newsList">
                <div class="newItem" v-for="(item,index) in newsListData.row" :key="index"  :title="item.title" @click="jumpLink(item)">
                   <div class="title">{{item.title}}</div>
                   <div class="content">{{item.pdesc}}</div>
                </div>
            </div>
        </div>

        <div class="teacher">
            <van-nav-bar
                left-text="师资力量"
                right-text="更多教师 >"
                right-arrow
                @click-right="onClickTeacher"
            />
            <div class="teacherList">
                <div class="teacherItem"  v-for="(item,index) in teacherListData.row" :key="index"  :title="item.title" @click="onClickTeacher">
                    <div class="photo">
                        <img :src="item.zpImgPath" :alt="item.title">
                    </div>
                    <div class="msg">
                        <p>{{item.tname}}</p>
                        <p class="tag">优秀教师</p>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import fly from 'flyio'
export default {
  data () {
    return {
        cityList:[], // 城市列表
        activeCity:'', // 激活城市
         newsListData:{ // 新闻数据
            row:[],
            total:0,
         },
         newsListReqData:{ //新闻列表请求数据
            page:1,
            pageSize:5,
            cityId:"",
         },
        teacherReqData:{ // 教师列表请求数据
            page:1,
            pageSize:4,
            cityId:'',
        },
        teacherListData:{ // 教师列表
            row:[],
            total:0,
        },
    };
  },
  created(){
      this.cityListRequest();
      this.newsListReq();
      this.teacherListReq()
  },
  methods:{
    teacherListReq(){ // 教学服务列表请求
        this.$req.teacherList(this.teacherReqData).then(res=>{
            if(res.code == 200){
                this.teacherListData = Object.assign({},res.data)
            }
        })
    },
    lookDetial(id){ // 跳转教学服务详情
        this.$router.push({
            path:'/teacherDetial',
            query:{
                id:id
            }
        })
    },
    newsListReq(){ // 新闻列表请求
        this.$req.newsList(this.newsListReqData).then(res=>{
            if(res.code == 200){
                this.newsListData = Object.assign({},res.data)
                
            }
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
    cityListRequest(){ // 城市请求
        var  cityList = sessionStorage.CITYLIST;
        if(cityList){
            this.cityList = JSON.parse(cityList).splice(0,8);
            this.activeCity = this.cityList[0];
            return;
        }
        this.$req.cityList().then(res=>{
            if(res.code === 200){
                this.cityList = res.data.row.splice(0,8);
                this.activeCity = this.cityList[0];
                sessionStorage.CITYLIST = JSON.stringify(res.data.row) 
            }
        })
    },
    clickCity(item){ // 点击城市
             this.activeCity = item;
    },
    onClickSchool(){ //点击更多校区
         this.$router.push("/school")
    },
    onClickTeacher(){ // 教师跳转
         this.$router.push("/teacher")
    },
    onClickNew(){ // 跳转新闻
       this.$router.push("/news")
    }
  }
}

</script>
<style lang='less' scoped>
.home{
    // vant style start
    .van-nav-bar{
        background:rgb(239, 135, 0);
        .van-nav-bar__text{
            color:#fff;
            &:active{
                background:none;
                color:rgb(255, 61, 61);
            }
        }
    }
    // vant style end
    .banner{
        min-height:130px;
        img{
            width:100%;
        }
    }
    .grid{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding:0 5px;
        .chunk{
            width:70px;
            margin-bottom:10px;
            min-height:66px;
            a{
                display: block;
                padding:5px 0;
                width:100%;
                height: 100%;
                &:active{
                    background:#eee;
                }
                .tagImg{
                    width:41px;
                    min-height:41px;
                    margin:0 auto;
                    img{
                       width:100%;
                    }
                }
                .text{
                    padding:2px 0;
                    text-align: center;
                    font-size:12px;
                }
            }

        }
    }
    .hotSchool{
        .city{
            min-height:100px;
            padding:15px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .btn{
                width:66px;
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
        .schoolImg{
            width:340px;
            min-height:160px;
            margin: 0 auto 10px auto;
            img{
                width:100%;
            }
        }
        .brief{
           width:330px;
           min-height:80px;
           margin:0 auto;
           text-align: justify;
           line-height: 22px;
           text-indent: 30px;
        }
    }
    .news{
        margin-top:25px;
        .newsList{
            width:100%;
            margin-top:20px;
            min-height:100px;
            .newItem{
                width:345px;
                min-height:100px;
                padding:5px 0px 15px 0px;
                margin:5px auto;
                border-bottom:1px solid #eee;
                &:active{
                    background:rgb(252, 252, 252);
                }
                &:last-of-type{
                    border-bottom:none;
                }
                .title{
                    width: 100%;
                    min-height:20px;
                    line-height: 20px;
                    font-size:15px;
                    color:#333;
                    text-align: justify;
                    overflow:hidden; 
                    text-overflow:ellipsis;
                    display:-webkit-box; 
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:2; 
                }
                .content{
                    width:100%;
                    padding:0 5px;
                    margin-top:6px;
                    line-height: 20px;
                    text-align: justify;
                    color:rgb(116, 116, 116);
                  overflow:hidden; 
                    text-overflow:ellipsis;
                    display:-webkit-box; 
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:3; 
                    text-indent: 30px;
                }
            }
        }
     }
     .teacher{
         width:100%;
         margin-top:20px;
         .teacherList{
             padding:20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .teacherItem{
                width:154px;
                margin-bottom:10px;
                padding:2px 0;
                border:1px solid rgb(240, 240, 240);
                &:active{
                    background:rgb(247, 247, 247);
                }
                .photo{
                    width:150px;
                    min-height:186px;
                    margin:0 auto;
                    img{
                        width:100%;
                    }
                }
                .msg{
                    min-height:10px;
                    margin:4px 0;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    .tag{
                        margin-left:4px;
                        background:rgb(239, 135, 0);
                        color:#fff;
                        padding:2px 6px;
                        border-radius:5px;
                    }
                }
            }
         }
         
     }
}

</style>