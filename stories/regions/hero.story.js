import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Hero',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.hero)
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
    ${regions.hero[args.variant]({
      props: { storybook: true, theme: args.theme }
    })}
  `

export const Left = Template.bind({})
export const Right = Template.bind({})
export const SplitLeft = Template.bind({})
export const SplitRight = Template.bind({})
export const AngledTopLeft = Template.bind({})
export const AngledTopRight = Template.bind({})
export const AngledBottomLeft = Template.bind({})
export const AngledBottomRight = Template.bind({})
export const Tiles2Left = Template.bind({})
export const Tiles2Right = Template.bind({})
export const Tiles3Left = Template.bind({})
export const Tiles3Right = Template.bind({})
export const CenterImg = Template.bind({})
export const LeftImg = Template.bind({})
export const RightImg = Template.bind({})
export const LeftBg = Template.bind({})
export const CenterBg = Template.bind({})
export const RightBg = Template.bind({})
export const LeftGradient = Template.bind({})
export const CenterGradient = Template.bind({})
export const RightGradient = Template.bind({})

Left.args = { variant: 'left-hero' }
Right.args = { variant: 'right-hero' }
SplitLeft.args = { variant: 'split-left-hero' }
SplitRight.args = { variant: 'split-right-hero' }
AngledTopLeft.args = { variant: 'angled-top-left-hero' }
AngledTopRight.args = { variant: 'angled-top-right-hero' }
AngledBottomLeft.args = { variant: 'angled-bottom-left-hero' }
AngledBottomRight.args = { variant: 'angled-bottom-right-hero' }
Tiles2Left.args = { variant: 'tiles-2-left-hero' }
Tiles2Right.args = { variant: 'tiles-2-right-hero' }
Tiles3Left.args = { variant: 'tiles-3-left-hero' }
Tiles3Right.args = { variant: 'tiles-3-right-hero' }
CenterImg.args = { variant: 'center-img-hero' }
LeftImg.args = { variant: 'left-img-hero' }
RightImg.args = { variant: 'right-img-hero' }
LeftBg.args = { variant: 'left-bg-hero' }
CenterBg.args = { variant: 'center-bg-hero' }
RightBg.args = { variant: 'right-bg-hero' }
LeftGradient.args = { variant: 'left-gradient-hero' }
CenterGradient.args = { variant: 'center-gradient-hero' }
RightGradient.args = { variant: 'right-gradient-hero' }
