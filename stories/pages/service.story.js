import renderHeader from '../../macros/regions/header.njk'
import renderInfo from '../../macros/regions/info.njk'
import renderTimeline from '../../macros/regions/timeline.njk'
import renderFaq from '../../macros/regions/faq.njk'
import renderCta from '../../macros/regions/cta.njk'

import {
  header,
  hero,
  info,
  stats,
  portfolio,
  testimonial,
  cta,
  process,
  timeline,
  faq,
  variant
} from '../util/layouts.js'

// - hero header [header/heroLayouts]
// - problem and link it to the service "who this service is for" [infoLayouts]
// - detailed service description [infoLayouts]
// - testimonials or case studies [testimonial/portfolioLayouts]
// - steps to success (plan of action, from first enquiry to end result) [info/processLayouts]
// - pricing or packages [pricingLayouts]
// - transformation [infoLayouts]
// - FAQs [faqLayouts]
// - call to action with a guarantee [ctaLayouts]

export default {
  title: 'Pages/Service',
  argTypes: {
    header: {
      control: 'select',
      options: [...header, ...hero]
    },
    problem: {
      control: 'select',
      options: info
    },
    description: {
      control: 'select',
      options: info
    },
    proof: {
      control: 'select',
      options: [...testimonial, ...stats, ...portfolio]
    },
    process: {
      control: 'select',
      options: [...process, ...timeline]
    },
    transformation: {
      control: 'select',
      options: info
    },
    faq: {
      control: 'select',
      options: faq
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

export const Default = ({
  header,
  problem,
  description,
  proof,
  process,
  packages,
  transformation,
  faq,
  cta
}) =>
  `
  ${renderHeader(variant(header))} 
  ${renderInfo(variant(problem))} 
  ${renderInfo(variant(description))} 
  ${renderInfo(variant(proof))} 
  ${renderTimeline(variant(process))} 
  ${renderInfo(variant(transformation))} 
  ${renderFaq(variant(faq))} 
  ${renderCta(variant(cta))} 
  `
