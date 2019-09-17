<template>

    <div class="mui-card-content-inner" >
        <div class="mui-numbox" data-numbox-min='1' style="height:25px" >
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input id="test" class="mui-input-numbox" type="number" 
                :value="infoCount" ref="count"  @change="countchanged" readonly /> 
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>

</template>


<script>
import mui from'../../lib/mui/js/mui.min.js' 
export default {
    data(){
        return{
        }
    },
    mounted(){   //初始化.mui-numbox组件
        mui('.mui-numbox').numbox()
    },
    methods:{
        countchanged(){   //调用vuex中mutation中的方法，并向它传值，值为一个对象
            this.$store.commit('getUpdateCarCount',{ id:this.carid, count:this.$refs.count.value })

        }
    },
    props:["infoCount","carid"], //从父组件获取数据
}
</script>

<style lang="scss" scoped>
.mui-card-content-inner{
    display:inline;
    padding:0;
}
</style>