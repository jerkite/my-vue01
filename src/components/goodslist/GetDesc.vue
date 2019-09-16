<template>
    <div class="goodsdesc-container">
        <h3>{{ getdescinfo.title}}</h3>
        <hr>
        <div class="desc-content" v-html="getdescinfo.content"></div>
    </div>
</template>

<script>
 export default {
     data(){
         return{
             id:this.$route.params.id,
             getdescinfo:{} //保存商品详细信息数据
         }
     },
     created(){
         this.getDescinfo()
     },
     methods:{
         getDescinfo(){
             this.$http.get('api/goods/getdesc/' + this.id).then(result => {
                 if(result.body.status === 0){
                     this.getdescinfo = result.body.message[0]
                 }else{
                     Toast("获取数据失败")
                 }
             })
         }
     }

}
</script>

<style lang="scss" >
    .goodsdesc-container{
        h3{
            font-size:16px;
            line-height:30px;
            color:#226aff;
            text-align: center;
        }
        img{
            width:100%;
        }
    }
</style>