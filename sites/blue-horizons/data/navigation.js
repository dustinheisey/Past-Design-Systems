module.exports = {
  header: {
    links: [
      { label: 'About', url: '/about' },
      {
        label: 'Conservation Programs',
        url: '/conservation-programs',
        subLinks: [
          { label: 'Marine Ecosystems', url: '/conservation-programs/marine-ecosystems' },
          {
            label: 'Sustainable Practices',
            url: '/conservation-programs/sustainable-practices'
          },
          { label: 'Awareness Campaigns', url: '/conservation-programs/awareness-campaigns' }
        ]
      },
      { label: 'Projects', url: '/projects' },
      { label: 'Blog', url: '/blog' }
    ],
    action: { label: 'Support Us', url: '/donate' }
  },
  bottombar: {
    links: [
      { label: 'Home', url: '/', icon: 'home' },
      { label: 'About', url: '/about', icon: 'about' },
      { label: 'Conservation Programs', url: '/conservation-programs', icon: 'conservation' },
      { label: 'Projects', url: '/projects', icon: 'projects' },
      { label: 'Blog', url: '/blog', icon: 'blog' }
    ],
    fab: { label: 'Contact', url: '/contact', icon: 'contact' }
  },
  footer: {
    groups: [
      {
        title: 'Conservation Programs',
        links: [
          { label: 'Marine Ecosystems', url: '/conservation-programs/marine-ecosystems' },
          {
            label: 'Sustainable Practices',
            url: '/conservation-programs/sustainable-practices'
          },
          { label: 'Awareness Campaigns', url: '/conservation-programs/awareness-campaigns' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'Home', url: '/' },
          { label: 'About', url: '/about' },
          { label: 'Projects', url: '/projects' },
          { label: 'Blog', url: '/blog' },
          { label: 'Support Us', url: '/donate' }
        ]
      },
      {
        title: 'Legal',
        links: [
          {
            label: 'Privacy Policy',
            url: 'https://www.example.com/privacy-policy'
          },
          {
            label: 'Terms of Service',
            url: 'https://www.example.com/terms-of-service'
          },
          {
            label: 'Cookies',
            url: 'https://www.example.com/cookies'
          },
          { label: 'Sitemap', url: '/sitemap.xml' }
        ]
      }
    ],
    social: [
      {
        label: 'Twitter',
        icon: 'twitter',
        url: 'https://twitter.com/bluehorizons'
      },
      {
        label: 'Facebook',
        icon: 'facebook',
        url: 'https://www.facebook.com/bluehorizons'
      },
      {
        label: 'Instagram',
        icon: 'instagram',
        url: 'https://www.instagram.com/bluehorizons'
      },
      {
        label: 'LinkedIn',
        icon: 'linkedin',
        url: 'https://www.linkedin.com/company/bluehorizons'
      }
    ]
  }
}
