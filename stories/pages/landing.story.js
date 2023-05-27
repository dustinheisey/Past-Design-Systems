import renderHero from '../../macros/regions/header.njk'
import renderInfo from '../../macros/regions/info.njk'
import renderTestimonials from '../../macros/regions/stats.njk'
import renderCta from '../../macros/regions/portfolio.njk'
import renderProcess from '../../macros/regions/testimonials.njk'

import {
  hero,
  info,
  testimonials,
  cta,
  process,
  timeline,
  variant
} from '../util/layouts.js'

// - hero [hero]
// - problem [infoLayouts]
// - guide [infoLayouts]
// - plan [feature/processLayouts]
// - call to action [ctaLayouts]
// - success [testimonialLayouts]
//   - freebie / newsletter[ctaLayouts]

export default {
  title: 'Pages/Landing',
  argTypes: {
    hero: {
      control: 'select',
      options: hero
    },
    problem: {
      control: 'select',
      options: info
    },
    guide: {
      control: 'select',
      options: info
    },
    plan: {
      control: 'select',
      options: [...info, ...process, ...timeline]
    },
    cta: {
      control: 'select',
      options: cta
    },
    success: {
      control: 'select',
      options: testimonials
    },
    freebie: {
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

export const Default = ({
  hero,
  problem,
  guide,
  plan,
  cta,
  success,
  freebie
}) =>
  `
  ${renderHero(variant(hero))} 
  ${renderInfo(variant(problem))} 
  ${renderInfo(variant(guide))} 
  ${renderProcess(variant(plan))} 
  ${renderCta(variant(cta))} 
  ${renderTestimonials(variant(success))} 
  ${renderCta(variant(freebie))} 
  `
