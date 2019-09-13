import VueRouter from 'vue-router'


//导入路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import VipContainer from './components/tabbar/VipContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'


var router = new VueRouter({
    routes:[
      { path: '/', redirect:'/home'},
      { path: '/home', component:HomeContainer },
      { path: '/Vip', component:VipContainer },
      { path: '/shopcar', component:ShopcarContainer },
      { path: '/search', component:SearchContainer }

  ],
  linkActiveClass:'mui-active' //默认是router-link-active
  })

  export default router
