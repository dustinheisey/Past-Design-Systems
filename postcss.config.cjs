const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-inline-media'),
    require('postcss-preset-env')({
      stage: 1,
      browsers: 'last 2 versions'
    }),
  ]
}
