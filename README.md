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


## 改造图片分享的路由跳转  
 1. 新建一个组件页面 
 2. 改造路由链接 HomeContainer.vue将对应的a标签改成router-link  
 3. 添加一个路由规则 router.js  

## 实现图片分享列表中顶部的滑动区域 
 1. 使用 MUI 的 tab-top-webview-main.html 控件  
 2. 当拿到 UI 代码片段之后，需要把 mui-fullscreen去掉 不然会遮住头部Header区域  
 3. 当页面布局没有大问题之后，发现无法实现滑动效果，此时，需要使用官方推荐的形式，去初始化一下控件,具体初始化的方式，参考官方文档:http://dev.dcloud.net.cn/mui/ui/#scroll  
 

## 移除滑动区域的警告问题
1. 为 mui-slider 类样式，添加，touch-action: pan-x;属性样式，从而支持 此元素的 单指水平滑动效果，提高滑动的流畅度；

## 解决 tabbar 区域 和 图片分类列表JS行为冲突而无法点击跳转问题
1. 冲突的原因：每一个tabbar 按钮的 类样式mui--tab-item和JS行为有冲突；
2. 解决的思路：把所有和 `mui-tab-item`相关的样式粘出来，然后改个类名，重新把自己的类名，替换掉之前的即可

## 获取图片分类数据并加载到页面上
1. 获取分类数据  
2. 手动把 添加｛title:"全部", id:0｝ 分类信息，通过数组的 unshift 方法，头部追加到数组中  
3. 把 获取到的分类，挂载到 data 上的 cate 中  
4. 默认设置全部分类被高亮选中：通过 :class结合 三元表达式，把 id为0那一项分类，设置为默认选中； 

## 默认加载全部的分类数据
1. 定义一个getPhotoList的方法， 接收一个分类Id，然后根据Id获取所有的图片列表  
2. 把获取到的图片，挂载到 list中  
3. 根据Mint-UI 的 lazy-load 组件，实现图片的懒加载效果  
  3.1在实现懒加载效果时候，需要注意：图片的 URL 地址，需要通过v-lazy来指定  
  3.2需要把图片的样式也粘贴到项目中，同时，把 image选择器修改成img标签选择器  


 ## 点击图片分类，切换图片列表数据
 1. 为每一个分类，添加点击事件，重新发起数据请求，来获取图片列表  

 ## 点击图片跳转到图片详情页面的路由改造
 1. 把 每个图片的 li 改造成router-link同时，要添加tag="li"属性，而且，跳转的链接，需要使用:to来设置，因为需要传递这个图片的Id过去  
2. 添加一个路由的规则，在规则中，定义id:this.$route.params.id,来快速传递路由中的参数  
3. 添加路由对应的组件  

## 开发图片的详情页面
1. 根据id:this.$route.params.id中接收的图片Id，获取图片的详情数据
2. 根据图片的详情，渲染页面最基本的结构
3. 发表评论的功能，直接引用现成的组件：
  3.1使用 import 把评论子组件导入到当前组件中
  3.2把 导入的评论组件对象，注册 为 当前 图片详情页面的子组件 components
  3.3以标签形式，把注册好的评论子组件名称，引入到页面指定区域
  3.4注意：如果要实现评论的功能，需要在（以标签形式）引用评论子组件的时候，为其传递一个 :id="newid"的属性，属性值，应该是当前图片的id;

 ## 实现缩略图的效果
 1. 先加载所有的图片并显示到页面上；
 2. 使用vue-preview插件来实现缩略图效果；
 3. 如何使用缩略图组件呢：  
  3.1运行npm i vue-preview -S安装  
  3.2在main.js导入此包并使用import VuePreview from 'vue-preview' Vue.use(VuePreview)  
  3.2在页面中，先把获取到的图片，按照标准的格式做一层包装：为每个图片添加w、h、msrc属性  
  3.3把官方提供的 例子中的vue-preview标签粘贴到页面中，去渲染数据就行了  



## 修改缩略图的样式
1.在vue-preview外层定义一个类名为thumimg的div  
2.找到所对应的类逐层向下定义样式  
3.需要把style中的scoped删掉，才能展示效果  


## 点击商品购买跳转到商品列表页面
  1. 添加商品列表的组件  
  2. 改造商品购买为router-link  
  3. 添加路由规则  

## 实现商品列表的经典两列布局
  1. 外层有一个 goodslist-container， 里面的每个商品都是goodsinfo  
  2. 给外层的goodslist-container设置 display:flex;布局，同时为了让一行只显示两个商品，我们为每个goods-item添加了宽度为49%;同时，设置flex-wrap: wrap  
  3. 通过 为父盒子添加margin: 8px; 来挤出左右的间距    
  4. 为了保留出中间的间隙，为父盒子goodslist-container添加了justify-content: space-between  



## 改造进入商品详情页面的路由链接
1. 使用编程式导航跳转页面设置 this.$router.push({ name: 'goodsinfo', params: { id } })  
2. 添加新的组件页面  
3. 添加路由和组件的对应规则；

## 实现商品详情页面的卡片视图布局
1. 使用 MUI提供的 card.html 来实现即可  



## 实现商品详情页面的轮播图效果
1.将轮播图方法抽出为一个子组件为Swipes  
2.在商品详情页面中调用子组件  



## 实现首页和商品轮播图的宽高设置
1. 经过分析发现：首页和商品页面的轮播图，对于图片的宽有分歧：首页期望图片是：宽高100%商品详情页面期望图片是： 高度100%， 宽度自适应，图片居中显示   
2. 让轮播图组件，提供一个 isfull 属性，表示是否撑满父元素；如果为true,表示，宽和高都要是100%，如果为 false，表示，宽是 自适应，高度是100%，同时图片居中显示  


## 进入商品详情中的图文介绍和商品评论的编程式导航
1.使用编程式导航跳转页面设置 this.$router.push({ name: 'goodsdesc', params: { id } })
  this.$router.push({ name: 'goodscomment', params: { id } })  

## 设置点击购物车出现小球半场动画
1.创建小球并给小球设置position:absolute,确定小球的初始位置   
2.根据分析需要确定小球距页面顶端和左侧的距离和小球所要到达位置距页面顶端和左侧的距离进行相减操作获得动态数据  
 2.2使用getBoundingClientRect()方法可以获得元素的top,left值。  
 2.2給小球加上ref="ball"可以使用 this.$refs.ball获得元素  


## 设置购买数量的最大值
1.这里需要父组件向子组件传值，使用Props:[]向子组件传递数据  
2.由于this.$http.get是异步加载，所以在子组件得到的件数最大值是undefined  
3.可以用watch监听机制监听到max被赋值后，使用mui('.mui-numbox').numbox().setOption('max',newval)来給获得购买数量的最大值  