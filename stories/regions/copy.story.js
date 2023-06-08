import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Copy',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.copy)
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
    ${regions.copy[args.variant]({
      props: { storybook: true, theme: args.theme, content: args.content }
    })}
  `

export const Post = Template.bind({})

Post.args = { variant: 'post-copy' }
