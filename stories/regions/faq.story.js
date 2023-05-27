import render from '../../macros/regions/faq.njk'

export default {
  title: 'Regions/FAQ',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'offset',
        'accordion',
        'inline',
        'blurb-grid-2',
        'blurb-grid-3',
        'card-grid-2',
        'card-grid-3'
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

export const Offset = Template.bind({})
export const Accordion = Template.bind({})
export const Inline = Template.bind({})
export const BlurbGrid2 = Template.bind({})
export const BlurbGrid3 = Template.bind({})
export const CardGrid2 = Template.bind({})
export const CardGrid3 = Template.bind({})

Offset.args = { variant: 'offset' }
Accordion.args = { variant: 'accordion' }
Inline.args = { variant: 'inline' }
BlurbGrid2.args = { variant: 'blurb-grid-2' }
BlurbGrid3.args = { variant: 'blurb-grid-3' }
CardGrid2.args = { variant: 'card-grid-2' }
CardGrid3.args = { variant: 'card-grid-3' }
