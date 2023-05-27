import render from '../../macros/regions/blog.njk'

export default {
  title: 'Regions/Blog',
  decorators: [(story) => `<div style="inline-size: 95vw">${story()}</div>`],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'text-grid',
        'card-grid',
        'img-grid',
        'stack',
        'left',
        'featured-text-grid',
        'featured-mixed-grid',
        'featured-card-grid'
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

export const TextGrid = Template.bind({})
export const CardGrid = Template.bind({})
export const ImgGrid = Template.bind({})
export const Stack = Template.bind({})
export const Left = Template.bind({})
export const FeaturedTextGrid = Template.bind({})
export const FeaturedMixedGrid = Template.bind({})
export const FeaturedCardGrid = Template.bind({})

TextGrid.args = {
  variant: 'text-grid'
}

CardGrid.args = {
  variant: 'card-grid'
}

ImgGrid.args = {
  variant: 'img-grid'
}

Stack.args = {
  variant: 'stack'
}

Left.args = {
  variant: 'left'
}

FeaturedTextGrid.args = {
  variant: 'featured-text-grid'
}

FeaturedMixedGrid.args = {
  variant: 'featured-mixed-grid'
}

FeaturedCardGrid.args = {
  variant: 'featured-card-grid'
}
