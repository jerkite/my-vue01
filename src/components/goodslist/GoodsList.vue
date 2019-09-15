<template>
    <div class="goodslist-container">
        <div class="goodsinfo">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1792907891,3275362965&fm=26&gp=0.jpg" />
            <h3 class="goods-title">这是从GitHub上面调用的图片，是一个帅哥</h3>
            <div class="sell-info">
                <p class="price">
                    <span class="now">￥699</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goodsinfo">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1792907891,3275362965&fm=26&gp=0.jpg" />
            <h3 class="goods-title">这是从GitHub上面调用的图片，是一个帅哥++++++</h3>
            <div class="sell-info">
                <p class="price">
                    <span class="now">￥699</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goodsinfo">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1792907891,3275362965&fm=26&gp=0.jpg" />
            <h3 class="goods-title">这是从GitHub上面调用的图片，是一个帅哥</h3>
            <div class="sell-info">
                <p class="price">
                    <span class="now">￥699</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    
}
</script>




<style lang="scss" scoped>
.goodslist-container{
    display:flex;
    flex-wrap:wrap;
    margin:8px;
    justify-content: space-between;
    
    .goodsinfo{
        width:49%;
        border:1px solid #ccc;
        margin-bottom:8px;
        padding:2px;
        min-height:260px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            width:100%;
        }
        .goods-title{
            font-size:16px;
        }
        .sell-info{
            background-color:#ccc;
            .price{
                margin:0;
                padding:5px 0;
                .now{
                    font-size:15px;
                    margin-left:8px;
                    color:red;
                    font-weight: bold;
                }
                .old{
                    font-size:13px;
                    margin-left:10px;
                    text-decoration: line-through;
                }
            }
            .sell{
                font-size:12px;
                margin:0;
                display:flex;
                justify-content: space-between;
            }
            
        }
    }
}
</style>