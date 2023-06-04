import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Gallery',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.gallery)
    },
    theme: {
      control: 'select',
      options: themes
    }
  }
}

const Template = (args) =>
  `
    ${regions.gallery[args.variant]({
      props: { storybook: true, theme: args.theme }
    })}
  `

export const CardGrid2 = Template.bind({})
export const CardGrid = Template.bind({})
export const FeaturedCardGrid = Template.bind({})
export const FeaturedMixedGrid = Template.bind({})
export const FeaturedTextGrid = Template.bind({})
export const ImgGrid = Template.bind({})
export const Left = Template.bind({})
export const Stack = Template.bind({})
export const TextGrid = Template.bind({})

CardGrid2.args = { variant: 'card-grid-2-gallery' }
CardGrid.args = { variant: 'card-grid-gallery' }
FeaturedCardGrid.args = { variant: 'featured-card-grid-gallery' }
FeaturedMixedGrid.args = { variant: 'featured-mixed-grid-gallery' }
FeaturedTextGrid.args = { variant: 'featured-text-grid-gallery' }
ImgGrid.args = { variant: 'img-grid-gallery' }
Left.args = { variant: 'left-gallery' }
Stack.args = { variant: 'stack-gallery' }
TextGrid.args = { variant: 'text-grid-gallery' }
