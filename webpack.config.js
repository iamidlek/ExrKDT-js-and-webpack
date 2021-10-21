const path = require('path')

module.exports = (env, options) => {
  return { 
    entry: './main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
  }
}
