import render from '../../macros/components/accordion.njk'

export default {
  title: 'Components/Accordion'
}

export const Default = (args) => {
  return render({
    storybookArgs: args
  })
}
