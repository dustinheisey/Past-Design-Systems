import renderFooter from '../../macros/regions/info.njk'

import { footer, variant } from '../util/layouts.js'

export default {
  title: 'Pages/Footer',
  argTypes: {
    footer: {
      control: 'select',
      options: footer
    }
  },
  args: {
    footer: 'inlinePrimaryFooter'
  }
}

export const Default = ({ footer }) => `${renderFooter(variant(footer))} `
