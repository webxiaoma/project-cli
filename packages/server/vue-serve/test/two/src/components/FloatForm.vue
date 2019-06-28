<template>
   <div class='floatForm' :id="this.$root.isPc?'':'floatFormId'">
        <div class="close" @click="closeFloatForm">
              <i class="el-icon-close"></i>
        </div>
        <div class="layout">
            <div class="floatTitle">
                龙文一对一教育品牌
            </div>
            <div class="formWrap">
                   <el-form  :model="studyReqData" size="small" ref="scheme" :rules="studyRules" >
                        <el-form-item prop="cityCode">
                            <el-select v-model="studyReqData.cityCode" placeholder="请选择城市">
                                <el-option v-for="(item,index) in city" :label="item.name" :value="item.id" :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                        <!-- <el-form-item prop="name">
                            <el-input v-model="studyReqData.name" placeholder="请填写姓名" maxLength="10"></el-input>
                        </el-form-item> -->
                       
                        <el-form-item prop="banjiId">
                            <el-select v-model="studyReqData.banjiId" placeholder="请选择年级"  @change="banjieChange">
                                <el-option v-for="(item,index) in banji" :label="item.name" :value="item.id" :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="subjectId">
                            <el-select v-model="studyReqData.subjectId" placeholder="试听科目">
                                <el-option label="语文" :value="120" ></el-option>
                                <el-option label="数学" :value="110" ></el-option>
                                <el-option label="英语" :value="130" ></el-option>
                                <el-option label="历史" :value="160" v-show="subjectShow"></el-option>
                                <el-option label="地理" :value="170" v-show="subjectShow"></el-option>
                                <el-option label="思想品德/政治" :value="180" v-show="subjectShow"></el-option>
                                <el-option label="物理" :value="140" v-show="subjectShow"></el-option>
                                <el-option label="化学" :value="150" v-show="subjectShow"></el-option>
                                <el-option label="生物" :value="200" v-show="subjectShow"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="guardianTel">
                            <el-input  v-model="studyReqData.guardianTel" placeholder="家长手机" maxLength="11"></el-input>
                        </el-form-item>
                         <el-form-item >
                            <el-button type="primary" size="medium" @click="schemeSubmit">免费预约试听课程</el-button>
                        </el-form-item>
                    </el-form>
            </div>
            <div class='showPhone'>
              <div class="phoneName">
                  手机号
              </div>
              <div class="phone">
                   <swiper :options="askSwiperOption">
                        <swiper-slide v-for="(item,index) in phoneAry" :key="index">
                              {{item}} {{ Math.ceil(Math.random()*30) }}分钟前
                        </swiper-slide>
                   </swiper>
              </div>
            </div>
            <div class="tip">
                手机号已签订保密协议，请放心填写
            </div>
        </div>
   </div>
</template>

<script>
import formData from '../../public/js/form.js'
export default {
  data () {
       var checkPhone = (rule, value, callback) => {
            if (!value) {
               return callback(new Error('手机号不能为空'));
            }

            if (!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(value)) {
               return callback(new Error('请填写正确手机号'));
            }

            callback()
        };
        return{
            phoneAry:[
                "189****936",
                "186****536",
                "132****956",
                "131****626",
                "132****369",
                "186****756",
                "150****652",
                "135****654",
                "189****963",
                "132****589",
                "131****908",
                "188****856",
                "132****874",
                "137****236",
                "133****436",
                "131****896",
                "182****364",
                "132****156",
                "188****936",
                "153****936",
                "132****618",
                "151****634",
                "187****369",
                "133****584",
            ].sort(function(){
                return Math.random() - 0.5;
            }),
            timeShow:1,
            askSwiperOption:{ // 问题提问轮播
                direction: 'vertical',
                slidesPerView: 1,
                autoplay: {
                  delay: 3000,
                },
            },
             // 头部请求表单
            studyReqData:{
                name:"", //学生姓名
                guardianTel:"", //电话
                banjiId:"", //年级id
                subjectId:"", //学科id
                cityCode:"", //业务系统中的城市id
                agentType:this.$root.isPc?1:2, // 1.pc 端 2,手机端
                resourceType:"",
            }, 
            subject:JSON.parse(JSON.stringify(formData.subject)),
            banji:JSON.parse(JSON.stringify(formData.banji)),
            city:JSON.parse(JSON.stringify(formData.city)),
            studyRules: {
                // name: [
                //     { required: true, message: '姓名不能为空', trigger: 'blur' },
                //     { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                // ],
                guardianTel:[
                    { validator: checkPhone, trigger: 'blur' }
                ],
                banjiId: [
                    { required: true, message: '学段不能为空', trigger: 'change' },
                ],
                subjectId: [
                    { required: true, message: '学科不能为空', trigger: 'change' },
                ],
                cityCode: [
                    { required: true, message: '城市不能为空', trigger: 'change' },
                ],
         
            },
        }
    },
    created(){
        function getQuery(name){
         　 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);//从?之后开始匹配如getQuery(courseid)返回一个数组["courseid=8","","8","&",index:0,input:"courseid=8"]
            if (r!=null) return unescape(r[2]); return null;
        }
        this.studyReqData.resourceType = getQuery("ch");

    },
    methods:{
        schemeSubmit(){ // 头部表单提交请求
            this.$refs.scheme.validate((valid) => {
                if (valid) {
                    this.submit(this.studyReqData)
                } 
            });
        },
        banjieChange(){ // 班级切换学科变化
          var id = this.studyReqData.banjiId
          var ary = [1,2,3,4,5,6]
          if(ary.indexOf(id) > -1){
              this.subjectShow= false;
          }else{
              this.subjectShow= true;
          }
        },
        schemeSubmit(){ // 头部表单提交请求
            this.$refs.scheme.validate((valid) => {
                if (valid) {
                    this.submit(this.studyReqData)
                } 
            });
        },
        submit(obj){ // 方案提交
           this.request("/potentialstu/save",{
               data:obj,
                headers:{
                    "content-type":"application/x-www-form-urlencoded"
                }
           }).then(res=>{
               if(res.isSuccess === '0'){
                  this.$message({
                    type: 'error',
                    message:"提交失败",
                    center: true
                  })
               }else if(res.isSuccess === '1'){
                   this.$message({
                    type: 'success',
                    message:"提交成功，请留意来电",
                    center: true
                  })
               }
           })
        },
        closeFloatForm(){
            this.$emit("closeFloatForm")
        }
    }
}

</script>
<style lang='less' scoped>
.floatForm{
     width:600Px;
     height:600Px;
     margin-bottom:100Px;
     background:url('../../public/img/people.png') no-repeat center top;
     background-size:500PX auto;
     display: flex;
     justify-content: center;
     padding-top:200Px;
     position: relative;
    .layout{
        width:305Px;
        height:390Px;
        background:url('../assets/img/floatBg.png') no-repeat center center;
        .floatTitle{
            text-align:center;
            font-size:20PX;
            padding:20PX 0 5PX 0;
            color:orangered;
        }
        .formWrap{
            width:100%;
            padding:10PX 20PX 0PX 20PX;
            .el-button--medium{
                width:100%;
                background:#FF5755;
                border-color:#FF5755;
                span{
                  color:#fff;
                }
            }
            .el-select{
                width:100%;
                
            }
        }
        .showPhone{
            width:100%;
            height:18PX;
            overflow:hidden;
            display: flex;
            justify-content:center;
            color:#111;
            font-weight:bold;
            padding-left:60Px;
            background:url("../assets/img/floatForm.png") no-repeat 30Px center;
            background-size: auto 100%;
            .phone{
                width:150PX;
                height:20Px;
                margin:0 10Px;
            }
           
        }
        .tip{
            margin-top:10Px;
            font-size:14PX;
            text-align: center;
            color:#444;
        }
       
    }
    .close{
        cursor: pointer;
        position: absolute;
        top:140PX;
        left:270Px;
        width:50Px;
        height:50Px;
        padding:12PX 0;
        border-radius:50%;
        background: #fff;
        text-align: center;
        i{
            font-size: 26PX;
            color:#FF5755;
        }
    }
}

#floatFormId{
     width:700px;
     height:840px;
     margin-bottom:100px;
     background:url('../../public/img/people.png') no-repeat center top;
     background-size:100% auto;
     display: flex;
     justify-content: center;
     padding-top:200px;
     position: relative;
    .layout{
        width:590px;
        height:750px;
        background:url('../assets/img/floatBg.png') no-repeat center center;
        background-size:100% auto;
        .floatTitle{
            text-align:center;
            font-size:34px;
            padding:20px 0 20px 0;
            color:orangered;
        }
        .formWrap{
            width:100%;
            padding:0px 20px;
            .el-button--medium{
                width:100%;
                background:#FF5755;
                border-color:#FF5755;
                span{
                  color:#fff;
                }
            }
            .el-select{
                width:100%;
            }
        }
        .tip{
            font-size:26px;
            text-align: center;
            color:#666;
        }
       
    }
    .close{
        cursor: pointer;
        position: absolute;
        top:100px;
        left:310px;
        width:100px;
        height:100px;
        padding:28px 0;
        border-radius:50%;
        background: #fff;
        text-align: center;
        i{
            font-size: 52px;
            color:#FF5755;
        }
    }
}
</style>