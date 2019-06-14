<template>
    <div class="layoutWrap">
        <div class="headerWrap">
             <Header></Header>
        </div>
         <div class="main">
            内容去也
        </div>
         <div class="footerWrap">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import { Header,Footer } from "@/components";

export default {
    data(){
        return {

        }
    },
    created(){

    },
    components:{
        Header,
        Footer
    }
}
</script>

<style >
.layoutWrap{
   background: red;
}
.layoutWrap .main{
  background:orange;
}
</style>