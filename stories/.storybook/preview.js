import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { themes } from '../util/consts.js'
import '../../styles/style.min.css'

export default {
  parameters: {
    backgrounds: {
      values: [
        {
          name: 'Background',
          value: 'var(--color-background)'
        },
        {
          name: 'Surface',
          value: 'var(--color-surface)'
        },
        {
          name: 'Dark Background',
          value: 'var(--color-background-dark)'
        },
        {
          name: 'Dark Surface',
          value: 'var(--color-surface-dark)'
        },
        {
          name: 'Primary',
          value: 'var(--color-primary)'
        },
        {
          name: 'Primary Container',
          value: 'var(--color-primary-container)'
        },
        {
          name: 'Secondary',
          value: 'var(--color-secondary)'
        },
        {
          name: 'Secondary Container',
          value: 'var(--color-secondary-container)'
        },
        {
          name: 'Tertiary',
          value: 'var(--color-tertiary)'
        },
        {
          name: 'Tertiary Container',
          value: 'var(--color-tertiary-container)'
        }
      ]
    },
    darkMode: {
      darkClass: 'mode-dark',
      lightClass: 'mode-light',
      stylePreview: true
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS
    },
    docs: { canvas: { withToolbar: false } },
    decorators: [
      (story) =>
        `
        {%- from "../../macros/macro.njk" import macro -%}
        ${story()}
      `
    ],
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
