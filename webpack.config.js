const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, options) => {
  console.log(env,options)
  return {
    resolve: {
      extensions: ['.js'],
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
          test: /\.s?css$/,
          use: [
            'style-loader',
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
