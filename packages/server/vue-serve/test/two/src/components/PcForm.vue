<template>
  <div class="form">
        <div class="formCenter">
            <div class="formTitle">免费获取学习方案</div>
            <el-form  :model="studyReqData" size="small" ref="scheme" :rules="studyRules" >
                <el-form-item prop="name">
                    <el-input v-model="studyReqData.name" placeholder="请填写姓名" maxLength="10"></el-input>
                </el-form-item>
                    <el-form-item prop="guardianTel">
                    <el-input  v-model="studyReqData.guardianTel" placeholder="请填写电话" maxLength="11"></el-input>
                </el-form-item>
                    <el-form-item prop="banjiId">
                    <el-select v-model="studyReqData.banjiId" placeholder="请选择学段"  @change="banjieChange">
                        <el-option v-for="(item,index) in banji" :label="item.name" :value="item.id" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="subjectId">
                    <el-select v-model="studyReqData.subjectId" placeholder="请选择学科">
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
                <el-form-item prop="cityCode">
                    <el-select v-model="studyReqData.cityCode" placeholder="请选择城市">
                        <el-option v-for="(item,index) in city" :label="item.name" :value="item.id" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                    <el-form-item >
                    <el-button type="primary" size="medium" @click="schemeSubmit">立即获取学习方案</el-button>
                </el-form-item>
            </el-form>
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
            subjectShow:true,
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
        function getQuery(name){
         　 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);//从?之后开始匹配如getQuery(courseid)返回一个数组["courseid=8","","8","&",index:0,input:"courseid=8"]
            if (r!=null) return unescape(r[2]); return null;
        }
        this.studyReqData.resourceType = getQuery("ch")
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
    }
}
</script>
<style lang="less" scoped>
.form{
    width:310PX;
    // height:206PX;
    background:rgba(248, 248, 248,.7);
    padding:10PX 20PX;
    border-radius:10PX;
    // position: absolute;
    // right: 50PX;
    // top:150PX;
    // z-index:99;
    .formCenter{
        padding:10PX 0 0 0;
            .formTitle{
                font-size:16PX;
                text-align: center;
                padding-bottom:10PX;
                font-weight: bold;
            }
            .el-select{
                width:100%;
            }
            .el-button--medium{
                width:100%;
                background:#FF5755;
                border-color:#FF5755;
                span{
                  color:#fff;
                }
            }
    }
}
</style>