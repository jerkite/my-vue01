<template>
    <div class="photolist-container">

        <!-- 图片分类信息区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id === 0 ? 'mui-active' : '' ]" 
                    v-for="item in cate" 
                    :key="item.id"
                    @click="getPhotoList(item.id)">
                        {{ item.title }}
                    </a>
                </div>
            </div>
		</div>


        <!-- 图片列表区域 -->
        <ul class="lazy-photo" >
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' +item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-content" v-html="item.zhaiyao"></div>
                </div>
            </router-link>
        </ul>
    </div>
</template>


<script>
import mui from'../../lib/mui/js/mui.min.js' 
import {Toast} from 'mint-ui'



export default {
    data(){
        return{
            cate:[],  //保存滑动框分类数据数组
            list:[]  //保存图片列表数组
        }
    },
    created(){
        this.getAllcategory(),
        this.getPhotoList(0)
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({   //对滑动导航栏进行初始化，
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getAllcategory(){   //获取分类数据
            this.$http.get('api/getimgcategory').then(result => {
                if(result.body.status === 0){
                    result.body.message.unshift({title:"全部",id:0})
                    this.cate = result.body.message
                }else{
                    Toast("获取分类失败")
                }
            })
        },
        getPhotoList(id){  //获取图片列表数据
            this.$http.get('api/getimages/' + id).then(result =>{
                if(result.body.status === 0){
                    this.list = result.body.message
                }else{
                    Toast("获取图片列表失败")
                }
            })
        }
    },
}
</script>



<style lang="scss" scoped>
*{
    touch-action:pan-y;

}
.lazy-photo{
    list-style:none;
    margin-bottom:0;
    padding:0 8px;
    li{
        position:relative;
        margin-bottom:8px;
        text-align:center;
        background-color: #ccc;
        box-shadow:0 0 8px #ccc;
        
        img{
            vertical-align: middle;
            width:100%;
        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }

        .info{
            background-color:rgba(0,0,0,0.5);
            position:absolute;
            bottom:0;
            text-align: left;
            color:#fff;
            .info-title{
                font-size:14px;
            }
            .info-content{
                font-size:13px;
                
            }
        }
    }
}

</style>