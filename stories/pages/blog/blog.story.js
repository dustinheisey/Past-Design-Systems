import renderHeader from '../../../macros/regions/header.njk'
import renderGrid from '../../../macros/regions/info.njk'
import renderCta from '../../../macros/regions/stats.njk'

import { header, hero, blog, cta, themes } from '../../util/consts.js'
import { storyProps } from '../../util/funcs.js'

export default {
  title: 'Pages/Blog',
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
      options: blog,
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
    ctaTheme: 'background'
  }
}

export const Default = ({
  headerVariant,
  headerTheme,
  gridVariant,
  gridTheme,
  ctaVariant,
  ctaTheme
}) =>
  ` ${renderHeader(storyProps({ variant: headerVariant, theme: headerTheme }))} 
  ${renderGrid(storyProps({ variant: gridVariant, theme: gridTheme }))} 
  ${renderCta(storyProps({ variant: ctaVariant, theme: ctaTheme }))}  `
