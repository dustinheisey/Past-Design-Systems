// const meta = require('./src/config/meta')
const website = require('./src/config/website')

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  // siteMetadata: {
  //   siteUrl: meta.siteUrl,
  //   siteTitle: meta.siteTitle,
  //   siteTitleShort: meta.siteTitleShort,
  //   siteDescription: meta.siteDescription,
  //   twitter: meta.twitter,
  //   facebook: meta.facebook,
  //   instagram: meta.instagram
  // },
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    logo: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook
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
        siteUrl: website.url
      }
    },
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest', // Progressive Web App
      options: {
        name: website.title,
        short_name: website.shortName,
        description: website.description,
        start_url: '/',
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: website.googleAnalyticsID
      }
    }
  ]
}
