import render from '../../macros/regions/content.njk'

export default {
  title: 'Regions/Content',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['content']
    }
  }
}

const Template = (args) => {
  return render({
    storybookArgs: args
  })
}

export const Content = Template.bind({})

Content.args = { variant: 'Content' }