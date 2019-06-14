<template>
    <div class='app'>
       <router-view/>
    </div>
</template>

<script>
let fun = ()=>{
  console.log(1111)
}
fun()
export default {
  data() {
    return {
        datas: [1, 2, 3, 4]
    }
  }
}
</script>

<style lang="less" scoped>
@import "./theme/base.css";

.app{ 
  width:100%;
  min-height:100vh;
}
</style>