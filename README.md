# Vue项目


## 有灵魂的前端练习生，用心去感受每一行代码中的诗情雅意，代码如诗

### 今天开始做项目


## 制作首页中的头部Header区域跟底部Tabbai区域
1. 头部使用Mnit-UI中的Header组件  
    1.1 在webpack4中需要多导入一个样式文件--import 'mint-ui/lib/style.css'  
2. 底部使用MUI中的Tabbar组件  
    2.1 加入小图标时需要在main.js中导入--import './lib/mui/css/mui.min.css'  
    2.2 在使用购物车小图标时需要多导入--import './lib/mui/css/icons-extra.css'  
    2.3 需要为购物车小图片使用如下样式--mui-icon-extra mui-icon-extra-cart  


## 将tabbar改造成router-link
1. 导入需要的包操作  
    1.1 导入路由的包import VueRouter from 'vue-router'  
    1.2 安装路由的Vue.use(VueRouter)  
    1.3 导入router.js路由模块import router from './router.js'  
2. 将a标签改为router-link 并将href改为to='/跳转位置'  
3. 设置路由高亮 用linkACtiveClass：mui-active，（默认为router-link-active）  



## 点击tabbar中的路由链接，进入对应的路由组件
1. 创建对应的.vue文件，并在router.js中导入路由组件  
2. 在routes中加入文件跳转位置与组件的名字  
3. 将标签router-view加入App.vue文件中,显示内容  

## 制作轮播图布局
1. 使用Mnit-UI中的Swipe, SwipeItem组件，实现轮播图模版加入  
2. 在样式中加为模版加入高度，否则无法显示  



## 加载首页轮播图中的数据
1. 导入包--import VueResource from 'vue-resource'--Vue.use(VueResource)  
2. 使用vue-resource中的this.$http.get获取数据  
3. 获取的数据保存到每个data上,然后使用v-for进行渲染  

## 导入九宫格模块
1. 使用MUI中的grid-default中的九宫格模块根据需求改成六宫格  
2. 将其中的被背景改成需求中的白色背景  
3. 将li中的边框设置为none  
4. 将它里面自带的图标改成自己的图片并给图片设置合适的大小一般为原照片的1/2倍  


## 給路由组件的切换增加动画效果
1. 給router-view标签加上transition标签  
2. 給v-enter,v-leave-to,v-enter-active,v-leave-active加上样式  
    2.1 为了使得组件内容能够从右边进左边出，v-enter,v-leave-to得分开来家样式  
    2.2 需要給最上层div加overflow-x:hidden隐藏下滑动条  
    2.3 給v-enter-activev-enter-active,v-leave-active加上position:absolute或者在transition标签中加入mode="out-in"  
【注】 position:absolute能够实现一个路由组件在出去的时候，另一个路由组件能够同时进来  
     而mode="out-in"是在组件出去后，另一个组件才进来。position:absolute衔接效果更好。  


## 完成新闻资讯列表的路由配置
 1. 创建新闻列表路由组件页面NewsList.vue  
 2. 将HomeContainer.vue中的对应的a标签改为路由链接  
 3. 为路由添加对应规则  

 ## 绘制新闻资讯页面的效果
 1. 使用mui中的media-list.html  
 2. 使用 display: flex;实现了css3弹性盒模型布局，让 元素左右贴边；justify-content: space-between;  

 ## 展示新闻列表的数据
 1. 当页面加载完毕之后，就要去获取页面数据，因此，应该在created钩子函数中调用获取数据的方法  
 2. 在 methods 中，定义个 getNewsList方法来获取数据this.$http.get()  
 3.. 当数据获取回来之后，如果想要通过`v-for`指令循环渲染到页面上，需要把 数据挂载到data上  


 ## 定义全局的过滤器来格式化时间字符串
 1. 经过分析，整个项目中，许多组件都需要格式化时间，因此，推荐定义为全局的时间过滤器  
 2. 定义全局过滤器的语法：Vue.filter('dateFormat', function(dataStr){})    
 3. 调用过滤器的语法：{{ item.add_time | dateFormat }}
 4. 这个时间过滤器，借助与第三方的`moment`插件来设置时间格式  
 5. 这个全局过滤器应该设置在main.js文件中  
 6. 为了提高用户体验度(可能有的用户想要的格式是年-月-日 时:分:秒,若用户只想要YYYY-MM-DD),此时，我们可以为过滤器提供一个可选的格式字符串  

 ## 实现新闻列表跳转到新闻详情
 1. 创建新闻详情组件  
 2. 改造每一个新闻列表项的a标签，为 router-link，其中， to 属性中的 id 值需要动态拼接给每一个 router-link, 因此，需要把 to属性，改造成 :to，然后，属性值中的 统一路径前缀：/home/newsinfo/应该被 单引号包裹起来，后面，在拼接上item.id即可  
 3. 添加路由规则  
 4. 当实现了以上三步之后，我们想在页面中，获取路由传递过来的参数   
    4.1 $route.params.id来获取，比较麻烦，是老的方式  



# 渲染新闻详情页面
1. 获取数据  
2. 挂载数据到 data 上  
3. 渲染页面  

## 评论子组件的封装和引用  
1. 在 项目的 创建src -> sub-components目录； 
2. 创建一个标准的vue组件，命名为 Comment.vue， 作为我们的评论子组件  
3. 哪个页面需要引用这个评论组件了，就在页面的script 节点中，通过 import的形式，导入此组件  
4. 在 页面的 script 中，通过 components属性注册导入的评论组件  
5. 把注册的组件名称，以标签形式，引入到页面上，就能够看到这个评论子组件了  


## 获取评论内容  
1. 前提： 在评论组件中，需要获取到新闻的id;  
2. 通过 属性传递的形式，父组件为子组件传递新闻的Id；  
3. 定义根据新闻Id和页码，获取评论数据的方法，并在 created钩子中，调用此方法，获取数据；  
4. 把获取到的数据，挂载到data上的comment-list中；并渲染页面；  

## 点击加载更多的评论  
1. 为加载更多按钮，绑定点击事件；  
2. 在事件中，让 pageindex自增 + 1，重新调用 获取 评论内容的方法； 
3. 当页码值+1之后，重新调用 获取 评论内容的方法；




## 实现发表评论的功能
 1. //将以application/x-www-form-urlencodedMIME类型的形式发送请求
    1.1 在main.js中加入Vue.http.options.emulateJSON = true;
 2. 在点击发表评论按钮的时候，处理函数中，做一下非法值校验，防止评论内容为空！
 3. 如果校验通过，则调用API接口提交评论数据到后端；
 4. 当评论成功后需要在客户端，组织出一个新的评论对象，手动unshift到评论数组comments中；