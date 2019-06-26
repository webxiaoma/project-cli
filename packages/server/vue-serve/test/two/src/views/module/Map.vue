<template>
   <div class='mapWrap'>
       <div class="content">
            <iframe class="frameMap" :src="`https://m.amap.com/search/mapview/keywords=${address}`" frameborder="0"></iframe>
       </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
        address:'',
    };
  },
  created(){
     this.address = this.$route.query.address || "龙文教育"
  },
  methods: {

  }
}

</script>
<style lang='less' scoped>
.mapWrap{
    display:flex;
   .content{
       width:100%;
       min-height:92vh;
       flex:1;
        .frameMap{
            width:100%;
            height:100%;
        }
   }
}

</style>