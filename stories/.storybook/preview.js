import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../../styles/style.min.css'

export default {
  parameters: {
    darkMode: {
      darkClass: 'mode-dark',
      lightClass: 'mode-light',
      classTarget: 'html',
      stylePreview: true
    },
    backgrounds: { disable: true },
    viewport: {
      viewports: INITIAL_VIEWPORTS
    },
    viewMode: 'docs',
    options: {
      storySort: {
        order: [
          'Pages',
          [
            'Navigation Builder',
            'Footer Builder',
            'Landing Builder',
            'About Builder',
            'Portfolio Builder',
            'Programs or Services Builder',
            'Program or Service Builder',
            'Testimonials or Impact Builder',
            'Contact Builder',
            'Blog Builder',
            'Blog Post Builder',
            'FAQ Builder',
            'Donate Builder',
            'News or Events Builder',
            'Partners Builder',
            'Get Involved Builder',
            'Resources Builder',
            '404 Builder',
            'Privacy Policy Builder',
            'Terms & Conditions Builder',
            'Page Builder'
          ],
          'Regions',
          'Components',
          'Layouts',
          'Elements',
          'Tokens'
        ]
      }
    }
  },
  args: {
    content: {
      overline: 'Anim irure dolore do',
      headline: 'Est do esse veniam proident tempor qui adipisicing qui',
      body: 'Minim irure sint veniam nisi aliqua pariatur nostrud quis excepteur reprehenderit. Irure Lorem adipisicing qui consequat non ullamco nulla cillum voluptate mollit et duis dolor proident.',
      btn: {
        label: 'CTA Label',
        href: '#'
      }
    }
  }
}
