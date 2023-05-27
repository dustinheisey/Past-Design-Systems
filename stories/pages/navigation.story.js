import renderNavbar from '../../macros/regions/navbar.njk'

import { navbar, variant } from '../util/layouts.js'

export default {
  title: 'Pages/Navigation',
  argTypes: {
    navbar: {
      control: 'select',
      options: navbar
    }
  },
  args: {
    navbar: 'spacedNavbar'
  },
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

export const Default = ({ navbar }) => `${renderNavbar(variant(navbar))} `
