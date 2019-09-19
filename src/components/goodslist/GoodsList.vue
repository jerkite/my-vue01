<template>
  <div class="goodslist-container">
    <div
      class="goodsinfo"
      v-for="item in goodslist"
      :key="item.id"
      tag="div"
      @click="goDetail(item.id)"
    >
      <img :src="item.img_url" />
      <h3 class="goods-title">{{ item.title }}</h3>
      <div class="sell-info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>



<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodslist: [] //保存商品列表
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      //获取商品列表
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = this.goodslist.concat(result.body.message);
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getGoodsList();
    },
    goDetail(id) {
      // this.$router.push("/home/goodsinfo/"+ id)
      // this.$router.push({path:"/home/goodsinfo/"+ id})
      this.$router.push({ name: "goodsinfo", params: { id } });
    }
  }
};
</script>




<style lang="scss" scoped>
.goodslist-container {
  display: flex;
  flex-wrap: wrap;
  margin: 8px;
  justify-content: space-between;

  .goodsinfo {
    width: 49%;
    border: 1px solid #ccc;
    margin-bottom: 8px;
    padding: 2px;
    min-height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
    }
    .goods-title {
      font-size: 16px;
    }
    .sell-info {
      background-color: #ccc;
      .price {
        margin: 0;
        padding: 5px 0;
        .now {
          font-size: 15px;
          margin-left: 8px;
          color: red;
          font-weight: bold;
        }
        .old {
          font-size: 13px;
          margin-left: 10px;
          text-decoration: line-through;
        }
      }
      .sell {
        font-size: 12px;
        margin: 0;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>