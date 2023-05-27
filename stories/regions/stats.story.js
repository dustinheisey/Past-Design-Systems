import render from '../../macros/regions/stats.njk'

export default {
  title: 'Regions/Stats',
  decorators: [(story) => `<div style="inline-size: 95vw">${story()}</div>`],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'simple-3',
        'simple-4',
        'image-left',
        'image-right',
        'card-grid-2',
        'cover'
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

export const Simple3 = Template.bind({})
export const Simple4 = Template.bind({})
export const ImageLeft = Template.bind({})
export const ImageRight = Template.bind({})
export const SplitLeft = Template.bind({})
export const SplitRight = Template.bind({})
export const Description = Template.bind({})

Simple3.args = { variant: 'simple-3' }
Simple4.args = { variant: 'simple-4' }
ImageLeft.args = { variant: 'image-left' }
ImageRight.args = { variant: 'image-right' }
SplitLeft.args = { variant: 'split-left' }
SplitRight.args = { variant: 'split-right' }
Description.args = { variant: 'description' }
