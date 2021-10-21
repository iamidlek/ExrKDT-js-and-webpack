const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, options) => {
  return { 
    entry: './main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ]
  }
}
