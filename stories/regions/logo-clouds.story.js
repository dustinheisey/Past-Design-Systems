import render from '../../macros/regions/logo-clouds.njk'

export default {
  title: 'Regions/Logo Clouds',
  decorators: [(story) => `<div style="inline-size: 75vw">${story()}</div>`],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['grid', 'simple', 'split']
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

export const Grid = Template.bind({})
export const Simple = Template.bind({})
export const Split = Template.bind({})

Grid.args = { variant: 'grid' }
Simple.args = { variant: 'simple' }
Split.args = { variant: 'split' }
