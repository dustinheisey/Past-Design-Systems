import render from '../../macros/components/blurb.njk'

export default {
  title: 'Components/Blurb',
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
