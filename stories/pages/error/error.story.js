import { pageRegions, themes } from '../../util/consts.js'
const { error } = pageRegions
export default {
  title: 'Pages/404',
  parameters: {
    status: {
      type: 'beta'
    },
    docs: {
      source: {
        transform: (src, story) =>
          `{{ error({variant: '${story.args.errorVariant}', theme: '${story.args.errorTheme}', content: content.error}) }}`
      }
    }
  },
  argTypes: {
    errorVariant: {
      control: 'select',
      options: Object.keys(error),
      table: {
        category: 'Error'
      }
    },
    errorTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Error'
      }
    }
  },
  args: {
    errorTheme: 'background',
    errorVariant: 'simple-action'
  }
}

export const Default = (args) =>
  `
    ${error[args.errorVariant]({
      props: { theme: args.errorTheme }
    })}
  `
