<template>


    <div class="newslist-container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in NewsList" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发布时间：{{ item.add_time | dataFormat }}</span>
                            <span>点击次数：{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
		</ul>
    </div>
</template>


<script>   
import { Toast } from 'mint-ui'
export default{
    data(){
        return{
            NewsList:[]
        }   
    },
    created(){  //在created()调用获取数据的方法--当页面加载完毕之后，就要去获取页面数据
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('api/getnewslist').then( result => {
                if(result.body.status === 0){
                    this.NewsList = result.body.message
                    // console.log(result.body.message )
                }else{
                    Toast("获取数据失败")
                }
            })
        }
    }
}


</script>



<style lang="scss" scoped>
.newslist-container{
    h1{
        font-size:16px;
        }
    .mui-ellipsis{
        font-size:12px;
        color:#2262aa;
        display:flex;
        justify-content:space-between;
    }

}

</style>