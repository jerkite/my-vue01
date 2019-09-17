<template>
    <div class="shopcar-container">
        <div class="goodsinfo">
            <div class="mui-card" v-for="(item, i) in shopcarlist" :key="item.id">
                <div class="mui-card-content">
                    <mt-switch v-model=" $store.getters.getselect[item.id]"
                    @change="SelectChange(item.id,$store.getters.getselect[item.id])"></mt-switch>
                    <img :src="item.thumb_path" alt="">
                    <div class="carinfo">
                        <h1>{{item.title}}</h1>
                        <p>
                           <span class="sell_price">￥{{item.sell_price}}</span> 
                           <number-box :infoCount="$store.getters.getGoodsCount[item.id]" :carid="item.id"></number-box>
                           <a href="#" @click.prevent="remove(item.id, i)">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="p-content">
                    <p>总计（不含运费）</p>
                    <p>已勾选商品<span class="red">{{$store.getters.getAllCountAndAmount.count}}</span>，总计<span class="red">￥{{$store.getters.getAllCountAndAmount.amount}}</span></p>
                </div>
                <mt-button type="danger">去结算</mt-button>
            </div>
        </div>
    </div>
</template>



<script>
import numberbox from '../subcomponents/shopcar_numberBox.vue'
export default {
    data(){
        return{
            shopcarlist:[]  //保存商品数据列表
        }
    },
    created(){
        this.getcarinfo()
    },
    methods:{
        getcarinfo(){ 
            //1.创建一个空数组用于接收公共存储car中的所有id数据
            var carid=[];
            this.$store.state.car.forEach(element => carid.push(element.id) );
            this.$http.get('api/goods/getshopcarlist/'+ carid.join(',')).then(result => { //join方法可将所有数组元素结合为一个字符串。获取多条数据
                if(result.body.status === 0){
                    this.shopcarlist = result.body.message
                }
            })
        },
        remove(id,index){  //store根据id来删除数据，shopcarlist根据索引index删除数据
            this.shopcarlist.splice(index,1)
            this.$store.commit('removeFromCar',id)
        },
        SelectChange(id, val){   //向store传id跟isselect的布尔值
            this.$store.commit('updateGoodsSelect',{id,isselect:val})
        }
    },
    components:{
        'number-box':numberbox
    }
}
</script>


<style lang="scss" scoped>
.shopcar-container{
    background-color: #ccc;
    overflow: hidden;
    .goodsinfo{
        .mui-card-content{
            display:flex;
            justify-content:space-between;
            padding:10px 0;
            img{
                height:60px;
                width:60px;
            }
            .carinfo{
                width:250px;
                padding-left:15px;
                h1{
                    font-size:13px;
                }
                p{
                    line-height:25px;
                    .sell_price{
                        color:red;
                        font-weight: bold;
                    }

                }
            }
        }
    }
    .mui-card{
        .mui-card-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right:15px;
            .p-content{
                font-size:16px;
                padding:10px;
                .red{
                    color:red;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>