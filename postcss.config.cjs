module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 0,
      autoprefixer: true,
      features: { "nesting-rules": false },
    },
  },
};