import render from '../../macros/components/accordion.njk'

export default {
  title: 'Components/Accordion',
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

export const Default = (args) => {
  return render({
    storybookArgs: args
  })
}
