import render from '../../macros/components/dark-mode.njk'

export default {
  title: 'Components/Dark Mode',
  decorators: [
    (story) =>
      `<div
        style="width: 50vw; height: 50vh; background: var(--color-background); display: grid; place-items: center;"
      >
        ${story()}
      </div>`
  ],
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
