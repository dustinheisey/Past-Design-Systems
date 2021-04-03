module.exports = {
  plugins: [
    require('postcss-inline-media'),
    require('postcss-preset-env')({
      stage: 1,
      browsers: 'last 2 versions'
    })
  ]
}
