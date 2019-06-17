<template>
   <div class='singleSchoole'>
        <div class="message">
            <div class="title">
                龙文教育
            </div>
            <div class="detial">
               {{branchSchoolData.city.csjj}}
            </div>
        </div>
        <div class="message">
            <div class="title">
                校区环境
            </div>
            <div class="swiper">
               <div class="imgWrap">
                   <img :src="branchSchoolData.city.imgPath1" alt="">
               </div>
                <div class="imgWrap">
                   <img :src="branchSchoolData.city.imgPath2" alt="">
               </div>
                <div class="imgWrap">
                   <img :src="branchSchoolData.city.imgPath3" alt="">
               </div>
            </div>
        </div>
        <div class="message">
            <div class="title">
                1对1教师团队
            </div>
            <div class="teacherWrap">
               <div class="teacherItem"  v-for="(item,index) in branchSchoolData.teacher" :key="index">
                    <div class="img">
                      <img :src="item.zpImgPath" alt="">
                    </div>
                    <div class="teacherMsg">
                        <p class="name">{{item.tname}}</p>
                        <p>{{item.nj}} - {{item.zw}}</p>
                    </div>
               </div>
               <div class="lookTeacher" @click="lookTeacher">
                   查看更多教师
               </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
        branchSchoolReqData:{ //城市校区数据请求
            cityId:''
        },
        branchSchoolData:{//分校数据
            city:{},
            school:[],
            teacher:{}
        }, 
    };
  },
  created(){
      this.branchSchoolReqData.cityId = this.$route.query.cityId
      this.branchSchoolReq()
  },
  methods: {
        branchSchoolReq(){
            this.$req.branchSchool(this.branchSchoolReqData).then(res=>{
                if(res.code == 200){
                    this.branchSchoolData = Object.assign({},res.data)
                    this.branchSchoolData.teacher = res.data.teacher.splice(0,3)
                }

            })
        },
        lookTeacher(){ // 跳转教师详情
            this.$router.push({
                path:'teacher',
                query:{
                    cityId:this.branchSchoolReqData.cityId
                }
            })
        }
  }
}

</script>
<style lang='less' scoped>
.singleSchoole{
    .message{
        width:100%;
        min-height:120px;
        padding:15px 10px 0 10px;
        .title{
            margin:10px 0;
            font-size:18px;
            text-align: center;
        } 
        .detial{
            width:100%;
            line-height: 22px;
            text-align: justify;
            text-indent: 30px;
            font-size:14px;
        }
        .swiper{
            display: flex;
            justify-content: space-between;
            .imgWrap{
                width:110px;
                img{
                    width:100%;
                }
            }
        }
        .teacherWrap{
            display:flex;
            // justify-content:space-between;
            flex-wrap:wrap;
            padding:10px;
            .teacherItem{
                margin:5px;
                .img{
                    width:100px;
                    img{
                        width:100%;
                    }
                }
                .teacherMsg{
                   p{
                       width:100%;
                       text-align:center;
                       font-size:12px;
                   }
                   .name{
                       color:#111;
                   }
                }
            }
            .lookTeacher{
                width:200px;
                margin:30px auto 10px auto;
                text-align:center;
                &:active{
                    color:#e10000;
                }
            }
        }
    }
}

</style>