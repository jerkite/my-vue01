//入口文件
import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

import VuePreview from 'vue-preview'
 
// 默认安装
Vue.use(VuePreview)


import moment from 'moment'
//定义全局过滤器
Vue.filter('dataFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

//导入router.js路由模块
import router from './router.js'


//导入vue-resource包
import VueResource from 'vue-resource'
//使用VueResource
Vue.use(VueResource)
//使用全局配置设置默认值
Vue.http.options.root = 'http://www.liulongbin.top:3005';



//将以application/x-www-form-urlencodedMIME类型的形式发送请求
Vue.http.options.emulateJSON = true;

//导入App根组件
import app from './App.vue'



//导入MUI中的组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'




//全局导入Mnit-UI中的组件
import MintUI from 'mint-ui' 
Vue.use(MintUI)
import 'mint-ui/lib/style.css'



//导入Mnit-UI中的样式
import 'mint-ui/lib/style.css'




var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})
