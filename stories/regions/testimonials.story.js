import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Testimonials',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.testimonials)
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
    ${regions.testimonials[args.variant]({
      props: { theme: args.theme }
    })}
  `

export const SimpleQuote = Template.bind({})
export const CenteredQuote = Template.bind({})
export const LeftAvatar = Template.bind({})
export const RightAvatar = Template.bind({})

SimpleQuote.args = { variant: 'simple-quote-testimonials' }
CenteredQuote.args = { variant: 'center-quote-testimonials' }
LeftAvatar.args = { variant: 'left-avatar-testimonials' }
RightAvatar.args = { variant: 'right-avatar-testimonials' }
