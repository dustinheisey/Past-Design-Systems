import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { themes } from '../util/consts.js'
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
  argTypes: {
    theme: {
      control: {
        type: 'select'
      },
      options: themes
    }
  }
}
