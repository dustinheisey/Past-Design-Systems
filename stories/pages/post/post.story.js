import { pageRegions, themes } from '../../util/consts.js'
const { post } = pageRegions
export default {
  title: 'Pages/Post',
  argTypes: {
    introVariant: {
      control: 'select',
      options: Object.keys(post.intro),
      table: {
        category: 'Header'
      }
    },
    introTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Header'
      }
    },
    copyVariant: {
      control: 'select',
      options: Object.keys(post.copy),
      table: {
        category: 'Content'
      }
    },
    copyTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Content'
      }
    },
    actionVariant: {
      control: 'select',
      options: Object.keys(post.action),
      table: {
        category: 'CTA'
      }
    },
    actionTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'CTA'
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
{{ header({ variant: '${story.args.introVariant}', theme: '${story.args.introTheme}', content: content.post.header }) }} 
{{ post({ variant: '${story.args.copyVariant}', theme: '${story.args.copyTheme}', content: content.post.post }) }} 
{{ cta({ variant: '${story.args.actionVariant}', theme: '${story.args.actionTheme}', content: content.post.cta }) }}
          `
      }
    }
  },
  args: {
    introTheme: 'background',
    introVariant: 'center-intro',
    copyTheme: 'background',
    copyVariant: 'post-copy',
    actionTheme: 'background',
    actionVariant: 'left-bg-action'
  }
}

export const Default = (args) =>
  `
    ${post.intro[args.introVariant]({
      props: { theme: args.introTheme }
    })}
    ${post.copy[args.copyVariant]({
      props: { theme: args.copyTheme }
    })}
    ${post.action[args.actionVariant]({
      props: { theme: args.actionTheme }
    })}
  `
