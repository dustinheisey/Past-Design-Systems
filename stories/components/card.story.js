import render from '../../macros/components/card.njk'

export default {
  title: 'Components/Card',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['card', 'card-grid', 'card-image', 'card-image-grid']
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

export const Card = Template.bind({})
Card.args = {
  variant: 'card'
}

export const CardGrid = Template.bind({})
CardGrid.args = {
  variant: 'card-grid'
}

export const CardImage = Template.bind({})
CardImage.args = {
  variant: 'card-image'
}

export const CardImageGrid = Template.bind({})
CardImageGrid.args = {
  variant: 'card-image-grid'
}
