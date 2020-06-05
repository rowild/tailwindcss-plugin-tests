const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Export the webpack configuration
module.exports = {
  stats: {
    entrypoints: false,
    children: false
  },
  entry: {
    startpage: './src/scripts/index.js'
  },
  output: {
    filename: 'scripts/[name].bundle.js',
    path: path.resolve(__dirname, './../public'),
    publicPath: '/'
  },
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: true
          }
        }
      },
      // CSS
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              importLoaders: 1,
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          'postcss-loader'
        ]
      },
      // HTML
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/templates/index.html',
      title: 'TailwindCSS Test Site',
      pageTitle: 'Tailwindcss Test Site',
      minify: false
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ]
}
