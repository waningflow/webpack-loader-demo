const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['w-babel-loader.js']
      }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, './loader')]
  }
}
