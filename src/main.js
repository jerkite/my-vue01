//入口文件
import Vue from 'vue'


import app from './App.vue'





//导入MUI中的样式组件
import './lib/mui/css/mui.min.css'

//导入MUI中的字体组件
import './lib/mui/fonts/mui.ttf'
import './lib/mui/fonts/mui-icons-extra.ttf'




//按需导入Mnit-UI中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)


//导入Mnit-UI中的样式
import 'mint-ui/lib/style.css'




















var vm = new Vue({
    el: "#app",
    render: c => c(app)
})
