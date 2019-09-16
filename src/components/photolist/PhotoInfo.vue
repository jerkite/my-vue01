<template>

    <div class="photoinfo-container">
        <h3 class="info-title">{{photoinfo.title}}</h3>
        <p class="info-subtitle">
            <span>发布时间:{{photoinfo.add_time | dataFormat}}</span>
            <span>点击：{{photoinfo.click}}</span>
        </p>
    <hr>

    <!-- 缩略图区域 -->
    <div class="thumimg">
        <vue-preview :slides="thum"></vue-preview>   
    </div>
    <!-- 内容区域 -->
     
    <div class="info-content" v-html="photoinfo.content"></div>


    <!-- 评论子组件区域 -->


    <cmt-box :id="this.id"></cmt-box>
    </div>

</template>



<script>
import comment from '../subcomponents/Comment.vue'  //引用评论子组件
export default {
    data(){
        return{
            id:this.$route.params.id,
            photoinfo:{},  //保存图文详情数据
            thum:[]     //保存图文详情中的图片
        }
    },
    created(){
        this.getImageInfo(),
        this.getThumImages()
    },

    methods:{
        getImageInfo(){  //获取图文详情数据
            this.$http.get('api/getimageinfo/' + this.id).then(result => {
                if(result.body.status === 0){
                    this.photoinfo = result.body.message[0]
                }else{
                    Toast("获取图文详情数据失败")
                    }
            })
        },
        getThumImages(){   //获取图文详情中的图片
            this.$http.get('api/getthumimages/' + this.id).then(result =>{
                result.body.message.forEach(item => {
                    item.w=600;
                    item.h=400;
                    item.msrc =  item.src;    //由于vue-preview最新版必须加上msrc属性
                });
                if(result.body.status === 0){
                    this.thum = result.body.message
                }else{
                    Toast("获取图文详情中的图片失败")
                    }
            })
        },

    },
    components:{
        'cmt-box':comment
    }


}
</script>


<style lang="scss" >



    .photoinfo-container{

        padding:0 4px;
        .info-title{
            font-size:15px;
            color:#67CBFF;
            text-align: center;
            margin:15px;
        }
        .info-subtitle{
            display:flex;
            justify-content: space-between;
            font-size:13px;
        }
        .info-content{
            line-height: 30px;
            font-size:12px;
        }
        .thumimg {
            .my-gallery {
                display: flex;
                flex-wrap: wrap;
                figure {
                    width: 27%;
                    margin: 10px;
                    img {
                     width: 100%;
                     box-shadow:0 0 8px #ccc;
                    }
                }
            }
        }
    }

</style>