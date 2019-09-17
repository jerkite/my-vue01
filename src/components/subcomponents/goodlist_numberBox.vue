<template>

    <div class="mui-card-content-inner">
        <div class="mui-numbox" data-numbox-min='1' >
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input id="test" class="mui-input-numbox" type="number" value="1" ref="count" @change="countchanged" />
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
    mounted(){
        mui('.mui-numbox').numbox()
    },
    methods:{
        countchanged(){  //定义change事件使用this.$emit()向父组件传值
            const count =this.$refs.count.value
            this.$emit('getcount',parseInt(count))
        }
    },
    props:["max"],
    watch:{
     'max':function(Newval, Oldval){    //由于在this.$http中是异步加载，在子组件中使用watch监听机制来获取max的值
          mui('.mui-numbox').numbox().setOption('max', Newval)
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-card-content-inner{
    display:inline;
}
</style>