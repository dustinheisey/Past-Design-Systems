module.exports = {
  logo: {
    src: './public/svg/logo',
    alt: "Ocean's Voice"
  },
  header: {
    links: [
      {
        label: 'About',
        url: '/about',
        subLinks: [
          { label: 'Impact', url: '/impact' },
          { label: 'Resources', url: '/resources' }
        ]
      },
      {
        label: 'Our Work',
        url: '/our-work',
        subLinks: [
          { label: 'Advocacy', url: '/our-work/advocacy' },
          { label: 'Conservation', url: '/our-work/conservation' },
          { label: 'Education', url: '/our-work/education' },
          { label: 'Research', url: '/our-work/research' }
        ]
      },
      { label: 'Get Involved', url: '/get-involved' },
      { label: 'Contact', url: '/contact' }
    ],
    action: { label: 'Donate', url: '/donate' }
  },
  bottombar: {
    links: [
      { label: 'Home', url: '/', icon: 'home' },
      { label: 'About', url: '/about', icon: 'about' },
      { label: 'Our Work', url: '/our-work', icon: 'wave' },
      { label: 'Impact', url: '/impact', icon: 'advocate' },
      { label: 'Resources', url: '/resources', icon: 'books' }
    ],
    fab: { label: 'Donate', url: '/donate', icon: 'donate' }
  },
  footer: {
    mission:
      "We are Ocean's Voice. Our mission is to protect and preserve the world's oceans, promoting sustainable practices, education, and research that leads to a vibrant marine ecosystem for future generations.",
    background: 'footer-background.svg',
    groups: [
      {
        title: 'Our Work',
        links: [
          { label: 'Advocacy', url: '/our-work/advocacy' },
          {
            label: 'Conservation',
            url: '/our-work/conservation'
          },
          { label: 'Education', url: '/our-work/education' },
          { label: 'Research', url: '/our-work/research' }
        ]
      },
      {
        title: 'Nonprofit',
        links: [
          { label: 'Home', url: '/', icon: 'home' },
          { label: 'About', url: '/about', icon: 'about' },
          { label: 'Our Work', url: '/our-work', icon: 'work' },
          { label: 'Impact', url: '/impact', icon: 'impact' },
          { label: 'Resources', url: '/resources', icon: 'resources' },
          { label: 'Donate', url: '/donate', icon: 'donate' }
        ]
      },
      {
        title: 'Legal',
        links: [
          {
            label: 'Privacy Policy',
            url: 'https://www.termsfeed.com/live/d5271eb0-e06a-49f5-9021-99c0bb40389b'
          },
          {
            label: 'Terms of Service',
            url: 'https://www.termsfeed.com/live/dc519ac0-71e6-49d3-a0d6-f9ce86815fa5'
          },
          {
            label: 'Cookies',
            url: 'https://www.termsfeed.com/live/012a4e98-08d0-48ab-b716-764b86ca84df'
          },
          { label: 'Sitemap', url: '/sitemap.xml' }
        ]
      }
    ],
    social: [
      {
        label: 'Medium',
        icon: 'logo-medium',
        url: 'https://medium.com/@dustin_heisey'
      },
      {
        label: 'Dribbble',
        icon: 'logo-dribbble',
        url: 'https://dribbble.com/dustin_heisey'
      },
      {
        label: 'Behance',
        icon: 'logo-behance',
        url: 'https://www.behance.net/dustin_heisey'
      },
      {
        label: 'LinkedIn',
        icon: 'logo-linkedin',
        url: 'https://www.linkedin.com/in/heiseydustin/'
      }
    ],
    copywrite: "© 2023 Ocean's Voice. All rights reserved."
  }
}
