import renderHeader from '../../macros/regions/header.njk'
import renderInfo from '../../macros/regions/info.njk'
import renderTestimonials from '../../macros/regions/testimonials.njk'
import renderCta from '../../macros/regions/cta.njk'

import {
  header,
  hero,
  info,
  testimonials,
  cta,
  variant
} from '../util/layouts.js'

// - header [header/heroLayouts]
// - introduction [infoLayouts]
// - service 1 cta (who this service is for and short description/benefits) [infoLayouts]
// - service 2 cta (who this service is for and short description/benefits) [infoLayouts]
// - service 3 cta (who this service is for and short description/benefits) [infoLayouts]
// - service 4 cta (who this service is for and short description/benefits) [infoLayouts]
// - testimonials or success stories [testimonialLayouts]
// - cta to contact [ctaLayouts]

export default {
  title: 'Pages/Services',
  argTypes: {
    header: {
      control: 'select',
      options: [...header, ...hero]
    },
    introduction: {
      control: 'select',
      options: info
    },
    service1: {
      control: 'select',
      options: [...info, cta]
    },
    service2: {
      control: 'select',
      options: [...info, cta]
    },
    service3: {
      control: 'select',
      options: [...info, cta]
    },
    service4: {
      control: 'select',
      options: [...info, cta]
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
  introduction,
  service1,
  service2,
  service3,
  service4,
  testimonials,
  cta
}) =>
  `
  ${renderHeader(variant(header))} 
  ${renderInfo(variant(introduction))} 
  ${renderInfo(variant(service1))} 
  ${renderInfo(variant(service2))} 
  ${renderInfo(variant(service3))} 
  ${renderInfo(variant(service4))} 
  ${renderTestimonials(variant(testimonials))} 
  ${renderCta(variant(cta))} 
  `

Default.parameters = {
  docs: {
    source: {
      code: `
{{ render( "header", { variant: 'header', content: content.services.header, theme: 'dark' } ) }}
{{ render( "info", { variant: 'introduction', content: content.services.introduction, theme: 'dark' } ) }}
{{ render( "info", { variant: 'service1', content: content.services.service1, theme: 'dark' } ) }}s
{{ render( "info", { variant: 'service2', content: content.services.service2, theme: 'dark' } ) }}
{{ render( "info", { variant: 'service3', content: content.services.service3, theme: 'dark' } ) }}
{{ render( "info", { variant: 'service4', content: content.services.service4, theme: 'dark' } ) }}
{{ render( "testimonials", { variant: 'testimonials', content: content.services.testimonials, theme: 'dark' } ) }}
{{ render( "cta", { variant: 'cta', content: content.services.cta, theme: 'dark' } ) }}
      `
    }
  }
}
