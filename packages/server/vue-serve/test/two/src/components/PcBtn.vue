<template>
   <div class='pcBtn' :id="this.$root.isPc?'':'mBtn'">
        <div class="contact"> 
            <div class="audition">
                <a href="javascript:;" onclick="doyoo.util.openChat('g=10077796');return false;">
                    免费试听
                </a>
            </div>
            <div class="consult">
                <a href="javascript:;"  onclick="doyoo.util.openChat('g=10077796');return false;">
                   在线咨询
                </a>
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
.pcBtn{
   .contact{
        width:700PX;
        margin:30PX auto 20PX auto;
        display: flex;
        justify-content: space-around;
        a{
            color:#fff;
            font-size:18PX;
        }
        .audition{
          width:145PX;
          height:46PX;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background:rgba(255,87,85,1);
          box-shadow:0PX 7PX 18PX 0PX rgba(242,53,51,0.52);
          border-radius:23PX;
          &:hover{
              opacity: 0.8;
          }
        }
        .consult{
            .audition;
        }
        
    }
}

#mBtn{
   .contact{
        width:700px;
        margin:30px auto 20px auto;
        display: flex;
        justify-content: space-around;
        a{
            color:#fff;
            font-size:26px;
        }
        .audition{
          width:145px;
          height:46px;
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
        }
        .consult{
            .audition;
        }
        
    }
}

</style>