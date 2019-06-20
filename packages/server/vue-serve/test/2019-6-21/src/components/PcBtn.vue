<template>
   <div class='pcBtn'>
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
        width:700px;
        margin:30px auto 20px auto;
        display: flex;
        justify-content: space-around;
        a{
            color:#fff;
            font-size:18px;
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