var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
      'babel-polyfill',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js",
      publicPath: "/"
  },
    devServer: {
        historyApiFallback: true
    },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}
