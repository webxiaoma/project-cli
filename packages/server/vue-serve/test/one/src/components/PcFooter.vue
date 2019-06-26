<template>
  <div class=''>
        <div class="mayFooter" :style="{'paddingBottom':(this.showForm.show&&this.showForm.scrollShow)?'80PX':'0PX'}">
            <div class="center">
               <p>龙文教育电话：400-900-6656</p>
               <p>龙文地址：北京市东城区环球贸易中心A座5层</p>
               <p>京ICP备19016392号</p>
            </div>
            
        </div>
        <div :class="(this.showForm.show&&this.showForm.scrollShow)?'submitForm show':'submitForm'">
            <div class="center">
                <div class="writeForm">
                    <el-form :inline="true" :model="bottomStudyReqData" :rules="studyRules" size="small" ref="bottomForm" class="demo-form-inline">
                        <el-form-item prop="name">
                            <el-input v-model="bottomStudyReqData.name" placeholder="请填写姓名" maxLength="10"></el-input>
                        </el-form-item>
                            <el-form-item prop="guardianTel">
                            <el-input v-model="bottomStudyReqData.guardianTel" placeholder="请填写电话" maxLength="11"></el-input>
                        </el-form-item>
                            <el-form-item prop="banjiId">
                            <el-select v-model="bottomStudyReqData.banjiId" placeholder="请选择学段" @change="banjieChangeTwo">
                                <el-option v-for="(item,index) in banji" :label="item.name" :value="item.id" :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="subjectId">
                            <el-select v-model="bottomStudyReqData.subjectId" placeholder="请选择学科">
                                    <el-option label="语文" :value="120" ></el-option>
                                    <el-option label="数学" :value="110" ></el-option>
                                    <el-option label="英语" :value="130" ></el-option>
                                    <el-option label="历史" :value="160" v-show="subjectShowTwo"></el-option>
                                    <el-option label="地理" :value="170" v-show="subjectShowTwo"></el-option>
                                    <el-option label="思想品德/政治" :value="180" v-show="subjectShowTwo"></el-option>
                                    <el-option label="物理" :value="140" v-show="subjectShowTwo"></el-option>
                                    <el-option label="化学" :value="150" v-show="subjectShowTwo"></el-option>
                                    <el-option label="生物" :value="200" v-show="subjectShowTwo"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="bottomForm">预约试听</el-button>
                        </el-form-item>
                    </el-form>
                        
                </div>
                <div class="close" @click="closeFrom">
                    <i class="el-icon-circle-close"></i>
                </div>
            </div>
           
        </div>
  </div>
</template>
<script>
import formData from '../../public/js/form.js'
export default {
  data(){
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
          subjectShowTwo:false,
          showForm:{
              show:true,
              scrollShow:false,
          },
          bottomStudyReqData:{ // 尾部请求表单
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
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
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
    this.initAnimated()
    function getQuery(name){
        　 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);//从?之后开始匹配如getQuery(courseid)返回一个数组["courseid=8","","8","&",index:0,input:"courseid=8"]
        if (r!=null) return unescape(r[2]); return null;
    }
    this.bottomStudyReqData.resourceType = getQuery("ch")
  },
  methods:{
        bottomForm(){ // 底部表单提交
           this.$refs.bottomForm.validate((valid) => {
                if (valid) {
                    this.submit(this.bottomStudyReqData)
                } 
            });
        },
         banjieChangeTwo(){
            var id = this.bottomStudyReqData.banjiId
            var ary = [1,2,3,4,5,6]
           if(ary.indexOf(id) > -1){
                this.subjectShowTwo= false;
            }else{
                this.subjectShowTwo= true;
            }
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
        closeFrom(){ // 关闭表单填写
            this.showForm.show = false;
        },
         initAnimated(){ // 初始化动画
             // 监听滚动
            document.addEventListener("scroll",(e)=>{
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                if(scrollTop > 600){
                    this.showForm.scrollShow = true;
                }else{
                    this.showForm.scrollShow = false;
                }
            })

        },
  }
}
</script>
<style lang="less" scoped>
// 底部
  .mayFooter{
      background:#E6FAFA;
      padding-bottom:80PX;
      >.center{
          width:1170PX;
          margin:0 auto;
          text-align:center;
          padding:10PX 0;
          font-size:12PX;
          p{
              margin:8PX 0;
              color:#666;
          }
      }
      
  }
  .submitForm{
      position:fixed;
      bottom:-100PX;
      left:0;
      z-index:40;
      width:100%;
      min-width: 1170PX;
      height:80PX;
      background:rgba(72,0,187,0.8);
      display:flex;
      align-items:center;
      justify-content: center;
      transition:all .4s linear;
      .center{
          width:1170PX;
          height:100%;
          margin:0 auto;
          padding-top:18PX;
          position: relative;
          .writeForm{
              height:100%;
              display:flex;
              align-items:center;
              /deep/.el-form-item--mini .el-form-item__content, .el-form-item--mini .el-form-item__label{
                  color:#fff;
              }
              .el-button--primary{
                background-color:#fff;
                color:#333;
                border-color:rgba(72, 0, 187, 0.8);
              }
          }
          .close{
              position:absolute;
              right:30PX;
              top:26PX;
              i{
                  font-size:30PX;
                  color:#fff;
              }

          }
      }
    
  }
  .show{
      bottom:0PX; 
  }
</style>