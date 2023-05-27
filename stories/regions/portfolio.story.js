import render from '../../macros/regions/portfolio.njk'

export default {
  title: 'Regions/Portfolio',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['left-image', 'right-image', 'card-grid-2', 'cover']
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

export const LeftImage = Template.bind({})
export const RightImage = Template.bind({})
export const CardGrid2 = Template.bind({})
export const Cover = Template.bind({})

LeftImage.args = { variant: 'left-image' }
RightImage.args = { variant: 'right-image' }
CardGrid2.args = { variant: 'card-grid-2' }
Cover.args = { variant: 'cover' }
