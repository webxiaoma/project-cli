<template>
    <div class="footer">
         Foote
         <p>{{aaa}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            aaa:111,
            name:'King'
        }
    },
    created(){
      console.log(111)
    },
    methods:{
      
    }
}
</script>

<style   scoped>
.footer{
   width:100%;
   height: 80px;
   background: red;
   text-align: center;
}
</style>