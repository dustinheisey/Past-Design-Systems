import render from '../../macros/regions/testimonials.njk'

export default {
  title: 'Regions/Testimonials',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['simple-quote', 'centered-quote', 'left-avatar', 'right-avatar']
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

export const SimpleQuote = Template.bind({})
export const CenteredQuote = Template.bind({})
export const LeftAvatar = Template.bind({})
export const RightAvatar = Template.bind({})

SimpleQuote.args = { variant: 'simple-quote' }
CenteredQuote.args = { variant: 'centered-quote' }
LeftAvatar.args = { variant: 'left-avatar' }
RightAvatar.args = { variant: 'right-avatar' }
