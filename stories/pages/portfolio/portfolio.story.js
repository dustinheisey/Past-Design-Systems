import renderHeader from '../../../macros/regions/header.njk'
import renderGrid from '../../../macros/regions/portfolio.njk'
import renderTestimonials from '../../../macros/regions/testimonials.njk'
import renderCta from '../../../macros/regions/cta.njk'

import {
  header,
  hero,
  portfolio,
  testimonials,
  cta,
  themes
} from '../../util/consts.js'
import { storyProps } from '../../util/funcs.js'

export default {
  title: 'Pages/Portfolio',
  argTypes: {
    headerVariant: {
      control: 'select',
      options: [...header, ...hero],
      table: {
        category: 'Header'
      }
    },
    headerTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Header'
      }
    },
    gridVariant: {
      control: 'select',
      options: portfolio,
      table: {
        category: 'Grid'
      }
    },
    gridTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Grid'
      }
    },
    testimonialsVariant: {
      control: 'select',
      options: testimonials,
      table: {
        category: 'Testimonials'
      }
    },
    testimonialsTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Testimonials'
      }
    },
    ctaVariant: {
      control: 'select',
      options: cta,
      table: {
        category: 'CTA'
      }
    },
    ctaTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'CTA'
      }
    }
  },
  parameters: {
    status: {
      type: 'beta'
    }
  },
  args: {
    headerTheme: 'background',
    gridTheme: 'background',
    testimonialsTheme: 'background',
    ctaTheme: 'background'
  }
}

export const Default = ({
  headerVariant,
  headerTheme,
  gridVariant,
  gridTheme,
  testimonialsVariant,
  testimonialsTheme,
  ctaVariant,
  ctaTheme
}) =>
  `
  ${renderHeader(storyProps({ variant: headerVariant, theme: headerTheme }))} 
  ${renderGrid(storyProps({ variant: gridVariant, theme: gridTheme }))} 
  ${renderTestimonials(
    storyProps({ variant: testimonialsVariant, theme: testimonialsTheme })
  )} 
  ${renderCta(storyProps({ variant: ctaVariant, theme: ctaTheme }))} 
  `
