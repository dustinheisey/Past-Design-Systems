import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Feature',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.feature)
    },
    theme: {
      control: 'select',
      options: themes
    }
  }
}

const Template = (args) =>
  `
    ${regions.feature[args.variant]({
      props: { storybook: true, theme: args.theme }
    })}
  `

export const CardGrid = Template.bind({})
export const LeftImg = Template.bind({})
export const List = Template.bind({})
export const OffsetGrid = Template.bind({})
export const OffsetList = Template.bind({})
export const RightImg = Template.bind({})

CardGrid.args = { variant: 'card-grid-feature' }
LeftImg.args = { variant: 'left-img-feature' }
List.args = { variant: 'list-feature' }
OffsetGrid.args = { variant: 'offset-grid-feature' }
OffsetList.args = { variant: 'offset-list-feature' }
RightImg.args = { variant: 'right-img-feature' }
