<template>
  <div id="app">
       <router-view/>
  </div>
</template>

<style lang="less">
body,ol,ul,li,div,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select,a,span,i{
    margin:0;
    padding:0;
    border:0;
    box-sizing: border-box;
    font-weight:normal;
}
html{
  font-size:37.5px;
  color:#333;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size:14px;
}
a {
  color:#333;
}
#nav {
  padding: 30px;
}
</style>
