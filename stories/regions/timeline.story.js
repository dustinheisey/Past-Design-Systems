import render from '../../macros/regions/timeline.njk'

export default {
  title: 'Regions/Timeline',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'inline-start',
        'inline-staggered',
        'block-start',
        'block-staggered'
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

export const InlineStart = Template.bind({})
export const InlineStaggered = Template.bind({})
export const BlockStart = Template.bind({})
export const BlockStaggered = Template.bind({})

InlineStart.args = { variant: 'inline-start' }
InlineStaggered.args = { variant: 'inline-staggered' }
BlockStart.args = { variant: 'block-start' }
BlockStaggered.args = { variant: 'block-staggered' }
