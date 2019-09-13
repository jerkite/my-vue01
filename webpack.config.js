const path = require('path')

const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin'); 

module.exports = {
    entry:path.join(__dirname, './src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join( __dirname, './src/index.html'),//指定模版页面
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/, use:['style-loader', 'css-loader']},
            {test:/\.less$/, use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},
            {test:/\.vue$/,use:'vue-loader'},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=37028&name=[hash:8]-[name].[ext]'},
            {test:/\.(svg|ttf|eot|woff|woff2)$/, use:'url-loader'},
        ]
    },
    resolve:{
        alias:{
            /* "vue$":"vue/dist/vue.js" //这种方式加载会更慢一些 */
        }   
    }
}