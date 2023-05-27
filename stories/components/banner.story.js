import render from '../../macros/components/banner.njk'

export default {
  title: 'Components/Banner',
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
