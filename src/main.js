//入口文件
import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入router.js路由模块
import router from './router.js'


//导入vue-resource包
import VueResource from 'vue-resource'
Vue.use(VueResource)


//导入App根组件
import app from './App.vue'



//导入MUI中的组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'




//按需导入Mnit-UI中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入Mnit-UI中的样式
import 'mint-ui/lib/style.css'




var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})
