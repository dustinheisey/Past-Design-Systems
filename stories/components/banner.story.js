import render from '../../macros/components/banner.njk'

export default {
  title: 'Components/Banner'
}

export const Default = (args) => {
  return render({
    storybookArgs: args
  })
}
