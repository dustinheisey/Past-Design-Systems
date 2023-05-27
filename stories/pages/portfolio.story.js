import renderHeader from '../../macros/regions/header.njk'
import renderGrid from '../../macros/regions/portfolio.njk'
import renderTestimonials from '../../macros/regions/testimonials.njk'
import renderCta from '../../macros/regions/cta.njk'

import {
  header,
  hero,
  portfolio,
  testimonials,
  cta,
  variant
} from '../util/layouts.js'

// - header [header/heroLayouts]
// - portfolio grid [portfolioLayouts]
// - testimonials [testimonialLayouts]
//   - cta[ctaLayouts]

export default {
  title: 'Pages/Portfolio',
  argTypes: {
    header: {
      control: 'select',
      options: [...header, ...hero]
    },
    grid: {
      control: 'select',
      options: portfolio
    },
    testimonials: {
      control: 'select',
      options: testimonials
    },
    cta: {
      control: 'select',
      options: cta
    }
  },
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

export const Default = ({ header, grid, testimonials, cta }) =>
  `
  ${renderHeader(variant(header))} 
  ${renderGrid(variant(grid))} 
  ${renderTestimonials(variant(testimonials))} 
  ${renderCta(variant(cta))} 
  `
