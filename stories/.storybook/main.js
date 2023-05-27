/** @type { import('@storybook/html-webpack5').StorybookConfig } */

const config = {
  stories: [
    '../tokens/*.mdx',
    '../elements/*.story.js',
    '../layouts/*.story.js',
    '../components/*.story.js',
    '../regions/*.story.js',
    '../pages/*.story.js'
    // "../pages/*.story.js",
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@etchteam/storybook-addon-status'
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Source'
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.njk$/,
      use: [
        {
          loader: 'simple-nunjucks-loader'
        }
      ]
    })

    // Return the altered config
    return config
  }
}
export default config
