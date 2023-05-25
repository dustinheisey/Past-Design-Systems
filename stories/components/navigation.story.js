import render from '../../macros/components/navigation.njk'

export default {
  title: 'Components/Navigation'
}

export const Default = (args) => {
  return render({
    storybookArgs: args
  })
}
