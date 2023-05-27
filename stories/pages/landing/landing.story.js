import renderHero from '../../../macros/regions/header.njk'
import renderInfo from '../../../macros/regions/info.njk'
import renderTestimonials from '../../../macros/regions/stats.njk'
import renderCta from '../../../macros/regions/portfolio.njk'
import renderProcess from '../../../macros/regions/testimonials.njk'

import {
  hero,
  info,
  testimonials,
  cta,
  process,
  timeline,
  themes
} from '../../util/consts.js'
import { storyProps } from '../../util/funcs.js'

export default {
  title: 'Pages/Landing',
  argTypes: {
    heroVariant: {
      control: 'select',
      options: hero,
      table: {
        category: 'Hero'
      }
    },
    heroTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Hero'
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
    guideVariant: {
      control: 'select',
      options: info,
      table: {
        category: 'Guide'
      }
    },
    guideTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Guide'
      }
    },
    planVariant: {
      control: 'select',
      options: [...info, ...process, ...timeline],
      table: {
        category: 'Plan'
      }
    },
    planTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Plan'
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
    },
    successVariant: {
      control: 'select',
      options: testimonials,
      table: {
        category: 'Success'
      }
    },
    successTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Success'
      }
    },
    freebieVariant: {
      control: 'select',
      options: cta,
      table: {
        category: 'Freebie'
      }
    },
    freebieTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Freebie'
      }
    }
  },
  parameters: {
    status: {
      type: 'beta'
    }
  },
  args: {
    heroTheme: 'background',
    problemTheme: 'background',
    guideTheme: 'background',
    planTheme: 'background',
    ctaTheme: 'background',
    successTheme: 'background',
    freebieTheme: 'background'
  }
}

export const Default = ({
  heroVariant,
  heroTheme,
  problemVariant,
  problemTheme,
  guideVariant,
  guideTheme,
  planVariant,
  planTheme,
  ctaVariant,
  ctaTheme,
  successVariant,
  successTheme,
  freebieVariant,
  freebieTheme
}) =>
  `
  ${renderHero(storyProps({ variant: heroVariant, theme: heroTheme }))} 
  ${renderInfo(storyProps({ variant: problemVariant, theme: problemTheme }))} 
  ${renderInfo(storyProps({ variant: guideVariant, theme: guideTheme }))} 
  ${renderProcess(storyProps({ variant: planVariant, theme: planTheme }))} 
  ${renderCta(storyProps({ variant: ctaVariant, theme: ctaTheme }))} 
  ${renderTestimonials(
    storyProps({ variant: successVariant, theme: successTheme })
  )} 
  ${renderCta(storyProps({ variant: freebieVariant, theme: freebieTheme }))} 
  `
