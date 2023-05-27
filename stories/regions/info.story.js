import render from '../../macros/regions/info.njk'

export default {
  title: 'Regions/Info',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'left-image',
        'right-image',
        'card-grid',
        'blurb-grid',
        'offset-grid',
        'offset-list',
        'list'
      ]
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
export const CardGrid = Template.bind({})
export const BlurbGrid = Template.bind({})
export const OffsetGrid = Template.bind({})
export const OffsetList = Template.bind({})
export const List = Template.bind({})

LeftImage.args = { variant: 'left-image' }
RightImage.args = { variant: 'right-image' }
CardGrid.args = { variant: 'card-grid' }
BlurbGrid.args = { variant: 'blurb-grid' }
OffsetGrid.args = { variant: 'offset-grid' }
OffsetList.args = { variant: 'offset-list' }
List.args = { variant: 'list' }
