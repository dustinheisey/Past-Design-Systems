import renderHeader from '../../macros/regions/header.njk'
import renderGrid from '../../macros/regions/info.njk'
import renderCta from '../../macros/regions/stats.njk'

import { header, hero, blog, cta, variant } from '../util/layouts.js'

// - header [header/heroLayouts]
//   - blog grid[blogLayouts]

export default {
  title: 'Pages/Blog',
  argTypes: {
    header: {
      control: 'select',
      options: [...header, ...hero]
    },
    grid: {
      control: 'select',
      options: blog
    },
    cta: {
      control: 'select',
      options: cta
    }
  }
}

export const Default = ({ header, grid, cta }) =>
  ` ${renderHeader(variant(header))} 
  ${renderGrid(variant(grid))} 
  ${renderCta(variant(cta))}  `
