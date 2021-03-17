const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry:`./src/common/scripts/index.js`,
  output:{
    path:path.join(__dirname,'dist'),
    filename:"main.js"
  },
  module: {
    rules: [
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
      }
    ]
  },
  target: ["web","es5"],
  plugins:[
    new HtmlWebpackPlugin({
      filename: `./index.html`,
      template: `./src/index.html`
    })
  ],
}
