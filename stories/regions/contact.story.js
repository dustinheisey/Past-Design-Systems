import render from '../../macros/regions/contact.njk'
export default {
  title: 'Regions/Contact',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['centered', 'split-left', 'split-right']
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
export const SplitLeft = Template.bind({})
export const SplitRight = Template.bind({})

Centered.args = { variant: 'centered' }
SplitLeft.args = { variant: 'split-left' }
SplitRight.args = { variant: 'split-right' }
