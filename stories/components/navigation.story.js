import render from '../../macros/components/navigation.njk'

export default {
  title: 'Components/Navigation',
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
