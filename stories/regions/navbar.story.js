import render from '../../macros/regions/navbar.njk'

export default {
  title: 'Regions/Navbar',
  decorators: [(story) => `<div style="inline-size: 75vw">${story()}</div>`],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['centered', 'spaced', 'start', 'end', 'stacked']
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

export const Centered = Template.bind({})
export const Spaced = Template.bind({})
export const Start = Template.bind({})
export const End = Template.bind({})
export const Stacked = Template.bind({})

Centered.args = { variant: 'centered' }
Spaced.args = { variant: 'spaced' }
Start.args = { variant: 'start' }
End.args = { variant: 'end' }
Stacked.args = { variant: 'stacked' }
