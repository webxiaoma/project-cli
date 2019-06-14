<template>
    <div class='app'>
       <router-view/>
    </div>
</template>

<script>
    export default {
       data() {
        return {
            datas: [1, 2, 3, 4]
        }
      }
    }
</script>

<style>
/* @import "./theme/base.css"; */
.app{
  width:100%;
  min-height:100vh;
}
</style>