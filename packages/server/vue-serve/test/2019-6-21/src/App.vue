<template>
  <div class="activity">
      <div class="mayHeader">
          <div class="center">
              <div class="logo">
                  <img src="./assets/img/logo.png" alt="龙文logo">
              </div>
              <div class="phone">
                  咨询电话：<b>400-900-6656</b>
              </div>
          </div>
      </div>
      <div class="main">
         <!-- 第一屏 -->
         <div class="screenOne">
           <div class="bgImg">
              <img  v-lazy="'/static/public/img/top.png'" alt="">
           </div>
         </div>
         <!-- 第二屏 -->
         <div class="screenTwo">
             <div class="center">
                 <div class="title">
                   <p>龙文教育 · 因材施教</p>
                   <p class="bottomLine"></p>
                 </div>
                 <div class="dataList">
                    <div class="dataItem">
                        <p class="top"><b>1v1</b></p>
                        <p>教育品牌</p>
                    </div>
                    <div class="dataItem">
                        <p class="top"><b>20年</b></p>
                        <p>辅导经验</p>
                    </div>
                    <div class="dataItem">
                        <p class="top"><b>21+</b></p>
                        <p>区域城市</p>
                    </div>
                    <div class="dataItem">
                        <p class="top"><b>500+</b></p>
                        <p>学习校区</p>
                    </div>
                    <div class="dataItem">
                        <p class="top"><b>985/211</b></p>
                        <p>教师团队</p>
                    </div>
                    <div class="dataItem">
                        <p class="top"><b>100W+</b></p>
                        <p>受益学生</p>
                    </div>
                    
                 </div>
                 <div class='lineOne'>
                    <div class="lineItem">
                          <img  v-lazy="'/static/public/img/2-1.png'" alt="龙文教育">
                    </div>
                     <div class="lineItem">
                          <img  v-lazy="'/static/public/img/2-1.png'" alt="龙文教育">
                    </div>
                     <div class="lineItem">
                          <img  v-lazy="'/static/public/img/2-3.png'" alt="龙文教育">
                    </div>
                 </div>
                  <div class='lineTwo'>
                    <div class="lineTwoItem">
                        <img  v-lazy="'/static/public/img/2-6.png'" alt="龙文教育">
                        <p class="shade"></p>
                    </div>
                     <div class="lineTwoItem">
                        <img  v-lazy="'/static/public/img/2-6.png'" alt="龙文教育">
                        <p class="shade"></p>
                    </div>
                     <div class="lineTwoItem">
                        <img  v-lazy="'/static/public/img/2-6.png'" alt="龙文教育">
                        <p class="shade"></p>
                    </div>
                     <div class="lineTwoItem">
                        <img  v-lazy="'/static/public/img/2-7.png'" alt="龙文教育">
                        <p class="shade"></p>
                    </div>
                     <div class="lineTwoItem">
                        <img  v-lazy="'/static/public/img/2-8.png'" alt="龙文教育">
                        <p class="shade"></p>
                    </div>
                 </div>
                 <div class="lineThreeTtem">
                   <div class="item one">
                      <div class="imgWrap">
                          <img  v-lazy="'/static/public/img/2-9.png'" alt="龙文教育">
                      </div>
                      <div class="text">
                       厌学、偏科、拖拉、成绩提升乏力、基础差、没自信、跟不上课？
                      </div>
                   </div>
                     <div class="item two">
                      <div class="imgWrap">
                          <img  v-lazy="'/static/public/img/2-10.png'" alt="龙文教育">
                      </div>
                      <div class="text">
                      ①不爱学习，对学习提不起兴趣 <br/> ②上课时注意力不集中,爱走神
                      </div>
                   </div>
                     <div class="item three">
                      <div class="imgWrap">
                          <img  v-lazy="'/static/public/img/2-11.png'" alt="龙文教育">
                      </div>
                      <div class="text">
                       ①学习效率低，写作业慢，总是拖拖拉拉 ②大考就发挥失常 ③学习成绩好，目标名校，难以提升？
                      </div>
                   </div>
                     <div class="item four">
                      <div class="imgWrap">
                          <img  v-lazy="'/static/public/img/2-12.png'" alt="龙文教育">
                      </div>
                      <div class="text">
                       ①知识点掌握不牢 ②学习方法出现偏差 ③考试能力不足
                      </div>
                   </div>
                 </div>
                 <PcBtn></PcBtn>
             </div>
         </div>

         <!-- 第三屏 -->
         <div class="screenThree">
              <div class="center">
                  <div class="title">
                      <p>攻克难题 · 三项扶助您成功</p>
                      <p class="bottomLine"></p>
                  </div>
                  <div class="list">
                      <div class="item one">
                          <div class="imgWrap">
                             <img  v-lazy="'/static/public/img/3-1.png'" alt="">
                          </div>
                          <div class="content">
                            直击失分症结，查找学科漏洞，消除知识断层及盲点，提升薄弱学科知识水平。
                          </div>
                          <div class="btn">
                             在线咨询
                          </div>
                      </div>
                       <div class="item two">
                          <div class="imgWrap">
                             <img  v-lazy="'/static/public/img/3-2.png'" alt="">
                          </div>
                          <div class="content">
                            进行学科诊断，找到适合自己的学习方法， 加强考试技巧，提升解题效率。
                          </div>
                          <div class="btn">
                             在线咨询
                          </div>
                      </div>
                       <div class="item three">
                          <div class="imgWrap">
                             <img  v-lazy="'/static/public/img/3-3.png'" alt="">
                          </div>
                          <div class="content">
                             点拨要点，提高解题能力，锻炼解题思维， 做好考后规划总结， 激发学习潜能。
                          </div>
                          <div class="btn">
                             在线咨询
                          </div>
                      </div>
                  </div>
              </div>
              <div class="bgImgWrap">
                  <img  v-lazy="'/static/public/img/rocket.png'" alt="">
              </div>
         </div>
          

         <!-- 第四屏 -->
         <div class="screenFour">
             <div class="center">
                  <div class="title">
                      <p>专注提升孩子学习成绩</p>
                      <p class="bottomLine"></p>
                  </div>
                  <div class="list">
                     <div class="item">
                       <div class="content">
                          <div class="number">01</div>
                          <div class="right">
                            <div class="subTitle">课前放电影</div>
                            <div class="message">带着学生回顾所学教学内容，及时查漏补缺。</div>
                          </div>
                       </div>
                     </div>
                     <div class="item">
                       <div class="content">
                          <div class="number">02</div>
                          <div class="right">
                            <div class="subTitle">错题重现 讲透错题</div>
                            <div class="message">讲透错题，通过相似题练习加强巩固，总结升华解题方法。</div>
                          </div>
                       </div>
                     </div>
                      <div class="item">
                       <div class="content">
                          <div class="number">03</div>
                          <div class="right">
                            <div class="subTitle">复习旧题 引入新课</div>
                            <div class="message">教师讲新课之前，先让学生以听、写等活动方式复习旧知识。</div>
                          </div>
                       </div>
                     </div>
                      <div class="item">
                       <div class="content">
                          <div class="number">04</div>
                          <div class="right">
                            <div class="subTitle">讲授新课</div>
                            <div class="message">新课讲解，边讲边练，每道例题进行方法总结并归纳。</div>
                          </div>
                       </div>
                     </div>
                      <div class="item">
                       <div class="content">
                          <div class="number">05</div>
                          <div class="right">
                            <div class="subTitle">学生自编题</div>
                            <div class="message">让学生利用变式、类比等方法出一道小题，与教师共同探讨。</div>
                          </div>
                       </div>
                     </div>
                      <div class="item">
                       <div class="content">
                          <div class="number">06</div>
                          <div class="right">
                            <div class="subTitle">三步一回头</div>
                            <div class="message">及时复习所学过的知识点，加强记忆，巩固解题技巧和方法。</div>
                          </div>
                       </div>
                     </div>
                      <div class="item">
                       <div class="content">
                          <div class="number">07</div>
                          <div class="right">
                            <div class="subTitle">课堂总结</div>
                            <div class="message">教师对整个课堂行为过程，进行思考性回忆及总结。</div>
                          </div>
                       </div>
                     </div>
                      <div class="item">
                       <div class="content">
                          <div class="number">08</div>
                          <div class="right">
                            <div class="subTitle">及时鼓励学生</div>
                            <div class="message">激发学生的内驱力，增强学生的信心，建立良好的教学氛围。</div>
                          </div>
                       </div>
                     </div>
                      <div class="item">
                       <div class="content">
                          <div class="number">09</div>
                          <div class="right">
                            <div class="subTitle">布置三类作业</div>
                            <div class="message">本节课的课后巩固练习+错题作业+预习下节课内容。</div>
                          </div>
                       </div>
                     </div>
                      <div class="item">
                       <div class="content">
                          <div class="number">10</div>
                          <div class="right">
                            <div class="subTitle">阶段性测试</div>
                            <div class="message">对学生及时进行查漏补缺，对教学行为进行阶段性总结与反思。</div>
                          </div>
                       </div>
                     </div>
                  </div>

                  <div class="btnBottom">
                    <Pc-Btn></Pc-Btn>
                  </div>
             </div>
         </div>


          <!-- 第五屏 -->
          <div class="screenFive">
             <div class="center">
                  <div class="title">
                      <p>龙文·辅导流程</p>
                      <p class="bottomLine"></p>
                  </div>
                  <div class="list">
                     <div class="item">
                          <div class="singleFlow">
                              <p><img src="@/assets/img/11.png" alt=""></p>
                          </div>
                          <div class="text">
                                <p class="titleText">预约</p>
                          </div>
                         <div class="btn">
                            <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                免费获取
                            </a>
                        </div>
                     </div>
                     <div class="item">
                          <div class="singleFlow">
                              <p><img src="@/assets/img/12.png" alt=""></p>
                          </div>
                          <div class="text">
                                <p class="titleText">制定辅导 <br/>方案计划</p>
                                <p>根据测评结果，为学生量身定做学习规划及方案</p>
                          </div>
                          <div class="btn">
                              <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                  免费获取
                              </a>
                          </div>
                     </div>
                     <div class="item">
                          <div class="singleFlow">
                              <p><img src="@/assets/img/13.png" alt=""></p>
                          </div>
                          <div class="text">
                                <p class="titleText">选择教师 <br/>上课</p>
                                <p>学生根据自身要求及特点，选取适宜教师</p>
                          </div>
                          <div class="btn">
                              <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                  免费获取
                              </a>
                          </div>
                      </div>
                      <div class="item">
                          <div class="singleFlow">
                              <p><img src="@/assets/img/14.png" alt=""></p>
                          </div>
                          <div class="text">
                                <p class="titleText">家长会</p>
                                <p>及时与家长沟通</p>
                          </div>
                          <div class="btn">
                              <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                  免费获取
                              </a>
                          </div>
                      </div>
                      <div class="item">
                          <div class="singleFlow">
                              <p><img src="@/assets/img/14.png" alt=""></p>
                          </div>
                          <div class="text">
                                <p class="titleText">测评</p>
                                <p>金牌教师根据 学生学习能力，学习水平 进行个性化测评</p>
                          </div>
                          <div class="btn">
                              <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                  免费获取
                              </a>
                          </div>
                      </div>

                      <div class="item">
                          <div class="singleFlow">
                              <p><img src="@/assets/img/14.png" alt=""></p>
                          </div>
                          <div class="text">
                                <p class="titleText">报名缴费、 制定辅导协议</p>
                                <p>同时开具龙文专用收据以及正式发票</p>
                          </div>
                          <div class="btn">
                              <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                  免费获取
                              </a>
                          </div>
                      </div>
                      <div class="item">
                          <div class="singleFlow">
                              <p><img src="@/assets/img/14.png" alt=""></p>
                          </div>
                          <div class="text">
                                <p class="titleText">上课</p>
                                <p>教师根据学生情况， 精心准备</p>
                          </div>
                          <div class="btn">
                              <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                  免费获取
                              </a>
                          </div>
                      </div>
                      <div class="item">
                          <div class="singleFlow">
                              <p><img src="@/assets/img/14.png" alt=""></p>
                          </div>
                          <div class="text">
                                <p class="titleText">考试</p>
                                <p>分析学生弱项， 不断攀升学习成绩</p>
                          </div>
                          <div class="btn">
                              <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                  免费获取
                              </a>
                          </div>
                      </div>
                     
                  </div>
             </div>
          </div>

          
          <!-- 第六屏 -->
          <div class="screenSix">
              <div class="center">
                  <div class="title">
                      <p>龙文·六步教学法</p>
                      <p class="bottomLine"></p>
                  </div>
                  <div class="list">
                        <div class="line">
                            <div class="item">
                               <div class="flag">
                                  <img  v-lazy="'/static/public/img/to1p.png'" alt="">
                               </div>
                               <div class="top">01 诊</div>
                               <div class="bottom">通过免费测评，了解学生的真实水平，思维能力，发现知识疏漏，定辅导规划</div>
                            </div>
                             <div class="item">
                               <div class="flag">
                                  <img  v-lazy="'/static/public/img/to1p.png'" alt="">
                               </div>
                               <div class="top">01 诊</div>
                               <div class="bottom">通过免费测评，了解学生的真实水平，思维能力，发现知识疏漏，定辅导规划</div>
                            </div>
                        </div>
                        <div class="line">
                            <div class="item">
                               <div class="flag">
                                  <img  v-lazy="'/static/public/img/to1p.png'" alt="">
                               </div>
                               <div class="top">01 诊</div>
                               <div class="bottom">通过免费测评，了解学生的真实水平，思维能力，发现知识疏漏，定辅导规划</div>
                            </div>
                             <div class="item">
                               <div class="flag">
                                  <img  v-lazy="'/static/public/img/to1p.png'" alt="">
                               </div>
                               <div class="top">01 诊</div>
                               <div class="bottom">通过免费测评，了解学生的真实水平，思维能力，发现知识疏漏，定辅导规划</div>
                            </div>
                        </div>
                        <div class="line">
                            <div class="item">
                               <div class="flag">
                                  <img  v-lazy="'/static/public/img/to1p.png'" alt="">
                               </div>
                               <div class="top">01 诊</div>
                               <div class="bottom">通过免费测评，了解学生的真实水平，思维能力，发现知识疏漏，定辅导规划</div>
                            </div>
                             <div class="item">
                               <div class="flag">
                                  <img  v-lazy="'/static/public/img/to1p.png'" alt="">
                               </div>
                               <div class="top">01 诊</div>
                               <div class="bottom">通过免费测评，了解学生的真实水平，思维能力，发现知识疏漏，定辅导规划</div>
                            </div>
                        </div>
                  </div>
                  <div class="imgWrap">
                     <img  v-lazy="'/static/public/img/people.png'" alt="">
                  </div>
                  <div class="btnBottom">
                    <Pc-Btn></Pc-Btn>
                  </div>
              </div>
          </div>

          <!-- 第七屏 -->
          <div class="screenSeven">
              <div class="center">
                  <div class="title">
                      <p>与传统机构对比</p>
                      <p class="bottomLine"></p>
                  </div>
                  <div class="list">
                     <div class="item">

                     </div>
                  </div>
              </div>
          </div>











      </div>
      <div>

      </div>
  </div>
</template>
<script>
import {PcBtn} from './components'
export default {
  data(){
    return {
        
    }
  },
  created(){
    //  console.log()
     this.$root.isPc = true
  },
  components:{
    PcBtn,
  }
}
</script>


<style lang="less" scoped>
@import "./theme/base.css";

.activity{
   width:100%;
   min-height:6000px;
   background:#E6FAFA;
   .mayHeader{
      width:100%;
      margin:0 auto;
      background:#fff;
      .center{
          width:1100PX;
          height: 60PX;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .logo{
             width:150PX;
             img{
               width:100%;
             }
          }
          .phone{
              height:22PX;
              display:flex;
              align-items: center;
              padding:0PX 10PX;
              border:1PX solid #AB23BE;
              border-radius:40PX;
              color:#FD2B5C;
              font-size:14PX;
          }
      }
    }


    .main{
       // 第一屏
        min-width:1100PX;
        .screenOne{
          width:100%;
          .bgImg{
              img{
                width:100%;
              }
          }
        }


      //  第二屏
      .screenTwo{
          width:100%;
          position:relative;
          .center{
              width:1100PX;
              position:relative;
              top:-200px;
              z-index:9;
              background: #fff;
              margin:0 auto;
              padding:50px 0;
              border-radius:20px;
         .dataList{
                  display:flex;
                  justify-content: space-between;
                  .dataItem{
                    width:160px;
                    display:flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .top{
                      margin-bottom:5px;
                      font-size:34px;
                      background-image:linear-gradient(to left,#F7B52C,#fd8403,rgb(252, 64, 64)); 
                      background-clip:text; 
                      text-fill-color:transparent; 
                      background-image:-webkit-linear-gradient(to left,#F7B52C,#fd8403,rgb(252, 64, 64)); 
                      -webkit-background-clip:text; 
                      -webkit-text-fill-color:transparent; 
                    }
                    p{
                      width:100%;
                      text-align: center;
                      font-size:24px;
                      color:#333;
                    }
                  }
              }
              .lineOne{
                  width:100%;
                  margin:40px 0px;
                  display: flex;
                  justify-content: space-between;
                  .lineItem{
                    border-radius:12px;
                    transition: 0.5s;
                    cursor: pointer;
                    img{
                      width:100%;
                    }
                    &:hover{
                      box-shadow: 0px 0px 14px 2px rgb(206, 206, 206);
                    }
                  }
              }
              .lineTwo{
                .lineOne;
                .lineTwoItem{
                  position: relative;
                  cursor: pointer;
                  .shade{
                    transition: 0.4s;
                    opacity: 0;
                    width:100%;
                    height:100%;
                    border-radius: 10px;
                    position: absolute;
                    top:0;
                    left:0px;
                    z-index: 9;
                    background:rgba(1,1,1,.7);
                    
                  }
                  &:hover{
                    .shade{
                      opacity: 1;
                    }
                  }
                }
              }
              .lineThreeTtem{
                .lineOne;
                padding:0 10px 30px 10px;
                .item{
                  width:254px;
                  height:330px;
                  padding:10px 0;
                  border-radius:8px;
                  transition: 0.5s;
                  &:hover{
                    box-shadow: 0px 0px 14px 2px rgb(206, 206, 206);
                    transform: translateY(-10px);
                  }
                  .imgWrap{
                      width:234px;
                      height:120px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin:0 auto;
                      margin-bottom:10px;
                      background:rgba(255,255,255,1);
                  }
                  .text{
                    width:217px;
                    margin:0 auto;
                    text-align: justify;
                    font-size:24px;
                    font-family:NotoSansHans-Regular;
                    font-weight:400;
                    line-height: 34px;
                    color:rgba(255,255,255,1);
                  }
                }
                .one{
                  background:linear-gradient(120deg,rgba(254,157,187,1),rgba(238,92,138,1));
                }
                .two{
                  background:linear-gradient(120deg,rgba(144,207,255,1),rgba(74,161,226,1));
                }
                .three{
                  background:linear-gradient(120deg,rgba(124,237,255,1),rgba(117,207,230,1));
                }
                .four{
                  background:linear-gradient(120deg,rgba(255,232,124,1),rgba(233,202,60,1));
                }
              }
          }
      }


        // 第三屏
        .screenThree{
            width:100;
            position:relative;
            .list{
              width:100%;
              position:relative;
              z-index:10;
              display:flex;
              justify-content:space-between;
               .item{
                  width:347px;
                  height:315px;
                  background:rgba(255,255,255,1);
                  border-radius:8px;
                  transition:.3s;
                  &:hover{
                    box-shadow: 0px 0px 14px 2px rgb(206, 206, 206);
                    transform: translateY(-10px);
                  }
                  .imgWrap{
                     min-height:143px;
                  }
                  .content{
                    width:298px;
                    height:106px;
                    margin:0 auto;
                    text-align:justify;
                    font-size:20px;
                    font-weight:400;
                    color:rgba(136,136,136,1);
                    line-height:28px;
                  }
                  .btn{
                    width:170px;
                    height:36px;
                    cursor: pointer;
                    margin:0 auto;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    color:#fff;
                    font-size:20px;
                    background:rgba(255,87,85,1);
                    box-shadow:0px 4px 10px 0px rgba(242,53,51,0.4);
                    border-radius:18px;
                    box-shadow: 0px 7px 18px 0px rgba(242, 53, 51, 0.52);
                    &:hover{
                      opacity:0.7;
                    }
                  }
               }
            }
            .bgImgWrap{
               position:absolute;
               right:0;
               bottom:-290px;
               z-index:2;
            }
        }

        // 第四屏
        .screenFour{
            width:100%;
            margin-top:180px;
            position:relative;
            .center{
               position:relative;
               z-index:10;
               height:1350px;
               background:url("./assets/img/book.png") no-repeat center top;
               .title{
                 padding-top:40px;
               }
            }
            .list{
              display:flex;
              flex-wrap:wrap;
              justify-content:space-between;
              padding:0 60px;
              .item{
                  width:462px;
                  height:152px;
                  margin-top:40px;
                  background:rgba(255,255,255,1);
                  border:2px solid rgba(255,87,85,1);
                  border-radius:12px;
                  background:#9393FF;
                  transition:.3s;
                   &:hover{
                    box-shadow: 0px 0px 14px 2px rgb(206, 206, 206);
                  }
                 .content{
                    display:flex;
                    width:458px;
                    height:138px;
                    margin-top:10px;
                    background:rgba(255,255,255,1);
                    border:1px solid rgba(255,87,85,1);
                    border-radius:12px;
                    .number{
                      width:120px;
                      height:100%;
                      display:flex;
                      justify-content:center;
                      align-items:center;
                      font-size:64px;
                      font-weight:500;
                      color:rgba(167,167,255,1);
                    }
                     .right{
                       width:300px;
                          .subTitle{
                              margin:10px 0;
                              font-size:28px;
                              font-weight:500;
                              color:rgba(255,87,85,1);
                              line-height:31px;
                          }
                          .message{
                              font-size:20px;
                              font-weight:400;
                              color:rgba(136,136,136,1);
                              line-height:30px;
                          }
                       }
                 }
              }
            }
            .btnBottom{
              margin-top:80px;
            }
        }

        // 第五屏
        .screenFive{
            padding-top:260px;
            background:url('./assets/img/bg1.png') no-repeat center top;
            background-clip:border-box;
            .list{
              margin-top:130px;
              display:flex;
              flex-wrap:wrap;
              justify-content:space-between;
              .item{
                width:262px;
                height:334px;
                margin-top:80px;
                background:rgba(255,255,255,1);
                border-radius:8px;
                position:relative;
                transition:all .3s linear;
                &:hover{
                  box-shadow: 0px 0px 14px 2px rgb(206, 206, 206);
                }
                  .singleFlow{
                        width:100px;
                        height:100px;
                        padding:5px;
                        position: absolute;
                        top:-48px;
                        left:85px;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        border:3px solid rgba(255,87,85,1);
                        border-radius:50%;
                        background: #fff; 
                        transition:all .3s linear;
                        &:hover{
                            transform: scale(1.2);
                            -webkit-transform: scale(1.2);
                        }
                        p{
                            position:relative;
                            padding:8px;
                            border-radius:50%;
                            margin:0;
                            img{
                             
                                border-radius:50%;
                            }
                        }
                        
                  }
                  .text{
                      width:100%;
                      height:260px;
                      padding:60px 10px 0 10px;
                      color:#666;
                      .titleText{
                          height:80px;
                          display:flex;
                          align-items:center;
                          justify-content:center;
                          padding:0 40px;
                          font-size:26px;
                          color:#111;
                          margin-bottom:10px;
                      }
                      p{
                          font-size:18px;
                          color:rgba(136,136,136,1);
                          text-align:center;
                      }
                  }
                  .btn{
                      width:145px;
                      height:46px;
                      margin:0 auto;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      cursor: pointer;
                      background:rgba(255,87,85,1);
                      box-shadow:0px 7px 18px 0px rgba(242,53,51,0.52);
                      border-radius:23px;
                      &:hover{
                          opacity: 0.8;
                      }
                      a{
                        display:block;
                        color:#fff;
                        font-size:18px;
                      }
                  }
              }
            }
        }

        
        // 第六屏
        .screenSix{
          margin-top:150px;
          .center{
            height:1100px;
            position:relative;
            background:url("./assets/img/6-1.png") no-repeat center center;
             .list{
               position:relative;
               top:70px;
               z-index:9;
               .line{
                 display:flex;
                 justify-content:space-between;
                 margin-bottom:80px;
                 padding:0 50px;
                 &:nth-of-type(2){
                    padding:0 0;
                 }
               }
               .item{
                  width:454px;
                  height:150px;
                  position:relative;
                  background:rgba(255,255,255,1);
                  border-radius:14px;
                  .flag{
                    position:absolute;
                  }
                  .top{
                    width:454px;
                    height:52px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    background:rgba(167,167,255,1);
                    border-radius:14px 14px 0 0;
                    font-size:36px;
                    font-weight:bold;
                    color:rgba(255,255,255,1);
                  }
                  .bottom{
                    width:100%;
                    padding:10px 25px;
                    text-align:justify;
                    font-size:20px;
                    color:rgba(136,136,136,1);
                    line-height:28px;
                  }
               }
             }
             .imgWrap{
                position:absolute;
                bottom:140px;
                left:200px;
             }
             .btnBottom{
               margin-top:280px;
             }
          }
         
        }

        // 第七屏
        .screenSeven{
            margin-top:80px;
           .center{
               position:relative;
               z-index:10;
               height:1350px;
               background:url("./assets/img/book.png") no-repeat center top;
               .title{
                 padding-top:40px;
               }
           }
        }

    }

    // 图片处理
    img[lazy=loading] { 
      background:#ccc;
    }
    img[lazy=error] { 
      background:#ccc;
    }

    // 标题
    .center{
      width:1100px;
      margin:0 auto;
      .title{
          opacity:1;
          width:600PX;
          text-align:center;
          margin:0 auto 60PX auto;
          p{
              color:#3E3A39;
              font-size:30PX;
          }
          .bottomLine{
              width:40PX;
              height:4px;
              background:red;
              margin:10px auto;
              border-radius:4px;
            
          }
      }
    }
}
</style>
