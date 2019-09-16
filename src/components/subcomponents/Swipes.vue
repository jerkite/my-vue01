<template>
    <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotu" :key="item.img">
                <!-- 在img中判断宽度是否自适应 -->
                <img :src="item.img" alt="" :class="[ isfull ? 'imgfull' : 'imgnormal' ]"> 
                </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{},
    props:['lunbotu','isfull']  //接收从父组件中传递过来的值
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height:200px;
    .mint-swipe-item{
        text-align: center;
        img{
            height:100%;
        }
        .imgfull{
        width:100%
        }
    }
    
}
</style>