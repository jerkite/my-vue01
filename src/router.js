import VueRouter from 'vue-router'


//导入路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import VipContainer from './components/tabbar/VipContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/newslist/NewsList.vue'
import NewsInfo from './components/newslist/NewsInfo.vue'
import PhotoList from './components/photolist/PhotoList.vue'
import PhotoInfo from './components/photolist/PhotoInfo.vue'
import GoodsList from './components/goodslist/GoodsList.vue'
import GoodsInfo from './components/goodslist/GoodsInfo.vue'
import GetDesc from './components/goodslist/GetDesc.vue'
import GetComment from './components/goodslist/GetComment.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/Vip', component: VipContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo/:id', component: PhotoInfo },
        { path: '/home/goodslist', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
        { path: '/home/getdesc/:id', component: GetDesc, name: 'getdesc' },
        { path: '/home/getcomment/:id', component: GetComment, name: 'getcomment' },

    ],
    linkActiveClass: 'mui-active' //默认是router-link-active
})

export default router
