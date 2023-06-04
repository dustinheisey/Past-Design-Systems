import { pageRegions, themes } from '../../util/consts.js'
const { footer } = pageRegions
export default {
  title: 'Pages/Footer',
  argTypes: {
    footerVariant: {
      control: 'select',
      options: Object.keys(footer),
      table: {
        category: 'Footer'
      }
    },
    footerTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Footer'
      }
    }
  },
  args: {
    footerTheme: 'background',
    footerVariant: 'inline-footer'
  },
  parameters: {
    status: {
      type: 'beta'
    },
    docs: {
      source: {
        transform: (src, story) =>
          `
{{ footer({ variant: '${story.args.footerVariant}', theme: '${story.args.footerTheme}', content: content.footer }) }} 
          `
      }
    }
  }
}

export const Default = (args) =>
  `
    ${footer[args.footerVariant]({ storybook: true, props: { theme: args.footerTheme } })}
  `
