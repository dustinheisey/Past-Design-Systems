import render from '../../macros/components/breadcrumb.njk'

export default {
  title: 'Components/Breadcrumb'
}

export const Default = (args) => {
  return render({
    storybookArgs: args
  })
}
