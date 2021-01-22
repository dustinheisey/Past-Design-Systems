module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Climate Strike Oregon + Week of Action', // Navigation and Site Title
  titleAlt: 'Climate Strike Oregon + Week of Action', // Title for JSONLD
  description: '',
  headline: 'Climate Strike Oregon + Week of Action', // Headline for schema.org JSONLD
  url: 'https://climatestrikeoregon.org', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/static/strike-dd2a4c954b7cde9984d8bbc38d5f1d81.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/assets/images/favicon.png', // Used for manifest favicon generation
  shortName: 'Climate Strike OR', // shortname for manifest. MUST be shorter than 12 characters
  author: 'DustinHeisey', // Author for schemaORGJSONLD
  themeColor: '#E9A41E',
  backgroundColor: '#FAFAFA',

  twitter: '@PortlandStrike', // Twitter Username
  facebook: 'Climate Strike Oregon', // Facebook Site Name
  googleAnalyticsID: 'UA-147623886-1'
}
