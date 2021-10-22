const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, options) => {
  return { 
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
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
        template: './src/index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'static' }
        ]
      })
    ]
  }
}
