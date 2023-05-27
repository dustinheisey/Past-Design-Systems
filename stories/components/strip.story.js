import render from '../../macros/components/strip.njk'

export default {
  title: 'Components/Strip',
  decorators: [(story) => `<div style="inline-size: 50vw;">${story()}</div>`],
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
