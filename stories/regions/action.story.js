import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Action',
  decorators: [(story) => `<div style="inline-size: 90vw">${story()}</div>`],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.action)
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
    ${regions.action[args.variant]({
      props: { storybook: true, theme: args.theme }
    })}
  `

export const Simple = Template.bind({})
export const SimpleLeft = Template.bind({})
export const SimpleRight = Template.bind({})
export const LeftImg = Template.bind({})
export const RightImg = Template.bind({})
export const SplitLeft = Template.bind({})
export const SplitRight = Template.bind({})
export const Tiles2Left = Template.bind({})
export const Tiles2Right = Template.bind({})
export const Tiles3Left = Template.bind({})
export const Tiles3Right = Template.bind({})
export const LeftBg = Template.bind({})
export const CenterBg = Template.bind({})
export const RightBg = Template.bind({})
export const LeftGradient = Template.bind({})
export const CenterGradient = Template.bind({})
export const RightGradient = Template.bind({})
export const Justified = Template.bind({})
export const CenterImg = Template.bind({})

Simple.args = { variant: 'simple-action' }
SimpleLeft.args = { variant: 'simple-left-action' }
SimpleRight.args = { variant: 'simple-right-action' }
LeftImg.args = { variant: 'left-img-action' }
RightImg.args = { variant: 'right-img-action' }
SplitLeft.args = { variant: 'split-left-action' }
SplitRight.args = { variant: 'split-right-action' }
Tiles2Left.args = { variant: 'tiles-2-left-action' }
Tiles2Right.args = { variant: 'tiles-2-right-action' }
Tiles3Left.args = { variant: 'tiles-3-left-action' }
Tiles3Right.args = { variant: 'tiles-3-right-action' }
LeftBg.args = { variant: 'left-bg-action' }
CenterBg.args = { variant: 'center-bg-action' }
RightBg.args = { variant: 'right-bg-action' }
LeftGradient.args = { variant: 'left-gradient-action' }
CenterGradient.args = { variant: 'center-gradient-action' }
RightGradient.args = { variant: 'right-gradient-action' }
CenterImg.args = { variant: 'center-img-action' }
Justified.args = { variant: 'justified-action' }
