import render from '../../macros/components/blurb.njk'

export default {
  title: 'Components/Blurb'
}

export const Default = (args) => {
  return render({
    storybookArgs: args
  })
}
