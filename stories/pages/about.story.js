/*
- dont make it about you
- keep it short

- header [header/heroLayouts]
- introduction paragraph with personal relatable microstory to build connection. second paragraph linking it back to services and why its good for your customer [infoLayouts]
- skills & expertise
- portfolio samples [portfolioLayouts]
- testimonials [testimonialLayouts]
- cta [ctaLayouts]
*/
import renderHeader from '../../macros/regions/header.njk'
import renderStory from '../../macros/regions/info.njk'
import renderSkills from '../../macros/regions/stats.njk'
import renderPortfolio from '../../macros/regions/portfolio.njk'
import renderTestimonials from '../../macros/regions/testimonials.njk'
import renderCta from '../../macros/regions/cta.njk'

import {
  header,
  hero,
  info,
  stats,
  portfolio,
  testimonials,
  cta,
  variant
} from '../util/layouts.js'

export default {
  title: 'Pages/About',
  argTypes: {
    header: {
      control: 'select',
      name: 'Header',
      type: { name: 'string', required: false },
      defaultValue: header[0],
      description: 'demo description',
      options: [...header, ...hero]
    },
    story: {
      control: 'select',
      name: 'Story',
      type: { name: 'string', required: false },
      defaultValue: info[0],
      description: 'demo description',
      options: info
    },
    skills: {
      control: 'select',
      options: stats
    },
    portfolio: {
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
  }
}

export const Default = ({
  header,
  story,
  skills,
  portfolio,
  testimonials,
  cta
}) =>
  `
    ${renderHeader(variant(header))} 
    ${renderStory(variant(story))} 
    ${renderSkills(variant(skills))}
    ${renderPortfolio(variant(portfolio))} 
    ${renderTestimonials(variant(testimonials))}
    ${renderCta(variant(cta))}
  `
