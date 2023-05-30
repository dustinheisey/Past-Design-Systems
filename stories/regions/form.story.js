import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Form',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.form)
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
    ${regions.form[args.variant]({
      props: { theme: args.theme }
    })}
  `

export const Center = Template.bind({})
export const SplitLeft = Template.bind({})
export const SplitRight = Template.bind({})

Center.args = { variant: 'center-form' }
SplitLeft.args = { variant: 'split-left-form' }
SplitRight.args = { variant: 'split-right-form' }
