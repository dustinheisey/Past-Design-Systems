import render404 from '../../../macros/regions/404.njk'

import { error, themes } from '../../util/consts.js'
import { storyProps } from '../../util/funcs.js'

export default {
  title: 'Pages/404',
  parameters: {
    status: {
      type: 'beta'
    }
  },
  argTypes: {
    errorVariant: {
      control: 'select',
      options: error,
      table: {
        category: 'Error'
      }
    },
    errorTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Error'
      }
    }
  },
  args: {
    errorTheme: 'background'
  }
}

export const Default = ({ errorVariant, errorTheme }) => `
    ${render404(storyProps({ variant: errorVariant, theme: errorTheme }))}
  `
