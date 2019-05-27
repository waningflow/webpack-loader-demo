const babel = require('@babel/core')

module.exports = function(source) {
  var babelOptions = {
    presets: ['@babel/preset-env']
  }
  let nSource = babel.transform(source, babelOptions)
  return nSource.code
}
