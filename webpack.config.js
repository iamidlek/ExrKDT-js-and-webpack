const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env, options) => {
  console.log(env,options)
  return {
    resolve: {
      extensions: ['.js','.vue'],
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    },
    entry: './src/main.js',
    output: {
      // path: path.resolve(__dirname, 'dist'),
      // filename: 'app.js',
      publicPath: '/', //절대경로 추가
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.s?css$/,
          use: [
            'vue-style-loader',
            // 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'static' }
        ]
      }),
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      })
    ],
    devServer: {
      port: 8080,
      open: true,
      // historyApiFallback: true 뒤로가기 앞으로가기 등
      // 라우터의 히스토리모드에서 필요
    }
  }
}
