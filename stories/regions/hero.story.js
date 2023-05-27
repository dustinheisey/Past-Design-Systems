import render from '../../macros/regions/hero.njk'

export default {
  title: 'Regions/Hero',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'left',
        'right',
        'split-left',
        'split-right',
        'center',
        'left-image',
        'right-image',
        'left-bg',
        'center-bg',
        'right-bg',
        'left-gradient',
        'center-gradient',
        'right-gradient',
        'angled-top-left',
        'angled-top-right',
        'angled-bottom-left',
        'angled-bottom-right',
        'tiles-2-left',
        'tiles-2-right',
        'tiles-3-left',
        'tiles-3-right'
      ]
    }
  },
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

const Template = (args) => {
  return render({
    storybookArgs: args
  })
}

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
export const CenterImage = Template.bind({})
export const LeftBg = Template.bind({})
export const CenterBg = Template.bind({})
export const RightBg = Template.bind({})
export const LeftGradient = Template.bind({})
export const CenterGradient = Template.bind({})
export const RightGradient = Template.bind({})

Left.args = { variant: 'left' }
Right.args = { variant: 'right' }
SplitLeft.args = { variant: 'split-left' }
SplitRight.args = { variant: 'split-right' }
AngledTopLeft.args = { variant: 'angled-top-left' }
AngledTopRight.args = { variant: 'angled-top-right' }
AngledBottomLeft.args = { variant: 'angled-bottom-left' }
AngledBottomRight.args = { variant: 'angled-bottom-right' }
Tiles2Left.args = { variant: 'tiles-2-left' }
Tiles2Right.args = { variant: 'tiles-2-right' }
Tiles3Left.args = { variant: 'tiles-3-left' }
Tiles3Right.args = { variant: 'tiles-3-right' }
CenterImage.args = { variant: 'center-image' }
LeftBg.args = { variant: 'left-bg' }
CenterBg.args = { variant: 'center-bg' }
RightBg.args = { variant: 'right-bg' }
LeftGradient.args = { variant: 'left-gradient' }
CenterGradient.args = { variant: 'center-gradient' }
RightGradient.args = { variant: 'right-gradient' }
