import renderHeader from '../../../macros/regions/header.njk'
import renderContent from '../../../macros/regions/content.njk'
import renderCta from '../../../macros/regions/cta.njk'

import { header, hero, content, cta, themes } from '../../util/consts.js'
import { storyProps } from '../../util/funcs.js'

export default {
  title: 'Pages/Blog Post',
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
    contentVariant: {
      control: 'select',
      options: content,
      table: {
        category: 'Content'
      }
    },
    contentTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Content'
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
    contentTheme: 'background',
    ctaTheme: 'background'
  }
}

export const Default = ({
  headerVariant,
  headerTheme,
  contentVariant,
  contentTheme,
  ctaVariant,
  ctaTheme
}) =>
  `
  ${renderHeader(storyProps({ variant: headerVariant, theme: headerTheme }))} 
  ${renderContent(
    storyProps({ variant: contentVariant, theme: contentTheme })
  )} 
  ${renderCta(storyProps({ variant: ctaVariant, theme: ctaTheme }))} 
  `
