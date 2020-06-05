const path = require('path')
const glob = require('glob-all')
const merge = require('webpack-merge')

const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')

// Import common webpack settings
const common = require('./webpack.common')

// White list patterns
const collectWhitelist = () => {
  return ['is-word-wrap', 'is-root-set', 'is-sub-set', 'is-desktop-state', 'is-mobile-state', 'content-subpage']
}

const collectWhitelistPatterns = () => {
  return [/^-/, /^is-/, /^has-/, /^cc-/, /^os-/, /^powermail/, /^sm:/, /^md:/, /^lg:/, /^xl:/, /[\w-/:]+(?<!:)/g]
}

const collectWhitelistPatternsChildren = () => {
  return [/^-/, /^is-/, /^has-/, /^cc-/, /^os-/, /^powermail/, /^sm:/, /^md:/, /^lg:/, /^xl:/, /[\w-/:]+(?<!:)/g]
}

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },
  plugins: [
    new OptimizeCssAssetsPlugin({
      // assetsNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: [
          'default', {
            discardComments: {
              removeAll: true
            }
          }
        ]
      },
      canPrint: true
    }),
    new PurgecssPlugin({
      paths: glob.sync([
        path.join(__dirname, '../src/**/*.*'),
        path.join(__dirname, '../templates/**/*.*'),
        path.join(__dirname, '../scripts/**/*.*')
      ]),
      whitelist: collectWhitelist,
      whitelistPatterns: collectWhitelistPatterns,
      whitelistPatternsChildren: collectWhitelistPatternsChildren
    })
  ]
})
