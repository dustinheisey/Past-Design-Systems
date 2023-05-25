import renderHeader from '../../macros/regions/header.njk'
import renderForm from '../../macros/regions/info.njk'
import renderFaq from '../../macros/regions/stats.njk'

import { header, contact, faq, variant } from '../util/layouts.js'

// - header [header]
// - other methods of contact
// - form [contactLayouts]
//   - faq[faqLayouts]

export default {
  title: 'Pages/Contact',
  argTypes: {
    header: {
      control: 'select',
      options: header
    },
    form: {
      control: 'select',
      options: contact
    },
    faq: {
      control: 'select',
      options: faq
    }
  }
}

export const Default = ({ header, form, faq }) =>
  ` ${renderHeader(variant(header))} 
  ${renderForm(variant(form))} 
  ${renderFaq(variant(faq))} 
   `
