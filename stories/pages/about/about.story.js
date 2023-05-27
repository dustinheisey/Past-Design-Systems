import renderHeader from '../../../macros/regions/header.njk'
import renderStory from '../../../macros/regions/info.njk'
import renderSkills from '../../../macros/regions/stats.njk'
import renderPortfolio from '../../../macros/regions/portfolio.njk'
import renderTestimonials from '../../../macros/regions/testimonials.njk'
import renderCta from '../../../macros/regions/cta.njk'

import {
  header,
  hero,
  info,
  stats,
  portfolio,
  testimonials,
  cta,
  themes
} from '../../util/consts.js'
import { storyProps } from '../../util/funcs.js'

export default {
  title: 'Pages/About',
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
    storyVariant: {
      control: 'select',
      options: info,
      table: {
        category: 'Story'
      }
    },
    storyTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Story'
      }
    },
    skillsVariant: {
      control: 'select',
      options: stats,
      table: {
        category: 'Skills'
      }
    },
    skillsTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Skills'
      }
    },
    portfolioVariant: {
      control: 'select',
      options: portfolio,
      table: {
        category: 'Portfolio'
      }
    },
    portfolioTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Portfolio'
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
    storyTheme: 'background',
    skillsTheme: 'background',
    portfolioTheme: 'background',
    testimonialsTheme: 'background',
    ctaTheme: 'background'
  }
}

export const Default = ({
  headerVariant,
  headerTheme,
  storyVariant,
  storyTheme,
  skillsVariant,
  skillsTheme,
  portfolioVariant,
  portfolioTheme,
  testimonialsVariant,
  testimonialsTheme,
  ctaVariant,
  ctaTheme
}) =>
  `
    ${renderHeader(storyProps({ variant: headerVariant, theme: headerTheme }))} 
    ${renderStory(storyProps({ variant: storyVariant, theme: storyTheme }))} 
    ${renderSkills(storyProps({ variant: skillsVariant, theme: skillsTheme }))}
    ${renderPortfolio(
      storyProps({ variant: portfolioVariant, theme: portfolioTheme })
    )} 
    ${renderTestimonials(
      storyProps({ variant: testimonialsVariant, theme: testimonialsTheme })
    )}
    ${renderCta(storyProps({ variant: ctaVariant, theme: ctaTheme }))}
  `
