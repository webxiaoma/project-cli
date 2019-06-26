<template>
    <div class="floatWrap">
       <ul class="list">
           <li class="item one">
               <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;"></a>
           </li>
           <li class="item two">
               <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;"></a>
           </li>
           <li class="item three">
               <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;"></a>
           </li>
           <li class="item four">
               <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;"></a>
           </li>
           <li class="item five" @click="scrollTop">
               <a href="javascript:;"></a>
           </li>
           <li class="item six">
              <div>
                   
              </div>
              <div class="phoneModule">
                 <div class="inputWrap"><input type="text" id="phoneId" maxLength="11" placeholder="请输入电话号码"/></div>
                 <div class="btn" id="callPhone">立即免费回电</div>
              </div>
           </li>
           <li class="item close" @click="close">
               <a href="javascript:;" >
                   <i  class="el-icon-close"></i>
               </a>
           </li>
       </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            scrollTop(){
                window.scrollTo(0,0);
            },
            close(){
                this.$emit("closeFloat")
            }
        },
        mounted(){
            //  聊天宝代码 start
            document.getElementById("callPhone").onclick = function () {
                lxb.call(document.getElementById("phoneId"));
            };
            //  聊天宝代码 end
        }
    }
</script>

<style lang="less" scoped>
.floatWrap{
  .list{
      .item{
          width:80PX;
          height:80PX;
          margin:1PX 0;
          background:url('../assets/img/float.png') center 0 no-repeat;
          border-radius:5PX;
          a{
              display:block;
              width:100%;
              height:100%;
          }
      }
       
    .two{
        background-position:center -80PX;
    }
    .three{
        background-position:center -160PX;
    }
    .four{
        background-position:center -240PX;
    }
    .five{
        background-position:center -320PX;
    }
    .six{
        position:relative;
        &:hover{
           .phoneModule{
               display:block;
           }
        }
        .phoneModule{
            display:none;
            width:200PX;
            height:80Px;
            position:absolute;
            left:-198PX;
            background:rgba(255,153,148,1);
            border-radius:9Px;
            .inputWrap{
                width:180Px;
                height:30Px;
                margin:10Px auto;
                background:#fff;
                border-radius:6Px;
                input{
                    width:100%;
                    height:100%;
                    outline:none;
                    border-radius:6Px;
                    text-indent:10Px;
                }
            }
            .btn{
                cursor:pointer;
                width:110Px;
                height:24Px;
                display:flex;
                justify-content:center;
                align-items:center;
                margin:0 auto;
                background:#fff;
                color:rgba(255,153,148,1);
                border-radius:5Px;
            }
        }
    }
    .close{
        width:30PX;
        height:30PX;
        margin:0 auto;
        margin-top:5PX;
        border-radius:50%;
        text-align:center;
        line-height:35PX;
        background:rgba(1,1,1,.6);
        i{
            color:#fff;
            font-size:20PX;
        }
    }
  }
}
</style>