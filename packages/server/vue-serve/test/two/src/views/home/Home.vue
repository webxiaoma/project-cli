<template>
   <div class='home'>
        asfasdfasdfasdfasdaasdsadsaa
   </div>
</template>

<script>
import fly from 'flyio'
export default {
  data () {
    return {
      
    };
  },
  created(){
      let a = new Set([1,2,1,2,4,1])
      let prmine = new Promise((resolve,reject)=>{
          setTimeout(() => {
              resolve(1111)
          }, 1000);
      })
      console.log(a)
      prmine.then(res=>[
          console.log(res)
      ])
  },
  methods:{
   
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