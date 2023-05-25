import render from '../../macros/regions/404.njk'

export default {
  title: 'Regions/404',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['simple', 'split', 'bg']
    }
  }
}

const Template = (args) => {
  return render({
    storybookArgs: args
  })
}

export const Simple = Template.bind({})
Simple.args = {
  variant: 'simple'
}

export const Split = Template.bind({})
Split.args = {
  variant: 'split'
}

export const Bg = Template.bind({})
Bg.args = {
  variant: 'bg'
}
