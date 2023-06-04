import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Intro',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.intro)
    },
    theme: {
      control: 'select',
      options: themes
    }
  }
}

const Template = (args) =>
  `
    ${regions.intro[args.variant]({
      props: { storybook: true, theme: args.theme }
    })}
  `

export const Center = Template.bind({})
export const Left = Template.bind({})
export const Right = Template.bind({})

Center.args = { variant: 'center-intro' }
Left.args = { variant: 'left-intro' }
Right.args = { variant: 'right-intro' }
