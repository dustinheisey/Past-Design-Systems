const path = require('path')

module.exports = {
  siteUrl: 'https://climatestrikeoregon.org',
  siteTitle: 'Climate Strike Oregon + Week of Action',
  siteTitleShort: 'Climate Strike Oregon',
  siteDescription:
    'Our house is on fire — let’s act like it. We demand climate justice for everyone. This week is our chance to show the politicians and fossil fuel billionaires that the real power lies with the people. This week is your chance to join the climate justice movement, and put a stop to business as usual.',
  author: 'Dustin Heisey',
  twitter: '@PortlandStrike',
  facebook: '@portlandstrikeforclimate',
  instagram: 'portlandclimatestrike',
  manifest: {
    themeColor: '#E9A41E',
    backgroundColor: '#ffffff'
  },
  logo: path.resolve(__dirname, '../assets/images/favicon.png')
}
