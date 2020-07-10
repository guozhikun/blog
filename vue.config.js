//https://cli.vuejs.org/zh/config/#publicpath
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {

  //部署应用包时的基本 URL。
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/app',

  //生产环境构建文件的目录名称 default:dist
  outputDir: 'dists',

  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。 default:''
  assetsDir: 'assets',

  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径. default:'index.html'
  indexPath: 'index.html',

  //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。 default:true
  filenameHashing: true,

  //...
  // pages:{},

  //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效 default:true
  // value : Boolean | 'warning' | 'default' | 'error'
  lintOnSave: true,

  //是否使用包含运行时编译器的 Vue 构建版本 default:false
  runtimeCompiler: false,

  //默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。 Array<string | RegExp>
  //transpileDependencies:[],

  //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  //productionSourceMap:true,

  //设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。 default:undefined | String
  // crossorigin:undefined,

  devServer: {
    port: '8083',
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('less')
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({
        remUnit: 192,
        remPrecision: 8,
        javascriptEnabled: true,
        // loaders: {
        //   less: ExtractTextPlugin.extract({
        //     fallback: 'vue-style-loader',
        //     use: 'css-loader!less-loader'
        //   }),
        //   css: ExtractTextPlugin.extract({
        //     fallback: 'vue-style-loader',
        //     use: 'css-loader'
        //   })
        // }
      })
      .end()

    config.plugin('html').tap(args => {
      args[0].title = 'Doge' // index.html <title />
      return args
    })
  },
  configureWebpack: config => {
    const plugins = [];
    plugins.push(
      //  new ExtractTextPlugin({
      //    filename: 'style/color.less'
      //  })
    )
    config.plugins = [...config.plugins, ...plugins]
  }

};