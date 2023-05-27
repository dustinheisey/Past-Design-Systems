import renderHeader from '../../../macros/regions/header.njk'
import renderForm from '../../../macros/regions/info.njk'
import renderFaq from '../../../macros/regions/stats.njk'

import { header, contact, faq, themes } from '../../util/consts.js'
import { storyProps } from '../../util/funcs.js'

export default {
  title: 'Pages/Contact',
  argTypes: {
    headerVariant: {
      control: 'select',
      options: header,
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
    formVariant: {
      control: 'select',
      options: contact,
      table: {
        category: 'Form'
      }
    },
    formTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Form'
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
    }
  },
  parameters: {
    status: {
      type: 'beta'
    }
  },
  args: {
    headerTheme: 'background',
    formTheme: 'background',
    faqTheme: 'background'
  }
}

export const Default = ({
  headerVariant,
  headerTheme,
  formVariant,
  formTheme,
  faqVariant,
  faqTheme
}) =>
  ` ${renderHeader(storyProps({ variant: headerVariant, theme: headerTheme }))} 
  ${renderForm(storyProps({ variant: formVariant, theme: formTheme }))} 
  ${renderFaq(storyProps({ variant: faqVariant, theme: faqTheme }))} 
   `
