<template>
  <div class="activity">
      <div class="mayHeader">
          <div class="center">
              <div class="logo">
                  <img src="@/assets/img/logo.png" alt="龙文logo" v-if="isPc">
                  <img src="@/assets/m-img/logo.png" class="mobileLogo" alt="龙文logo" v-else>
              </div>
              <div class="phone">
                  咨询电话：<b>400-90122-1213223</b>
              </div>
          </div>
      </div>
      <div class="main">
         <!-- 第一屏 -->
         <div class="screenOne">
           <div class='center'>
               <div class="topForm" v-if="isPc">
                  <Pc-Form></Pc-Form>
              </div>
           </div>
         </div>
         <!-- 第二屏 -->
         <div class="screenTwo">
             <div class="center">
                 <div class="title">
                   <p>龙文教育111因材施教</p>
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
                    <div class="lineItem" @click="isShowFloatForm = true">
                        <img  v-url="`${imgBaseUrl}/public/img/2-1.png`" alt="龙文教育" id="testImg">
                    </div>
                     <div class="lineItem" @click="isShowFloatForm = true">
                        <img  v-url="`${imgBaseUrl}/public/img/2-2.png`" alt="龙文教育">
                    </div>
                     <div class="lineItem" @click="isShowFloatForm = true">
                        <img  v-url="`${imgBaseUrl}/public/img/2-3.png`" alt="龙文教育">
                    </div>
                 </div>
            
                 <div class='lineTwo'>
                    <swiper :options="swiperOptionOne">
                          <!-- slides -->
                          <swiper-slide>
                               <div class="lineTwoItem" @click="isShowFloatForm = true">
                                    <img  v-url="`${imgBaseUrl}/public/m-img/2-6.jpg`" alt="龙文教育">
                                    <p class="shade"></p>
                               </div>
                          </swiper-slide>
                           <swiper-slide>
                               <div class="lineTwoItem" @click="isShowFloatForm = true">
                                    <img  v-url="`${imgBaseUrl}/public/m-img/2-7.jpg`" alt="龙文教育">
                                    <p class="shade"></p>
                               </div>
                          </swiper-slide>
                           <swiper-slide>
                               <div class="lineTwoItem" @click="isShowFloatForm = true">
                                    <img  v-url="`${imgBaseUrl}/public/m-img/2-8.jpg`" alt="龙文教育">
                                    <p class="shade"></p>
                               </div>
                          </swiper-slide>
                           <swiper-slide>
                               <div class="lineTwoItem" @click="isShowFloatForm = true">
                                    <img  v-url="`${imgBaseUrl}/public/m-img/2-9.jpg`" alt="龙文教育">
                                    <p class="shade"></p>
                               </div>
                          </swiper-slide>
                           <swiper-slide>
                               <div class="lineTwoItem" @click="isShowFloatForm = true">
                                    <img  v-url="`${imgBaseUrl}/public/m-img/2-10.jpg`" alt="龙文教育">
                                    <p class="shade"></p>
                               </div>
                          </swiper-slide>
                           <swiper-slide>
                               <div class="lineTwoItem" @click="isShowFloatForm = true">
                                    <img  v-url="`${imgBaseUrl}/public/m-img/2-11.jpg`" alt="龙文教育">
                                    <p class="shade"></p>
                               </div>
                          </swiper-slide>
                      </swiper>
                 </div>
                 <!-- pc -->
                 <div class="lineThreeTtem" v-if="isPc">
                   <div class="item one">
                      <div class="imgWrap">
                          <img  v-url="`${imgBaseUrl}/public/m-img/2-2.png`" alt="龙文教育">
                      </div>
                      <div class="text">
                       厌学、偏科、拖拉、成绩提升乏力、基础差、没自信、跟不上课？
                      </div>
                   </div>
                     <div class="item two">
                      <div class="imgWrap">
                          <img  v-url="`${imgBaseUrl}/public/m-img/2-3.png`" alt="龙文教育">
                      </div>
                      <div class="text">
                      ①不爱学习，对学习提不起兴趣 <br/> ②上课时注意力不集中,爱走神
                      </div>
                   </div>
                     <div class="item three">
                      <div class="imgWrap">
                         <img  v-url="`${imgBaseUrl}/public/m-img/2-4.png`" alt="龙文教育">
                      </div>
                      <div class="text">
                       ①学习效率低，写作业慢，总是拖拖拉拉 ②大考就发挥失常 ③学习成绩好，目标名校，难以提升？
                      </div>
                   </div>
                     <div class="item four">
                      <div class="imgWrap">
                          <img  v-url="`${imgBaseUrl}/public/m-img/2-5.png`" alt="龙文教育">
                      </div>
                      <div class="text">
                       ①知识点掌握不牢 ②学习方法出现偏差 ③考试能力不足
                      </div>
                   </div>
                 </div>
                <Pc-Btn v-if="isPc"></Pc-Btn>

             </div>
             <!-- mobile -->
                <div class="lineThreeTtem" v-if="!isPc">
                     <swiper :options="swiperOptionTwo" >
                           <swiper-slide>
                                <div class="item one">
                                    <div class="imgWrap">
                                        <img  v-url="`${imgBaseUrl}/public/m-img/2-2.png`" alt="龙文教育">
                                    </div>
                                    <div class="text">
                                    厌学、偏科、拖拉、成绩提升乏力、基础差、没自信、跟不上课？
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item two">
                                    <div class="imgWrap">
                                        <img  v-url="`${imgBaseUrl}/public/m-img/2-3.png`" alt="龙文教育">
                                    </div>
                                    <div class="text">
                                    ①不爱学习，对学习提不起兴趣 <br/> ②上课时注意力不集中,爱走神
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item three">
                                    <div class="imgWrap">
                                        <img  v-url="`${imgBaseUrl}/public/m-img/2-4.png`" alt="龙文教育">
                                    </div>
                                    <div class="text">
                                    ①学习效率低，写作业慢，总是拖拖拉拉 ②大考就发挥失常 ③学习成绩好，目标名校，难以提升？
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item four">
                                    <div class="imgWrap">
                                        <img  v-url="`${imgBaseUrl}/public/m-img/2-5.png`" alt="龙文教育">
                                    </div>
                                    <div class="text">
                                    ①知识点掌握不牢 ②学习方法出现偏差 ③考试能力不足
                                    </div>
                                </div>
                            </swiper-slide>
                     </swiper>
                     <div class="swiperBtnTwo">
                         <div class="swiper-button-prev">
                             <i class="el-icon-arrow-left"></i>
                         </div>
                        <div class="swiper-button-next">
                            <i class="el-icon-arrow-right"></i>
                        </div>
                     </div>
                 </div>
                 <Pc-Btn v-if="!isPc"></Pc-Btn>
               
         </div>

         <!-- 第三屏 攻克难题 · 三项扶助您成功-->
         <div class="screenThree">
              <div class="center">
                  <div class="title">
                      <p>攻克难题 · 三项扶助您成功</p>
                      <p class="bottomLine"></p>
                  </div>
                  <div class="list">
                      <div class="item one">
                          <div class="imgWrap">
                             <img  v-url="isPc?`${imgBaseUrl}/public/img/3-2.png`:`${imgBaseUrl}/public/m-img/3-2.png`" alt="">
                          </div>
                          <div class="content">
                            直击失分症结，查找学科漏洞，消除知识断层及盲点，提升薄弱学科知识水平。
                          </div>
                          <div class="btn" >
                              <a href="javascript:;"  onclick="doyoo.util.openChat('g=10077796');return false;">
                                  在线咨询
                              </a>
                          </div>
                      </div>
                       <div class="item two">
                          <div class="imgWrap">
                             <img  v-url="isPc?`${imgBaseUrl}/public/img/3-3.png`:`${imgBaseUrl}/public/m-img/3-3.png`" alt="">
                          </div>
                          <div class="content"  onclick="doyoo.util.openChat('g=10077796');return false;">
                            进行学科诊断，找到适合自己的学习方法， 加强考试技巧，提升解题效率。
                          </div>
                          <div class="btn">
                             <a href="javascript:;"  onclick="doyoo.util.openChat('g=10077796');return false;">
                                  在线咨询
                              </a>
                          </div>
                      </div>
                       <div class="item three">
                          <div class="imgWrap">
                             <img v-url="isPc?`${imgBaseUrl}/public/img/3-4.png`:`${imgBaseUrl}/public/m-img/3-4.png`" alt="">
                          </div>
                          <div class="content">
                             点拨要点，提高解题能力，锻炼解题思维， 做好考后规划总结， 激发学习潜能。
                          </div>
                          <div class="btn"  onclick="doyoo.util.openChat('g=10077796');return false;">
                               <a href="javascript:;"  onclick="doyoo.util.openChat('g=10077796');return false;">
                                  在线咨询
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="bgImgWrap">
                  <img  v-url="isPc?`${imgBaseUrl}/public/img/rocket.png`:`${imgBaseUrl}/public/m-img/3-1.png`" alt="">
              </div>
         </div>
          

         <!-- 第四屏 -->
         <div class="screenFour">
             <div class="center">
                  <div class="title">
                      <p>提升孩子学习成绩</p>
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
                            <div class="subTitle" v-if="isPc">错题重现 讲透错题</div>
                            <div class="subTitle" v-if="!isPc">错题重现 <br/> 讲透错题</div>
                            <div class="message">讲透错题，通过相似题练习加强巩固，总结升华解题方法。</div>
                          </div>
                       </div>
                     </div>
                      <div class="item">
                       <div class="content">
                          <div class="number">03</div>
                          <div class="right">
                            <div class="subTitle" v-if="isPc">复习旧题 引入新课</div>
                            <div class="subTitle" v-if="!isPc">复习旧题<br/> 引入新课</div>
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
          <div class="screenFive" >
             <!-- <div class="bgImgWrap" v-if="!isPc">
                  <img  v-url="`${imgBaseUrl}/public/m-img/5-2.png`" alt="">
              </div> -->
             <div class="center">
                  <div class="title">
                      <p>龙文·辅导流程</p>
                      <p class="bottomLine"></p>
                  </div>
                  <div class="list" v-if="isPc">
                     <div class="item">
                          <div class="singleFlow">
                              <p><img src="@/assets/m-img/11.jpg" alt=""></p>
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
                              <p><img src="@/assets/m-img/12.jpg" alt=""></p>
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
                              <p><img src="@/assets/m-img/13.jpg" alt=""></p>
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
                              <p><img src="@/assets/m-img/14.jpg" alt=""></p>
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
                              <p><img src="@/assets/m-img/15.jpg" alt=""></p>
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
                              <p><img src="@/assets/m-img/16.jpg" alt=""></p>
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
                              <p><img src="@/assets/m-img/17.jpg" alt=""></p>
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
                              <p><img src="@/assets/m-img/18.jpg" alt=""></p>
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
                  <div class="list" v-if="!isPc">
                        <swiper :options="swiperOptionThree" >
                            <swiper-slide>
                                <div class="item">
                                    <div class="singleFlow">
                                        <p><img src="@/assets/m-img/11.jpg" alt=""></p>
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
                            </swiper-slide>
                           <swiper-slide>
                                <div class="item">
                                    <div class="singleFlow">
                                        <p><img src="@/assets/m-img/12.jpg" alt=""></p>
                                    </div>
                                    <div class="text">
                                            <p class="titleText">制定辅导 <br/>方案计划</p>
                                    </div>
                                    <div class="btn">
                                        <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                            免费获取
                                        </a>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item">
                                    <div class="singleFlow">
                                        <p><img src="@/assets/m-img/13.jpg" alt=""></p>
                                    </div>
                                    <div class="text">
                                            <p class="titleText">选择教师 <br/>上课</p>
                                    </div>
                                    <div class="btn">
                                        <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                            免费获取
                                        </a>
                                    </div>
                                </div>
                            </swiper-slide>
                             <swiper-slide>
                               <div class="item">
                                    <div class="singleFlow">
                                        <p><img src="@/assets/m-img/14.jpg" alt=""></p>
                                    </div>
                                    <div class="text">
                                            <p class="titleText">家长会</p>
                                    </div>
                                    <div class="btn">
                                        <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                            免费获取
                                        </a>
                                    </div>
                                </div>
                            </swiper-slide>
                             <swiper-slide>
                                <div class="item">
                                    <div class="singleFlow">
                                        <p><img src="@/assets/m-img/15.jpg" alt=""></p>
                                    </div>
                                    <div class="text">
                                            <p class="titleText">测评</p>
                                    </div>
                                    <div class="btn">
                                        <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                            免费获取
                                        </a>
                                    </div>
                                </div>
                            </swiper-slide>

                            <swiper-slide>
                                <div class="item">
                                    <div class="singleFlow">
                                        <p><img src="@/assets/m-img/16.jpg" alt=""></p>
                                    </div>
                                    <div class="text">
                                            <p class="titleText">报名缴费、 制定辅导协议</p>
                                    </div>
                                    <div class="btn">
                                        <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                                            免费获取
                                        </a>
                                    </div>
                                </div>
                            </swiper-slide>

                            <swiper-slide>
                                <div class="item">
                                    <div class="singleFlow">
                                        <p><img src="@/assets/m-img/17.jpg" alt=""></p>
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
                            </swiper-slide>

                            <swiper-slide>
                                <div class="item">
                                    <div class="singleFlow">
                                        <p><img  src="@/assets/m-img/18.jpg" alt=""></p>
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
                            </swiper-slide>
                        </swiper>
                        <div class="swiper-button-prev">
                            <i class="el-icon-arrow-left"></i>
                        </div>
                        <div class="swiper-button-next">
                            <i class="el-icon-arrow-right"></i>
                        </div>
                  </div>
             </div>
          </div>

          
          <!-- 第六屏 -->
          <div class="screenSix" v-if="isPc">
              <div class="center">
                  <div class="title">
                      <p>龙文·六步教学法</p>
                      <p class="bottomLine"></p>
                  </div>
                  <div class="list">
                        <div class="line">
                            <div class="item">
                               <div class="flag">
                                  <img  v-url="`${imgBaseUrl}/public/img/6-1.png`" alt="">
                               </div>
                               <div class="top">01 诊</div>
                               <div class="bottom">通过免费测评，了解学生的真实水平，思维能力，发现知识疏漏，定辅导规划</div>
                            </div>
                             <div class="item">
                               <div class="flag">
                                  <img  v-url="`${imgBaseUrl}/public/img/6-2.png`" alt="">
                               </div>
                               <div class="top">02 查</div>
                               <div class="bottom">通过第一次课，查找学习习惯、解题方法、思维技巧等方面的不足</div>
                            </div>
                        </div>
                        <div class="line">
                            <div class="item">
                               <div class="flag">
                                  <img  v-url="`${imgBaseUrl}/public/img/6-3.png`" alt="">
                               </div>
                               <div class="top">03 定</div>
                               <div class="bottom">结合测评和第一次课的表现制定针对性教学计划，并交教导处、教研组审查</div>
                            </div>
                             <div class="item">
                               <div class="flag">
                                  <img  v-url="`${imgBaseUrl}/public/img/6-4.png`" alt="">
                               </div>
                               <div class="top">04 讲</div>
                               <div class="bottom">考点知识点+例题巩固练习+课后反思+作业，讲疏漏练缺弱、点拨方法、调试心理、改善习惯</div>
                            </div>
                        </div>
                        <div class="line">
                            <div class="item">
                               <div class="flag">
                                  <img  v-url="`${imgBaseUrl}/public/img/6-5.png`" alt="">
                               </div>
                               <div class="top">05 访</div>
                               <div class="bottom">教师课后回访、学校跟踪回访，了解学习中所遇困难。不定期召开家长会谈，调整教学方案、方式，确保教学效果</div>
                            </div>
                             <div class="item">
                               <div class="flag">
                                  <img  v-url="`${imgBaseUrl}/public/img/6-6.png`" alt="">
                               </div>
                               <div class="top">06 考</div>
                               <div class="bottom">不定期的对学生进行测试，检测近期学习情况同时查漏补缺</div>
                            </div>
                        </div>
                  </div>
                  <div class="imgWrap">
                     <img  v-url="`${imgBaseUrl}/public/img/people.png`" alt="">
                  </div>
                  <div class="btnBottom">
                    <Pc-Btn></Pc-Btn>
                  </div>
              </div>
          </div>

          <!-- 第七屏 -->
          <div class="screenSeven" v-if="isPc">
              <div class="center">
                  <div class="title">
                      <p>与传统机构对比</p>
                      <p class="bottomLine"></p>
                  </div>
                  <div class="list">
                     <div class="item itemFirst">
                         <div class="top">龙文教育</div>
                         <div class="middle">
                           <div class="circle"><p>VS</p></div>
                         </div>
                         <div class="top">一般机构</div>
                     </div>
                     <div class="item">
                         <div class="left">学校环境优美，交通便利，VIP一对一教学设备，隔音好，独立学段教室</div>
                         <div class="middle">
                           <div class="circle"><p>学校环境</p></div>
                         </div>
                         <div class="right">地点偏僻，教师混用 影响学习效率<br/> 影响学习效率机构</div>
                     </div>
                     <div class="item">
                         <div class="left">全国各省市均设有校区，已有500+家校区</div>
                         <div class="middle">
                           <div class="circle"><p>校区分布</p></div>
                         </div>
                         <div class="right">全国个别省市开设校区，全国校区分布较少</div>
                     </div>
                      <div class="item">
                         <div class="left">雄厚师资力量+资深教研团队</div>
                         <div class="middle">
                           <div class="circle"><p>师资力量</p></div>
                         </div>
                         <div class="right">刚毕业未具有多年教育经验的大学生</div>
                     </div>
                     <div class="item">
                         <div class="left">了解学生学习困惑，针对问题量身定制学习计划一一解决，成绩稳步提升</div>
                         <div class="middle">
                           <div class="circle"><p>一对一 <br/>教学</p></div>
                         </div>
                         <div class="right">简单的知识串讲 <br/> 与学校基本相同</div>
                     </div>
                     <div class="item">
                         <div class="left">小班辅导3-5人，让每一个学生都有学习劲头，更有学习责任感、参与感</div>
                         <div class="middle">
                           <div class="circle"><p>小班课程</p></div>
                         </div>
                         <div class="right">人数众多，不能顾及到所有 学生</div>
                     </div>
                     <div class="item">
                         <div class="left">费用合理定制，总部策划赠送课时，一对一VIP教学，让孩子快乐学习成长</div>
                         <div class="middle">
                           <div class="circle"><p>费用收取</p></div>
                         </div>
                         <div class="right">地点偏僻，教师混用影响学习效率</div>
                     </div>
                    
                  </div>
                  <div class="btnBottom">
                    <Pc-Btn></Pc-Btn>
                  </div>
              </div>
          </div>

           <!-- 第八屏 龙文·教师团队-->
           <div class="screenEight">
              <div class="center">
                  <div class="title">
                      <p>龙文·教师团队</p>
                      <p class="bottomLine"></p>
                  </div>
              </div>
              <div class="swiperWrap">
                <div class="swiperTitle">初三、高三的教师全部来自市区重点中学初、高中毕业班</div>
                <div class="wrap">
                      <swiper :options="swiperOption" ref="mySwiper">
                          <!-- slides -->
                          <swiper-slide>
                              <div class="swiperItem">
                                  <div class="picture">
                                      <img  v-url="`${imgBaseUrl}/public/img/teacher1.png`" alt="">
                                  </div>
                                  <div class="name">李亮</div>
                                  <div class="classes"> 科目：数学、物理</div>
                                  <div class="classes"> 年级：高一、高二</div>
                                  <div class="message" v-show="teacherIndex === 0">
                                        <span>教学感言：</span> 爱岗敬业，教书育人，使每个学生得到发展。
                                  </div>
                              </div>  
                          </swiper-slide>
                            <swiper-slide>
                              <div class="swiperItem">
                                  <div class="picture">
                                      <img  v-url="`${imgBaseUrl}/public/img/teacher2.png`" alt="">
                                  </div>
                                  <div class="name">张小聪</div>
                                  <div class="classes"> 科目：英语</div>
                                  <div class="classes">年级：初中、高中</div>
                                  <div class="message" v-show="teacherIndex === 1">
                                        <span>教学感言：</span>用生命影响生命，以心灵浸润心灵，从学生中来，到学生中去。
                                  </div>
                              </div>  
                          </swiper-slide>
                          <swiper-slide>
                             <div class="swiperItem">
                                  <div class="picture">
                                      <img  v-url="`${imgBaseUrl}/public/img/teacher3.png`" alt="">
                                  </div>
                                  <div class="name">覃雅婷</div>
                                  <div class="classes"> 科目：语文</div>
                                  <div class="classes">年级：小学、初中</div>
                                  <div class="message" v-show="teacherIndex === 2">
                                        <span>教学感言：</span> 教学相长，严慈相济，亦师亦友。
                                  </div>
                              </div>  
                          </swiper-slide>
                          <swiper-slide>
                              <div class="swiperItem">
                                  <div class="picture">
                                      <img  v-url="`${imgBaseUrl}/public/img/teacher4.png`" alt="">
                                  </div>
                                  <div class="name">陈粘粘</div>
                                  <div class="classes"> 科目：数学</div>
                                  <div class="classes">年级：小学、初中</div>
                                  <div class="message" v-show="teacherIndex === 3">
                                        <span>教学感言：</span> 用爱心关怀学生，用真心感受学生，用诚心教育学生！
                                  </div>
                              </div>  
                          </swiper-slide>
                          <swiper-slide>
                              <div class="swiperItem">
                                  <div class="picture">
                                      <img  v-url="`${imgBaseUrl}/public/img/teacher5.png`" alt="">
                                  </div>
                                  <div class="name">康亚楠</div>
                                  <div class="classes"> 科目：英语</div>
                                  <!-- <div class="classes">年级：小学、初中</div> -->
                                  <div class="message" v-show="teacherIndex === 4">
                                        <span>教学感言：</span> 没有学不好的学生，只有教不好的老师！寓教于乐，与学生打成一片才能更好的走
                                  </div>
                              </div>  
                          </swiper-slide>
                          <swiper-slide>
                              <div class="swiperItem">
                                  <div class="picture">
                                      <img  v-url="`${imgBaseUrl}/public/img/teacher6.png`" alt="">
                                  </div>
                                  <div class="name">顾利</div>
                                  <div class="classes"> 科目：英语</div>
                                  <div class="classes">年级：小学、初中</div>
                                  <div class="message" v-show="teacherIndex === 5">
                                        <span>教学感言：</span> 施教之功，先在激趣，巧在授法，重在练化，贵在养习。
                                  </div>
                              </div>  
                          </swiper-slide>
                          <swiper-slide>
                              <div class="swiperItem">
                                  <div class="picture">
                                      <img  v-url="`${imgBaseUrl}/public/img/teacher7.png`" alt="">
                                  </div>
                                  <div class="name">黄华欢</div>
                                  <div class="classes"> 科目：英语</div>
                                  <div class="classes">年级：初中</div>
                                  <div class="message" v-show="teacherIndex === 6">
                                        <span>教学感言：</span> 平淡无味，润物无声。老师就是从一次谈话，一个眼神，一个微笑中，点点滴滴教学生做人。
                                  </div>
                              </div>  
                          </swiper-slide>
                      </swiper>
                </div>
                <div class="btnBottom">
                    <Pc-Btn></Pc-Btn>
                </div>
              </div>
               <div class="bgImgWrap">
                  <!-- <img  v-url="`${imgBaseUrl}/public/img/rocket.png`" alt=""> -->
              </div>
           </div>



           <!-- 第九屏 -->
          <div class="screenNight">
              <div class="center">
                  <div class="title">
                      <p>安全舒适的教学环境</p>
                      <p class="bottomLine"></p>
                  </div>
                  <div class="imgWrap">
                        <div class="imgWrapTitle">环境舒适、交通便捷、保障安全、服务到位</div>
                        <div class="imgList">
                            <div class="imgItem">
                                <img  v-url="`${imgBaseUrl}/public/m-img/school1.jpg`" alt="">
                            </div>
                            <div class="imgItem">
                                <img  v-url="`${imgBaseUrl}/public/m-img/school2.jpg`" alt="">
                            </div>
                            <div class="imgItem">
                                <img  v-url="`${imgBaseUrl}/public/m-img/school3.jpg`" alt="">
                            </div>
                            <div class="imgItem">
                                <img  v-url="`${imgBaseUrl}/public/m-img/school4.jpg`" alt="">
                            </div>
                            <div class="imgItem">
                                <img  v-url="`${imgBaseUrl}/public/m-img/school5.jpg`" alt="">
                            </div>
                            <div class="imgItem">
                                <img  v-url="`${imgBaseUrl}/public/m-img/school6.jpg`" alt="">
                            </div>
                        </div>
                   </div>
                   <div class="btnBottom">
                        <Pc-Btn></Pc-Btn>
                   </div>
                </div>
          </div>
           
          <!-- 第十屏 -->
          <div class="screenTen" >
              <div class="center">
                  <div class="title">
                      <p>全国战略布局</p>
                      <p class="bottomLine"></p>
                  </div>
                  <div class="mapWrap">
                    <div class="mapTitle">
                          覆盖21个城市，500多家校区
                    </div>
                    <div class="map" v-if="!isPc">
                         <img  v-url="`${imgBaseUrl}/public/m-img/china.png`" alt="">
                    </div>
                    <div  class="map"  v-if="isPc">
                        <Map></Map>
                    </div>
                  </div>
                  <div class="btnBottom">
                        <Pc-Btn></Pc-Btn>
                   </div>
              </div>
          </div>
             
          <!-- 第十 一屏 -->

          <div class="screenEleven"  v-if="isPc">
                <div class="imgWrap">
                    <img  v-url="`${imgBaseUrl}/public/img/people.png`" alt="">
                </div>
               <div class="center">
                  <div class="title">  
                      <p>热点问题</p>
                      <p class="bottomLine"></p>
                  </div>
                  <div class="swiperWrap">
                        <swiper :options="askSwiperOption">
                                <!-- slides -->
                            <swiper-slide>
                                    <div class="item one">
                                        <div class="ask">
                                                <div class="questionTitle">
                                                    问：孩子已经小学毕业，想继续在龙文上课，请问龙文教育 对孩子的学龄段有要求吗？
                                                </div>
                                                <div class="askTitle">答：龙文教育的始终面向6-18岁孩子提供分层次、梯度式及个性化的课外同步辅导服务，只要是适龄段的孩子，龙文教育都会整合优质教育资源，提供最优质的教育服务。
                                                </div>
                                        </div>
                                    </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item two">
                                    <div class="ask">
                                            <div class="questionTitle">
                                                问：给孩子选择辅导机构，想知道龙文教育的课程有哪些？
                                            </div>
                                            <div class="askTitle">
                                                答：龙文教育的课程几乎涵盖了小、初、高所有学科课程，可以满足孩子不同学习阶段的需求。
                                            </div>
                                    </div>
                                </div>
                            </swiper-slide>
                             <swiper-slide>
                                <div class="item three">
                                    <div class="ask">
                                        <div class="questionTitle">
                                            问：龙文教育有针对中、高考的短期冲刺班吗？
                                        </div>
                                        <div class="askTitle">
                                            答：有的！针对中、高考的考试特点，龙文教育为备考中的学子开设了全托课程，内容紧贴考试命题方向。独家内部资料和超大容量的精品题库对考点进行集中梳理，为考生备考保驾护航。
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item four">
                                    <div class="ask">
                                        <div class="questionTitle">
                                           问：请问，龙文教育的上课模式是什么样的？
                                        </div>
                                        <div class="askTitle">
                                                答：龙文教育深耕教育领域多年，从学生的实际情况出发，自主研发了“1V1辅导”授课模式，以便更好地启发学生，帮助学生找到适合的学习方法。
                                        </div>
                                        
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item five">
                                    <div class="ask">
                                        <div class="questionTitle">
                                           问：龙文教育的校区都有哪些？如何才能找到离我最近的校区？
                                        </div>
                                        <div class="askTitle">
                                            答：截止到2019年，龙文教育已遍及北京、上海、广州、武汉、天津等21个城市，共500余所分校。具体的校区，可以通过地图导航的方式来搜索。
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="item six">
                                    <div class="ask">
                                        <div class="questionTitle">
                                          问：如何了解龙文教育的最新动态？
                                        </div>
                                        <div class="askTitle">
                                             答：龙文教育微信公众号现已开通，微信搜索“龙文教育集团官微”即可及时了解校区风采、优惠活动、教育资讯等信息。
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                  </div>
                  <div class="btnBottom">
                      <Pc-Btn></Pc-Btn>
                  </div>
               </div>
          </div>
         
          <!-- mobile 表单 -->
          <div class="formMobile" v-if="!isPc">
                <Pc-Form></Pc-Form>
          </div>
     </div>
      <!-- pc float -->
      <div class="float" v-show="isShowFloat" v-if="isPc">
            <Float v-on:closeFloat="closeFloat"></Float>
      </div>
      <div class="footer">
          <Pc-Footer v-if="isPc"></Pc-Footer>
          <mobile-footer v-if="!isPc"></mobile-footer>
      </div>

      <!-- popul -->
      <div class="popul" v-if="isShowFloatForm">
        <div class="center">
             <Float-Form v-on:closeFloatForm="closeFloatForm"></Float-Form>
        </div>
      </div>
  </div>
</template>
<script>


import {PcBtn,PcFooter,PcForm,MobileFooter,Float,Map,FloatForm} from './components'
import text from './components/text.js'
export default {
  data(){
    let slef = this;
    return {
        imgBaseUrl:process.env.NODE_ENV === 'production'?"./":"",
        isShowFloat:true,
        isShowFloatForm:false,
        isPc:false,
        swiperOptionOne:{
            slidesPerView: 3,
            autoplay: {
              delay: 5000,
            },
        },
        swiperOptionTwo:{
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 2,
            autoplay: {
              delay: 5000,
            },
        },
        swiperOptionThree:{
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 10,
            autoplay: {
              delay: 5000,
            },
        },
        teacherIndex:1,
        swiperOption: { // 轮播图
            slidesPerView: 3,
            autoplay: true,
            reverseDirection: true,
            spaceBetween: 10,
            centeredSlides: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            on: {
                slideChangeTransitionEnd: function(){
                   slef.teacherIndex = this.activeIndex;
                },
            },
        },
        askSwiperOption:{ // 问题提问轮播
            direction: 'vertical',
            slidesPerView: 3,
            autoplay: {
              delay: 5000,
            },
        },
    }
  },
  created(){
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) { // 手机端
         this.isPc = false;
         this.$root.isPc = false;
         this.swiperOptionOne.slidesPerView = 3;
      }else{ // pc端
         this.isPc = true
         this.$root.isPc = true;
         this.swiperOptionOne.slidesPerView = 5;
      }
  },
  mounted(){
      setTimeout(()=>{
        this.lazyImg()
      },1)
  },
  methods:{
      closeFloat(){
          this.isShowFloat = false;
      },
      closeFloatForm(){
         this.isShowFloatForm = false;
      },
      lazyImg(){
            var winHeight = document.documentElement.clientHeight;
            var allImg = document.getElementsByTagName('img');
            //  function getElementToPageTop(el) {
            //     if(el.parentElement) {
            //         return getElementToPageTop(el.parentElement) + el.offsetTop
            //     }
            //     return el.offsetTop
            // }
            // document.addEventListener("scroll",(e)=>{
            //     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var testTop = document.getElementById("testImg")
                for(let i=0,len=allImg.length;i<len;i++){
                    // var top = Math.abs(getElementToPageTop(allImg[i])-scrollTop);
                     var url = allImg[i].getAttribute("data-url")
                    // if(top<winHeight){
                        if(url){
                          allImg[i].src = url
                        }
                      
                    // }
                }
            // })

      }
      
  },
  components:{
    PcBtn,
    PcFooter,
    PcForm,
    MobileFooter,
    Float,
    Map,
    FloatForm
  }
}
</script>


<style lang="less"> 
@import "./theme/base.css";

@media screen and (max-width: 500px) {
   @import "./theme/mobile.less";
}

@media screen and (min-width: 500px) {
    html{
        width:100%;
        min-width:1100PX;
    }
    @import "./theme/pc.less";  
}


.testIScunzai{
    width:100%;
    height:200%;
    background:red;
}
</style>
