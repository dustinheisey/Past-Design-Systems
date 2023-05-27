import render from '../../macros/components/breadcrumb.njk'

export default {
  title: 'Components/Breadcrumb',
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
