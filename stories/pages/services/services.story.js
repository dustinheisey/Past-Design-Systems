import renderHeader from '../../../macros/regions/header.njk'
import renderInfo from '../../../macros/regions/info.njk'
import renderTestimonials from '../../../macros/regions/testimonials.njk'
import renderCta from '../../../macros/regions/cta.njk'

import {
  header,
  hero,
  info,
  testimonials,
  cta,
  themes
} from '../../util/consts.js'
import { storyProps } from '../../util/funcs.js'

export default {
  title: 'Pages/Services',
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
    introductionVariant: {
      control: 'select',
      options: info,
      table: {
        category: 'Introduction'
      }
    },
    introductionTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Introduction'
      }
    },
    service1Variant: {
      control: 'select',
      options: [...info, cta],
      table: {
        category: 'Service1'
      }
    },
    service1Theme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Service1'
      }
    },
    service2Variant: {
      control: 'select',
      options: [...info, cta],
      table: {
        category: 'Service2'
      }
    },
    service2Theme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Service2'
      }
    },
    service3Variant: {
      control: 'select',
      options: [...info, cta],
      table: {
        category: 'Service3'
      }
    },
    service3Theme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Service3'
      }
    },
    service4Variant: {
      control: 'select',
      options: [...info, cta],
      table: {
        category: 'Service4'
      }
    },
    service4Theme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Service4'
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
    introductionTheme: 'background',
    service1Theme: 'background',
    service2Theme: 'background',
    service3Theme: 'background',
    service4Theme: 'background',
    testimonialsTheme: 'background',
    ctaTheme: 'background'
  }
}

export const Default = ({
  headerVariant,
  headerTheme,
  introductionVariant,
  introductionTheme,
  service1Variant,
  service1Theme,
  service2Variant,
  service2Theme,
  service3Variant,
  service3Theme,
  service4Variant,
  service4Theme,
  testimonialsVariant,
  testimonialsTheme,
  ctaVariant,
  ctaTheme
}) =>
  `
  ${renderHeader(storyProps({ variant: headerVariant, theme: headerTheme }))} 
  ${renderInfo(
    storyProps({ variant: introductionVariant, theme: introductionTheme })
  )} 
  ${renderInfo(storyProps({ variant: service1Variant, theme: service1Theme }))} 
  ${renderInfo(storyProps({ variant: service2Variant, theme: service2Theme }))} 
  ${renderInfo(storyProps({ variant: service3Variant, theme: service3Theme }))} 
  ${renderInfo(storyProps({ variant: service4Variant, theme: service4Theme }))} 
  ${renderTestimonials(
    storyProps({ variant: testimonialsVariant, theme: testimonialsTheme })
  )} 
  ${renderCta(storyProps({ variant: ctaVariant, theme: ctaTheme }))} 
  `

// Default.parameters = {
//   docs: {
//     source: {
//       code: `

//       `
//     }
//   }
// }
