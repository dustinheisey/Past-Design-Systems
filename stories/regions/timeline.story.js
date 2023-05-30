import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Timeline',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.timeline)
    },
    theme: {
      control: 'select',
      options: themes
    }
  },
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

const Template = (args) =>
  `
    ${regions.timeline[args.variant]({
      props: { theme: args.theme }
    })}
  `

export const InlineStart = Template.bind({})
export const InlineStaggered = Template.bind({})
export const BlockStart = Template.bind({})
export const BlockStaggered = Template.bind({})

InlineStart.args = { variant: 'inline-start-timeline' }
InlineStaggered.args = { variant: 'inline-staggered-timeline' }
BlockStart.args = { variant: 'block-start-timeline' }
BlockStaggered.args = { variant: 'block-staggered-timeline' }
