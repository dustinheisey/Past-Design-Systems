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

export const SplitStart = Template.bind({})
export const SplitEnd = Template.bind({})
export const Tiles2Start = Template.bind({})
export const Tiles2End = Template.bind({})
export const Tiles3Start = Template.bind({})
export const Tiles3End = Template.bind({})
export const ImgCenter = Template.bind({})
export const ImgStart = Template.bind({})
export const ImgEnd = Template.bind({})
export const BgCenter = Template.bind({})
export const BgStart = Template.bind({})
export const BgEnd = Template.bind({})
export const BgPattern = Template.bind({})
export const Cover = Template.bind({})
export const CoverStart = Template.bind({})
export const CoverEnd = Template.bind({})
export const GradientStart = Template.bind({})
export const GradientCenter = Template.bind({})
export const GradientEnd = Template.bind({})
export const Inline = Template.bind({})
export const Simple = Template.bind({})
export const SimpleEnd = Template.bind({})
export const SimpleStart = Template.bind({})

SplitStart.args = { variant: 'split-start-action' }
SplitEnd.args = { variant: 'split-end-action' }
Tiles2Start.args = { variant: 'tiles-2-start-action' }
Tiles2End.args = { variant: 'tiles-2-end-action' }
Tiles3Start.args = { variant: 'tiles-3-start-action' }
Tiles3End.args = { variant: 'tiles-3-end-action' }
ImgCenter.args = { variant: 'img-center-action' }
ImgStart.args = { variant: 'img-start-action' }
ImgEnd.args = { variant: 'img-end-action' }
BgStart.args = { variant: 'bg-start-action' }
BgCenter.args = { variant: 'bg-center-action' }
BgEnd.args = { variant: 'bg-end-action' }
GradientStart.args = { variant: 'gradient-start-action' }
GradientCenter.args = { variant: 'gradient-center-action' }
GradientEnd.args = { variant: 'gradient-end-action' }
Inline.args = { variant: 'inline-action' }
Simple.args = { variant: 'simple-action' }
SimpleEnd.args = { variant: 'simple-end-action' }
SimpleStart.args = { variant: 'simple-start-action' }
Cover.args = { variant: 'cover-action' }
CoverStart.args = { variant: 'cover-start-action' }
CoverEnd.args = { variant: 'cover-end-action' }
BgPattern.args = { variant: 'bg-pattern-action' }
