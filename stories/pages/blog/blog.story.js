import { pageRegions, themes } from '../../util/consts.js'
const { blog } = pageRegions
export default {
  title: 'Pages/Blog',
  argTypes: {
    headerVariant: {
      control: 'select',
      options: Object.keys(blog.hero),
      table: {
        category: 'Header'
      }
    },
    headerTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Header'
      }
    },
    gridVariant: {
      control: 'select',
      options: Object.keys(blog.grid),
      table: {
        category: 'Grid'
      }
    },
    gridTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Grid'
      }
    },
    actionVariant: {
      control: 'select',
      options: Object.keys(blog.action),
      table: {
        category: 'action'
      }
    },
    actionTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'action'
      }
    }
  },
  parameters: {
    status: {
      type: 'beta'
    },
    docs: {
      source: {
        transform: (src, story) =>
          `
{{ header({ variant: '${story.args.headerVariant}', theme: '${story.args.headerTheme}', content: content.blog.header }) }} 
{{ blog({ variant: '${story.args.blogVariant}', theme: '${story.args.blogTheme}', content: content.blog.blog }) }} 
{{ action({ variant: '${story.args.actionVariant}', theme: '${story.args.actionTheme}', content: content.blog.action }) }}
          `
      }
    }
  },
  args: {
    headerTheme: 'background',
    headerVariant: 'left-hero',
    gridTheme: 'background',
    gridVariant: 'card-grid-gallery',
    actionTheme: 'background',
    actionVariant: 'center-bg-action'
  }
}

export const Default = (args) =>
  ` 
    ${blog.hero[args.headerVariant]({ storybook: true, props: { theme: args.headerTheme } })}
    ${blog.grid[args.gridVariant]({ storybook: true, props: { theme: args.gridTheme } })}
    ${blog.action[args.actionVariant]({ storybook: true, props: { theme: args.actionTheme } })}
  `
