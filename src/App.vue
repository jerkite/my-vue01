<template>


    <div class="app-container">


        <!-- Header区域 -->
        <mt-header fixed title="Vue项目"></mt-header>




        <!-- 中间router组件区域 -->

      <transition  mode="out-in">
          <router-view></router-view>
      </transition>


        <!-- Tabbar区域 -->


        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-itemlzk" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-itemlzk" to="/vip">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-itemlzk" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-itemlzk" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>

</template>
 

<script>



</script>

<style lang="scss" scoped>

.app-container{
    padding-top:40px;
    padding-bottom:55px;
    overflow-x:hidden;

.mint-header.is-fixed{
    z-index:99;
}
.v-enter
{
    opacity:0;
    transform:translateX(100%);
}
.v-leave-to{
    opacity:0;
    transform:translateX(-100%);
}


.v-enter-active,
.v-leave-active{
    transition:all 0.5s ease; 
    //position:absolute;
}

.mui-bar-tab .mui-tab-itemlzk{
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
    }
.mui-bar-tab .mui-tab-itemlzk.mui-active{
    color: #007aff;
}
.mui-bar-tab .mui-tab-itemlzk .mui-icon{
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
 }
 .mui-bar-tab .mui-tab-itemlzk .mui-icon~.mui-tab-label{
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
 }
}

</style>