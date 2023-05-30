import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Stats',
  decorators: [(story) => `<div style="inline-size: 95vw">${story()}</div>`],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.stats)
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
    ${regions.stats[args.variant]({
      props: { theme: args.theme }
    })}
  `

export const Simple3 = Template.bind({})
export const Simple4 = Template.bind({})
export const ImgLeft = Template.bind({})
export const ImgRight = Template.bind({})
export const SplitLeft = Template.bind({})
export const SplitRight = Template.bind({})
export const Description = Template.bind({})

Simple3.args = { variant: 'simple-3-stats' }
Simple4.args = { variant: 'simple-4-stats' }
ImgLeft.args = { variant: 'img-left-stats' }
ImgRight.args = { variant: 'img-right-stats' }
SplitLeft.args = { variant: 'split-left-stats' }
SplitRight.args = { variant: 'split-right-stats' }
Description.args = { variant: 'description-stats' }
