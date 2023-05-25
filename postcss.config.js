module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-reporter'),
    require('postcss-preset-env')({ stage: 0 }),
    require('cssnano')({
      preset: 'default'
    })
  ]
}
