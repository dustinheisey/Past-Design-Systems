import renderHeader from '../../../macros/regions/header.njk'
import renderInfo from '../../../macros/regions/info.njk'
import renderTimeline from '../../../macros/regions/timeline.njk'
import renderFaq from '../../../macros/regions/faq.njk'
import renderCta from '../../../macros/regions/cta.njk'

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
  themes
} from '../../util/consts.js'
import { storyProps } from '../../util/funcs.js'

export default {
  title: 'Pages/Service',
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
    problemVariant: {
      control: 'select',
      options: info,
      table: {
        category: 'Problem'
      }
    },
    problemTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Problem'
      }
    },
    descriptionVariant: {
      control: 'select',
      options: info,
      table: {
        category: 'Description'
      }
    },
    descriptionTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Description'
      }
    },
    proofVariant: {
      control: 'select',
      options: [...testimonial, ...stats, ...portfolio],
      table: {
        category: 'Proof'
      }
    },
    proofTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Proof'
      }
    },
    processVariant: {
      control: 'select',
      options: [...process, ...timeline],
      table: {
        category: 'Process'
      }
    },
    processTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Process'
      }
    },
    transformationVariant: {
      control: 'select',
      options: info,
      table: {
        category: 'Transformation'
      }
    },
    transformationTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Transformation'
      }
    },
    faqVariant: {
      control: 'select',
      options: faq,
      table: {
        category: 'FAQ'
      }
    },
    faqTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'FAQ'
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
    problemTheme: 'background',
    descriptionTheme: 'background',
    proofTheme: 'background',
    processTheme: 'background',
    packagesTheme: 'background',
    transformationTheme: 'background',
    faqTheme: 'background',
    ctaTheme: 'background'
  }
}

export const Default = ({
  headerVariant,
  headerTheme,
  problemVariant,
  problemTheme,
  descriptionVariant,
  descriptionTheme,
  proofVariant,
  proofTheme,
  processVariant,
  processTheme,
  packagesVariant,
  packagesTheme,
  transformationVariant,
  transformationTheme,
  faqVariant,
  faqTheme,
  ctaVariant,
  ctaTheme
}) =>
  `
  ${renderHeader(storyProps({ variant: headerVariant, theme: headerTheme }))} 
  ${renderInfo(storyProps({ variant: problemVariant, theme: problemTheme }))} 
  ${renderInfo(
    storyProps({ variant: descriptionVariant, theme: descriptionTheme })
  )} 
  ${renderInfo(storyProps({ variant: proofVariant, theme: proofTheme }))} 
  ${renderTimeline(
    storyProps({ variant: processVariant, theme: processTheme })
  )} 
  ${renderInfo(
    storyProps({ variant: transformationVariant, theme: transformationTheme })
  )} 
  ${renderFaq(storyProps({ variant: faqVariant, theme: faqTheme }))} 
  ${renderCta(storyProps({ variant: ctaVariant, theme: ctaTheme }))} 
  `
