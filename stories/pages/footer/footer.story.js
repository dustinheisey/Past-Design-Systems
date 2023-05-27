import renderFooter from '../../../macros/regions/info.njk'

import { footer, themes } from '../../util/consts.js'
import { storyProps } from '../../util/funcs.js'

export default {
  title: 'Pages/Footer',
  argTypes: {
    footerVariant: {
      control: 'select',
      options: footer,
      table: {
        category: 'Footer'
      }
    },
    footerTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Footer'
      }
    }
  },
  args: {
    footerTheme: 'background'
  },
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

export const Default = ({ footerVariant, footerTheme }) =>
  `${renderFooter(storyProps({ variant: footerVariant, theme: footerTheme }))} `
