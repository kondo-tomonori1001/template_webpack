const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry:{
    'main': `./src/common/scripts/main/index.js`,
    'sampleApp': './src/common/scripts/sampleApp/index.js'
  },
  output:{
    path:path.join(__dirname,'dist'),
    filename:"common/scripts/[name].js"
  },
  module: {
    rules: [
      // ===== Babel =====
      {
        test:/\.js$/,
        use:[
          {
            loader:"babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ]
            }
          }
        ]
      },
      // ===== Sass =====
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          //htmlファイルのhead内にcssを展開
          "style-loader",
          {
            loader:'css-loader', 
            options:{ 
              url:false 
            }
          },
          //scssをcssにコンパイル
          {
            loader:'sass-loader', 
            options:{
              implementation:require('sass'),
            }
          }
        ]
      },
      // ===== Vue =====
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  },
  target: ["web","es5"],
  plugins:[
    // ===== html loader =====
    new HtmlWebpackPlugin({
      filename: `./index.html`,
      template: `./src/index.html`,
    }),
    new HtmlWebpackPlugin({
      filename: `./contact/index.html`,
      template: `./src/contact/index.html`,
      chunks:['main'],
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.vue'], //jsファイルとvueファイルの拡張子の省略（'./foo.js'を'./foo'と省略して書けるようになる）
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
}
