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
      props: { storybook: true, theme: args.theme }
    })}
  `

export const Simple3 = Template.bind({})
export const Simple4 = Template.bind({})
export const ImgStart = Template.bind({})
export const ImgEnd = Template.bind({})
export const SplitStart = Template.bind({})
export const SplitEnd = Template.bind({})
export const Description = Template.bind({})

Simple3.args = { variant: 'simple-3-stats' }
Simple4.args = { variant: 'simple-4-stats' }
ImgStart.args = { variant: 'img-start-stats' }
ImgEnd.args = { variant: 'img-end-stats' }
SplitStart.args = { variant: 'split-start-stats' }
SplitEnd.args = { variant: 'split-end-stats' }
Description.args = { variant: 'description-stats' }
