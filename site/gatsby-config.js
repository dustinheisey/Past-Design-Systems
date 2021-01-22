const meta = require('./src/config/meta')

const pathPrefix = meta.pathPrefix === '/' ? '' : meta.pathPrefix

module.exports = {
  siteMetadata: {
    siteUrl: meta.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: meta.title,
    description: meta.description,
    siteLanguage: meta.siteLanguage,
    headline: meta.headline,
    author: meta.author,
    logo: meta.logo,
    ogLanguage: meta.ogLanguage,
    twitter: meta.twitter,
    facebook: meta.facebook
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images'
      }
    },
    `theme`,
    `layout`,
    `elements`,
    `components`,
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './src/config/typography'
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: meta.url
      }
    },
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest', // Progressive Web App
      options: {
        name: meta.title,
        short_name: meta.shortName,
        description: meta.description,
        start_url: '/',
        background_color: meta.backgroundColor,
        theme_color: meta.themeColor,
        display: 'standalone',
        icon: meta.favicon
      }
    }
  ]
}
