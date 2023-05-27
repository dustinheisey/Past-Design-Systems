import render from '../../macros/components/input-group.njk'

export default {
  title: 'Components/Input Group',
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
