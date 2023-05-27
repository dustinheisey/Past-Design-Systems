import renderNavbar from '../../../macros/regions/navbar.njk'

import { navbar, themes } from '../../util/consts.js'
import { storyProps } from '../../util/funcs.js'

export default {
  title: 'Pages/Navbar',
  argTypes: {
    navbarVariant: {
      control: 'select',
      options: navbar,
      table: {
        category: 'Navbar'
      }
    },
    navbarTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Navbar'
      }
    }
  },
  args: {
    navbarTheme: 'background'
  },
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

export const Default = ({ navbarVariant, navbarTheme }) =>
  `${renderNavbar(storyProps({ variant: navbarVariant, theme: navbarTheme }))} `
