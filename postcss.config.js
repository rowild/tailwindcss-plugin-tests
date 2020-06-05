// const purgecss = require('@fullhuman/postcss-purgecss')
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './public/index.html',
    './src/templates/**/*.*',
    './src/scripts/**/*.js'
  ],
  defaultExtractor: content => content.match(/[\w-/:%.!]+(?<!:)/g) || []
})

// NOTE: postcss-preset-env includes custom properties, nested and autoprefixer
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({
      stage: 0,
      'nesting-rules': true
    }),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
