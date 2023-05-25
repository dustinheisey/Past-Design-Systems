import render from '../../macros/components/button-group.njk'

export default {
  title: 'Components/Button Group',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'start',
        'center',
        'end',
        'tertiary-start',
        'tertiary-center',
        'tertiary-end',
        'tertiary-start-arrows',
        'tertiary-center-arrows',
        'tertiary-end-arrows'
      ]
    }
  }
}

const Template = (args) => {
  return render({
    storybookArgs: args
  })
}

export const Start = Template.bind({})
export const Center = Template.bind({})
export const End = Template.bind({})
export const TertiaryStart = Template.bind({})
export const TertiaryCenter = Template.bind({})
export const TertiaryEnd = Template.bind({})
export const TertiaryStartArrows = Template.bind({})
export const TertiaryCenterArrows = Template.bind({})
export const TertiaryEndArrows = Template.bind({})

Start.args = {
  variant: 'start'
}
Center.args = {
  variant: 'center'
}
End.args = {
  variant: 'end'
}
TertiaryStart.args = {
  variant: 'tertiary-start'
}
TertiaryCenter.args = {
  variant: 'tertiary-center'
}
TertiaryEnd.args = {
  variant: 'tertiary-end'
}
TertiaryStartArrows.args = {
  variant: 'tertiary-start-arrows'
}
TertiaryCenterArrows.args = {
  variant: 'tertiary-center-arrows'
}
TertiaryEndArrows.args = {
  variant: 'tertiary-end-arrows'
}
