<template>
   <div class='module'>
       <div class="content">
           <div class="title">59错题系统</div>
           <div class="describe">
               <p>心理学家盖耶认为：“谁不考虑尝试错误，不允许学生犯错误，就将错过最富成效的学习时刻。”</p>
               <p>“59错题”是龙文教育基于云计算、大数据、移动互联和O2O的模式，为一对一辅导量身打造的信息化教学系统，是目前国内最先进、最实用的一对一辅导工具。</p>
               <p>“59错题”依托龙文教育15年线下专业一对一辅导的资源，拥有两万龙文精英教师随时在线答疑、辅导，保证了学生随时想学就能学、想问就能问、问了必有答，帮助扫清所有学习盲点、疑点，真正实现学生不带疑惑上考场，最终实现高分、高效、低成本的新型学习方式—高效的移动碎片化学习。</p>
               <p>“纠错题，到龙文”是龙文教育对1对1个性化教育服务的最佳诠释，龙文教育以学生错题为切入点，让学生使用59错题APP收集错题和整理错题，养成“拍错题”的习惯，让学习过程实现全程记录，并且龙文教育老师可以据此进行极具针对性的1对1面授辅导。</p>
               <p>龙文教育的老师们根据学生上传错题的记录，来给学生1对1解答疑问，并附带着课后强化练习。学生通过“59错题”上传的错题，会自动收录到错题库中供学生记忆、复习，所以家长同样可以通过此入口，查看学生每天错题数量、错题原因、老师是否解答完成、有哪些试题已经攻克练习，及时掌握学生的学习状况。</p>
               <p>虽然现在小学对学生的成绩要求没有那么高，但是小学阶段学生良好学习习惯的养成和不良学习习惯的改善也非常重要。59错题系统立足于学生知识检测的最根本需求，将学生学习中的错题归纳整理，便于学生在学习过程中找到适合自己的一套行之有效的学习方法。而小学生很多有丢三落四的不良习惯，如果用纸质错题本来抄错题，资料往往难以保存，而且小学生也难以坚持。</p>
               <p>采用“59错题”的纠错系统，把龙文教育老师的教案充分结合学生的错题和各科知识漏洞来制定高效的1对1辅导方案。龙文教育1对1学科教师通过59错题系统，围绕59错题系统里学生专属的错题库展开固定化、标准化的教学流程，让学生提分更有保障。</p>
               <p>龙文教育学科1对1辅导老师通过以下三步来进行辅导：第一步讲授错题，第二步讲授考点，第三步相似题的练习，与此同时学生可以利用碎片化的学习时间随时随地进行复习，巩固学习效果。</p>
           </div>
       </div>
       <div class="downloadWrap">
           <div class="title"><p>59错题下载</p></div>
           <div class="down">
               <div class="btn"><a href="http://new.longwencloud.com/ewebeditor/upload/s/apk/index.html">学生端</a></div>
               <div class="btn"><a href="http://new.longwencloud.com/ewebeditor/upload/t/apk/index.html">教师端</a></div>
               <div class="btn"><a href="http://new.longwencloud.com/ewebeditor/upload/d/apk/index.html">主任端</a></div>
           </div>
       </div>
   </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  created(){

  },
  methods: {

  }
}

</script>
<style lang='less' scoped>
.module{
    width:100%;
   .content{
       width: 100%;
       padding:0 15px 20px 15px;
       .title{
           padding-left:15px;
           font-size:20px;
           margin:30px 0 15px 0;
           position: relative;
           &::after{
               content:"";
               width:3px;
               height:25px;
               position: absolute;
               left:0;
               top:0;
               background: #ef8700;
           }
       }
       .describe{
           font-size:14px;
           p{
               margin:8px 0;
               width:100%;
               text-align: justify;
               line-height: 20px;
               text-indent: 30px;
           }
           .imgWrap{
               width:100%;
               min-height:60px;
               padding:0 10px;
               text-indent: 0px;
               img{
                   width:100%;
               }
           }
       }
   }
   .downloadWrap{
       width:100%;
       .title{
            width:90%;
            margin:0 auto;
            display: flex;
            justify-content: center;
            p{
                width:100px;
                height:20px;
                position: relative;
                margin:20px 0;
                display:flex;
                align-items: center;
                justify-content: center;
                border:1px solid #ef8700;
                border-radius: 10px;
                font-size:14px;
                color:#ef8700;
                &::before{
                    display: block;
                    content:"";
                    width:120px;
                    height:1px;
                    position: absolute;
                    left:-120px;
                    top:9px;
                    background:#ef8700;

                }
                 &::after{
                    display: block;
                    content:"";
                    width:120px;
                    height:1px;
                    position: absolute;
                    right:-120px;
                    top:9px;
                    background:#ef8700;

                }
            }
       }
       .down{
            display: flex;
            justify-content: space-around;
            padding:0 10px;
           .btn{
               width:80px;
               height:26px;
               background:#ef8700;
               border-radius: 10px;
               a{
                   height:100%;
                   width:100%;
                   display:flex;
                   align-items: center;
                   justify-content: center;
                   color:#fff;


               }
           }

       }
   }
}

</style>