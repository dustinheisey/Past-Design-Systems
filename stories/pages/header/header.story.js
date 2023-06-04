import { pageRegions, themes } from '../../util/consts.js'
const { header } = pageRegions
export default {
  title: 'Pages/Header',
  argTypes: {
    navbarVariant: {
      control: 'select',
      options: Object.keys(header),
      table: {
        category: 'Navbar'
      }
    },
    navbarTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Navbar'
      }
    }
  },
  args: {
    navbarTheme: 'background',
    navbarVariant: 'center-header'
  },
  parameters: {
    status: {
      type: 'beta'
    },
    docs: {
      source: {
        transform: (src, story) =>
          `
{{ navbar({ variant: '${story.args.navbarVariant}', theme: '${story.args.navbarTheme}', content: content.navbar }) }} 
          `
      }
    }
  }
}

export const Default = (args) =>
  `
    ${header[args.navbarVariant]({ storybook: true, props: { theme: args.navbarTheme } })}
  `
