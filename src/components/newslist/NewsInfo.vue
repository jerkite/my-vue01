<template>
    <div class="newinfo-container">
        <div class="title">
            <h1>{{ newsinfo.title }}</h1>
            <p class="title-sub">
                <span>发布时间：{{ newsinfo.add_time | dataFormat }}</span>
                <span>点击次数：{{ newsinfo.click }}</span>
            </P>
        </div>
        <hr>
        <div class="newinfo-content" v-html="newsinfo.content"></div>

        <!-- 使用子组件要在标签内传递id的值 -->
        <comment :id="this.id"></comment>  
    </div>
</template>


<script>
import {Toast} from "mint-ui"
//导入comment.vue页面
import comment from '../subcomponents/Comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,  
            newsinfo: {}  //保存图文详情数据
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){  //获取图文详情数据
            this.$http.get('api/getnew/' + this.id).then(result => {
                if(result.body.status === 0){
                    this.newsinfo = result.body.message[0];
                }else{
                    Toast("获取图文详情数据失败")
                }
            })
        }
    },
    components:{   //使用子组件 在template中使用<comment></comment>
        comment
    }
    
}
</script>


<style lang="scss" >
.newinfo-container{
    padding:0 5px;
    .title{
        h1{
            font-size:16px;
            text-align: center;
            margin:8px 0;
            color:red;
        }
        .title-sub{
            font-size:13px;
            color:#2262aa;
            display:flex;
            justify-content: space-between
        }
    }
    .newinfo-content{
        img{
            width:100%;
        }
    }
}
</style>