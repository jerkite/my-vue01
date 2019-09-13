#Vue项目


##有灵魂的前端练习生，用心去感受每一行代码中的诗情雅意，代码如诗

###今天开始做项目


##制作首页中的头部Header区域跟底部Tabbai区域
1.头部使用Mnit-UI中的Header组件
    1.1在webpack4中需要多导入一个样式文件--import 'mint-ui/lib/style.css'
2.底部使用MUI中的Tabbar组件
    2.1加入小图标时需要在main.js中导入--import './lib/mui/css/mui.min.css'
    2.2在使用购物车小图标时需要多导入--import './lib/mui/css/icons-extra.css'
    2.3需要为购物车小图片使用如下样式--mui-icon-extra mui-icon-extra-cart


##将tabbar改造成router-link
1.导入需要的包操作
    1.1导入路由的包import VueRouter from 'vue-router'
    1.2安装路由的Vue.use(VueRouter)
    1.3导入router.js路由模块import router from './router.js'
2.将a标签改为<router-link></router-link> 并将href改为to='/跳转位置'
3.设置路由高亮 用linkACtiveClass：mui-active，（默认为router-link-active）



##点击tabbar中的路由链接，进入对应的路由组件
1.创建对应的.vue文件，并在router.js中导入路由组件
2.在routes中加入文件跳转位置与组件的名字
3.将标签<router-view></router-view>加入App.vue文件中,显示内容

##制作轮播图布局
1.使用Mnit-UI中的Swipe, SwipeItem组件，实现轮播图模版加入
2.在样式中加为模版加入高度，否则无法显示



##加载首页轮播图中的数据
1.导入包--import VueResource from 'vue-resource'--Vue.use(VueResource)
2.使用vue-resource中的this.$http.get获取数据
3.获取的数据保存到每个data上,然后使用v-for进行渲染

##导入九宫格模块
1.使用MUI中的grid-default中的九宫格模块根据需求改成六宫格
2.将其中的被背景改成需求中的白色背景
3.将li中的边框设置为none
4.将它里面自带的图标改成自己的图片并给图片设置合适的大小一般为原照片的1/2倍


##給路由组件的切换增加动画效果
1.給router-view标签加上transition标签
2.給v-enter,v-leave-to,v-enter-active,v-leave-active加上样式
    2.1为了使得组件内容能够从右边进左边出，v-enter,v-leave-to得分开来家样式
    2.2需要給最上层div加overflow-x:hidden隐藏下滑动条
    2.3給v-enter-activev-enter-active,v-leave-active加上position:absolute或者在transition标签中加入mode="out-in"
【注】position:absolute能够实现一个路由组件在出去的时候，另一个路由组件能够同时进来
     而mode="out-in"是在组件出去后，另一个组件才进来。position:absolute衔接效果更好。