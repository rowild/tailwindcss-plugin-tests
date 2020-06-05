const merge = require('webpack-merge')
const path = require('path')

// Import common settings
const common = require('./webpack.common')

// Configure the webpack dev server
const devServerOpts = {
  stats: 'normal', // 'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose'
  contentBase: path.resolve(__dirname, '../'),
  index: 'index.js',
  watchContentBase: true,
  compress: true,
  quiet: false,
  noInfo: false,
  historyApiFallback: true,
  hot: false,
  liveReload: true, // "hot" must be disabled
  overlay: true, // Enabling Error Overlay
  open: true, // Open the page in browser
  host: process.env.HOST, // Defaults to `localhost`
  port: process.env.PORT, // Defaults to 8080
  writeToDisk: true,
  onListening: function (server) {
    const port = server.listeningApp.address().port
    console.info('%c devServer listening on port: ' + port, 'background: olive; color: white; padding: 1px 2px')
  }
}

module.exports = merge(common, {
  devServer: devServerOpts,
  devtool: 'cheap-module-source-map',
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: ['webpack/**/*.*', 'node_modules']
  }
})
