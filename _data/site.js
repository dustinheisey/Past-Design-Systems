const config = {
  title: 'TODO - site title',
  url: 'TODO - site url',
  navigation: {
    logo: {
      src: './public/img/logo',
      alt: 'TODO - site title'
    },
    header: {
      variant: 'TODO - header variant',
      links: [
        // TODO links
        /* Simple Link
          {
            label: 'label',
            external: true || false,
            url: 'path'
          },
        */
        /*
          Link with Sub Links
          {
            label: 'label',
            url: 'path',
            external: true || false
            subLinks: [
              { label: 'label', url: 'path' , external: true || false },
              ...
            ]
          }
        */
        
      ],
      action: { 
        label: 'TODO - action button label', 
        url: 'TODO - action button path', 
        // external:  true || false
      },
      bottombar: {
        links: [
          // TODO bottombar links
          /* Simple Link
            {
              label: 'label',
              url: 'path',
              icon: 'icon'
            },
          */
        ],
        fab: { 
          label: 'TODO - fab label', 
          url: 'TODO - fab path', 
          icon: 'icon' 
        }
      }
    },
    footer: {
      variant: 'TODO - footer variant',
      links: [
        // TODO - footer links
        /* Simple Link
          {
            label: 'label',
            external: true || false,
            url: 'path'
          },
        */
      ],
      // carbon: true || false, (show carbon calculator in footer)
      social: [
        // TODO - social links
        /* Social Link
          {
            label: 'label',
            icon: 'logo-${icon}',
            url: 'social url'
          },
        */
      ],
      copywrite: '© 2024 TODO - site title'
    }
  },
  pages: [
    // TODO pages
    {
      url: 'TODO - page path',
      header: false,
      title: 'TODO - SEO friendly page title',
      description:
        'TODO - SEO friendly page description',
      regions: {
        // TODO page regions
        regionName: {
          layout: 'TODO - layout',
          /*
          ...properties of the layout you picked
          */
        },
      }
    },
  ]
}

module.exports = config
