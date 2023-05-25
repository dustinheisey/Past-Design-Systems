import render from '../../macros/regions/cta.njk'

export default {
  title: 'Regions/CTA',
  decorators: [(story) => `<div style="inline-size: 90vw">${story()}</div>`],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'simple',
        'simple-left',
        'simple-right',
        'left-image',
        'right-image',
        'split-left',
        'split-right',
        'tiles-2-left',
        'tiles-2-right',
        'tiles-3-left',
        'tiles-3-right',
        'left-bg',
        'center-bg',
        'right-bg',
        'left-gradient',
        'center-gradient',
        'right-gradient',
        'justified',
        'simple-newsletter',
        'simple-left-newsletter',
        'simple-right-newsletter',
        'left-image-newsletter',
        'right-image-newsletter',
        'split-left-newsletter',
        'split-right-newsletter',
        'tiles-2-left-newsletter',
        'tiles-2-right-newsletter',
        'tiles-3-left-newsletter',
        'tiles-3-right-newsletter',
        'left-bg-newsletter',
        'center-bg-newsletter',
        'right-bg-newsletter',
        'left-gradient-newsletter',
        'center-gradient-newsletter',
        'right-gradient-newsletter',
        'justified-newsletter'
      ]
    }
  }
}

const Template = (args) => {
  return render({
    storybookArgs: args
  })
}

export const Simple = Template.bind({})
export const SimpleLeft = Template.bind({})
export const SimpleRight = Template.bind({})
export const LeftImage = Template.bind({})
export const RightImage = Template.bind({})
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

export const SimpleNewsletter = Template.bind({})
export const SimpleLeftNewsletter = Template.bind({})
export const SimpleRightNewsletter = Template.bind({})
export const LeftImageNewsletter = Template.bind({})
export const RightImageNewsletter = Template.bind({})
export const SplitLeftNewsletter = Template.bind({})
export const SplitRightNewsletter = Template.bind({})
export const Tiles2LeftNewsletter = Template.bind({})
export const Tiles2RightNewsletter = Template.bind({})
export const Tiles3LeftNewsletter = Template.bind({})
export const Tiles3RightNewsletter = Template.bind({})
export const LeftBgNewsletter = Template.bind({})
export const CenterBgNewsletter = Template.bind({})
export const RightBgNewsletter = Template.bind({})
export const LeftGradientNewsletter = Template.bind({})
export const CenterGradientNewsletter = Template.bind({})
export const RightGradientNewsletter = Template.bind({})
export const JustifiedNewsletter = Template.bind({})

Simple.args = { variant: 'simple' }
SimpleLeft.args = { variant: 'simple-left' }
SimpleRight.args = { variant: 'simple-right' }
LeftImage.args = { variant: 'left-image' }
RightImage.args = { variant: 'right-image' }
SplitLeft.args = { variant: 'split-left' }
SplitRight.args = { variant: 'split-right' }
Tiles2Left.args = { variant: 'tiles-2-left' }
Tiles2Right.args = { variant: 'tiles-2-right' }
Tiles3Left.args = { variant: 'tiles-3-left' }
Tiles3Right.args = { variant: 'tiles-3-right' }
LeftBg.args = { variant: 'left-bg' }
CenterBg.args = { variant: 'center-bg' }
RightBg.args = { variant: 'right-bg' }
LeftGradient.args = { variant: 'left-gradient' }
CenterGradient.args = { variant: 'center-gradient' }
RightGradient.args = { variant: 'right-gradient' }
Justified.args = { variant: 'justified' }

SimpleNewsletter.args = { variant: 'simple-newsletter' }
SimpleLeftNewsletter.args = { variant: 'simple-left-newsletter' }
SimpleRightNewsletter.args = { variant: 'simple-right-newsletter' }
LeftImageNewsletter.args = { variant: 'left-image-newsletter' }
RightImageNewsletter.args = { variant: 'right-image-newsletter' }
SplitLeftNewsletter.args = { variant: 'split-left-newsletter' }
SplitRightNewsletter.args = { variant: 'split-right-newsletter' }
Tiles2LeftNewsletter.args = { variant: 'tiles-2-left-newsletter' }
Tiles2RightNewsletter.args = { variant: 'tiles-2-right-newsletter' }
Tiles3LeftNewsletter.args = { variant: 'tiles-3-left-newsletter' }
Tiles3RightNewsletter.args = { variant: 'tiles-3-right-newsletter' }
LeftBgNewsletter.args = { variant: 'left-bg-newsletter' }
CenterBgNewsletter.args = { variant: 'center-bg-newsletter' }
RightBgNewsletter.args = { variant: 'right-bg-newsletter' }
LeftGradientNewsletter.args = { variant: 'left-gradient-newsletter' }
CenterGradientNewsletter.args = { variant: 'center-gradient-newsletter' }
RightGradientNewsletter.args = { variant: 'right-gradient-newsletter' }
JustifiedNewsletter.args = { variant: 'justified-newsletter' }
