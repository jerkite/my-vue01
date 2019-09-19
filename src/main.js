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
Vue.filter('dataFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
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


//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//先从本地存储中把购物车数据取出来，若没有在赋予一个空数组
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state: {   //$store.name
        car: car  //将购物车中的商品的数据用一个数组存储起来，在数组中存储一些需要用到的商品的信息对象
    },
    mutations: {   //$store.commit(state,唯一的参数（可以是数组和对象）)
        getcarinfo(state, carinfo) {
            //若商品中没有该数据对象
            var flag = false

            //已经存在该对象，则改变它里面的数量值就行
            state.car.some(item => {
                if (item.id == carinfo.id) {
                    item.count += carinfo.count
                    flag = true
                    return true
                }

            })

            //若对象不在数组中，直接将商品信息对象加入数组中
            if (!flag) {
                state.car.push(carinfo)
            }
            //将更新完的car数组存储到本地内存中
            localStorage.setItem('car', JSON.stringify(state.car))

        },
        getUpdateCarCount(state, goodsinfo) {
            state.car.forEach(item => {
                if (item.id == goodsinfo.id) {
                    item.count = goodsinfo.count
                    return true
                }
            })
            //修改商品数量后要保存在本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFromCar(state, id) {
            state.car.some((item, i) => {   //判断id是否相同 并根据索引删除数据
                if (item.id = id) {
                    state.car.splice(i, 1)
                    return true
                }
            })
            //删除数据后本地存储也应该更新数据
            localStorage.setItem('car', JSON.stringify(state.car))

        },
        updateGoodsSelect(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.isselect = info.isselect
                }
            })
            //更新数据要保存在本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: {   //$store.getters.name(state)
        getAllCount(state) {
            var c = 0
            state.car.forEach(item => {
                c += parseInt(item.count)
            })
            return c
        },
        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getselect(state) {
            var s = {}
            state.car.forEach(item => {
                s[item.id] = item.isselect
            })
            return s
        },
        getAllCountAndAmount(state) {
            var c = {
                count: 0,
                amount: 0
            }
            state.car.forEach(item => {
                if (item.isselect) {
                    c.count += item.count
                    c.amount += item.price * item.count
                }
            })
            return c
        }

    }
})



var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router,
    store
})
