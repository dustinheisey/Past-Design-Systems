import render from '../../macros/regions/header.njk'

export default {
  title: 'Regions/Header',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'left',
        'right',
        'left-image',
        'right-image',
        'center',
        'left-inverse',
        'right-inverse',
        'left-image-inverse',
        'right-image-inverse',
        'center-inverse'
      ]
    }
  }
}

const Template = (args) => {
  return render({
    storybookArgs: args
  })
}

export const Left = Template.bind({})
export const Right = Template.bind({})
export const LeftImage = Template.bind({})
export const RightImage = Template.bind({})
export const Center = Template.bind({})
export const LeftInverse = Template.bind({})
export const RightInverse = Template.bind({})
export const LeftImageInverse = Template.bind({})
export const RightImageInverse = Template.bind({})
export const CenterInverse = Template.bind({})

Left.args = { variant: 'left' }
Right.args = { variant: 'right' }
LeftImage.args = { variant: 'left-image' }
RightImage.args = { variant: 'right-image' }
Center.args = { variant: 'center' }
LeftInverse.args = { variant: 'left-inverse' }
RightInverse.args = { variant: 'right-inverse' }
LeftImageInverse.args = { variant: 'left-image-inverse' }
RightImageInverse.args = { variant: 'right-image-inverse' }
CenterInverse.args = { variant: 'center-inverse' }
