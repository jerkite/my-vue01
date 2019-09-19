<template>
  <div class="goodslist-container">
    <transition @before-enter="beforeEnter" @enter="Enter" @after-enter="afterEnter">
      <div class="ball" v-show="isBallapper" rel="ball"></div>
    </transition>
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <lunbo-box :lunbotu="lunbotu" :isfull="false"></lunbo-box>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品的名称标题</div>
      <div class="mui-card-content">
        <p class="price">
          <span>市场价:</span>
          <span class="market-price">￥{{ goodsinfo.market_price}}</span>
          <span>销售价:</span>
          <span class="sell-price">￥{{ goodsinfo.sell_price}}</span>
        </p>
        <p class="numberbox">
          购买数量:
          <number-box @getcount="getNumberboxcount" :max="goodsinfo.stock_quantity"></number-box>
        </p>
        <div class="buy-button">
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="danger" @click="AddtoShopcar">加入购物车</mt-button>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品编号：{{ goodsinfo.goods_no}}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity}}件</p>
          <p>上架时间：{{ goodsinfo.add_time | dataFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" plain size="large" @click="getDesc(id)">图片介绍</mt-button>
        <mt-button type="danger" plain size="large" @click="getcomment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import numberbox from "../subcomponents/goodlist_numberBox.vue";
import swipes from "../subcomponents/Swipes.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [], //保存轮播图数据
      goodsinfo: {}, //保存商品信息
      isBallapper: false,
      numberboxcount: 1
    };
  },
  created() {
    this.getlunbotu(), this.getgoodsinfo();
  },
  methods: {
    getlunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.body.message;
        }
      });
    },
    getgoodsinfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.message[0];
        } else {
          Toast("获取数据失败");
        }
      });
    },

    //使用程序式导航进行页面跳转
    getDesc(id) {
      this.$router.push({ name: "getdesc", params: { id } });
    },
    getcomment(id) {
      this.$router.push({ name: "getcomment", params: { id } });
    },
    AddtoShopcar() {
      this.isBallapper = !this.isBallapper;

      var carinfo = {
        //创建一个对象用来向公共存储中mutation中的方法传数据
        id: this.id,
        count: this.numberboxcount,
        price: this.goodsinfo.sell_price,
        isselect: true
      };

      this.$store.commit("getcarinfo", carinfo);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    Enter(el, done) {
      el.offsetWidth; //获取两个元素的距离顶部跟左侧的动态数据，相减获取自适应的距离
      const ballposition = el.getBoundingClientRect();
      const badgeposition = document
        .getElementById("barge")
        .getBoundingClientRect();
      const left = badgeposition.left - ballposition.left;
      const top = badgeposition.top - ballposition.top;
      el.style.transform = `translate(${left}px, ${top}px)`; //使用es6语法
      el.style.transition = "all 0.5s cubic-bezier(.46,-0.4,1,.49)";
      done();
    },
    afterEnter() {
      this.isBallapper = !this.isBallapper;
    },
    getNumberboxcount(c) {
      //获取子组件值使用的方法
      this.numberboxcount = c;
      console.log(this.numberboxcount);
    }
  },
  components: {
    "lunbo-box": swipes,
    "number-box": numberbox
  }
};
</script>


<style lang="scss" scoped>
.goodslist-container {
  background-color: #ccc;
  overflow: hidden;
  margin-bottom: 0;
  .mui-card {
    .mui-card-content {
      .price {
        padding-top: 15px;
        padding-left: 15px;
        margin: 0;
        font-size: 15px;
        .market-price {
          text-decoration: line-through;
        }
        .sell-price {
          color: red;
          font-weight: bold;
        }
      }
      .numberbox {
        padding: 15px;
        margin: 0;
      }
    }
    .buy-button {
      margin-bottom: 15px;
      display: flex;
      .mint-button--normal {
        margin: 0 15px;
      }
    }
  }
  .mui-card-footer {
    display: block;
  }
  .mint-button--primary.is-plain {
    margin-bottom: 15px;
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 88;
    top: 394px;
    left: 154px;
  }
}
</style>