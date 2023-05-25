import renderHeader from '../../macros/regions/header.njk'
import renderContent from '../../macros/regions/content.njk'
import renderCta from '../../macros/regions/cta.njk'

import { header, hero, content, cta, variant } from '../util/layouts.js'

// - header [header/heroLayouts]
// - prose content [contentLayouts]

export default {
  title: 'Pages/Blog Post',
  argTypes: {
    header: {
      control: 'select',
      options: [...header, ...hero]
    },
    content: {
      control: 'select',
      options: content
    },
    cta: {
      control: 'select',
      options: cta
    }
  }
}

export const Default = ({ header, content, cta }) =>
  `
  ${renderHeader(variant(header))} 
  ${renderContent(variant(content))} 
  ${renderCta(variant(cta))} 
  `
