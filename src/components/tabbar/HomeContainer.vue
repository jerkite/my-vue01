<template>
    <div>
        <!-- 轮播图区域 -->

        <lunbo-box :lunbotu="lunbotu" :isfull="true"></lunbo-box>

        <!-- 六宫格区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
    </div>
</template>



<script>
import { Toast} from 'mint-ui' 
import swipes from '../subcomponents/Swipes.vue'

export default {
        data(){
            return{
                lunbotu:[]  //保存轮播图数据
            };
        },
        created(){
            this.getSwipe()
        },
        methods:{
            getSwipe(){
                this.$http.get("api/getlunbo").then( result =>{  //获取轮播图数据
                    if(result.body.status === 0){
                        this.lunbotu = result.body.message
                    }else{
                        Toast("获取失败....")
                    }
                })
            }
        },
        components:{
            'lunbo-box':swipes
        }
}
</script>


<style lang="scss" scoped>
.mui-table-view.mui-grid-view{
    background-color:#fff;
    .mui-table-view-cell.mui-media{
        border:none;
    }
    img{
        width:60px;
        height:60px;
    }
    .mui-media-body{
        font-size:13px;
    }
}
</style>