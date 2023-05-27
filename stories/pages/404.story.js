import render404 from '../../macros/regions/404.njk'

import { error, variant } from '../util/layouts.js'

export default {
  title: 'Pages/404',
  argTypes: {
    error: {
      control: 'select',
      options: error
    }
  },
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

export const Default = ({ error }) => `
    ${render404(variant(error))}
  `
