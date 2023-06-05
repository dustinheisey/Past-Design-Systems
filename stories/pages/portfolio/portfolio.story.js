import { pageRegions, themes } from '../../util/consts.js'
const { portfolio } = pageRegions
export default {
  title: 'Pages/Portfolio',
  argTypes: {
    heroVariant: {
      control: 'select',
      options: Object.keys(portfolio.hero),
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
      options: Object.keys(portfolio.grid),
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
    testimonialsVariant: {
      control: 'select',
      options: Object.keys(portfolio.testimonials),
      table: {
        category: 'Testimonials'
      }
    },
    testimonialsTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Testimonials'
      }
    },
    actionVariant: {
      control: 'select',
      options: Object.keys(portfolio.action),
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
{{ header({ variant: '${story.args.heroVariant}', theme: '${story.args.headerTheme}', content: content.portfolio.header }) }} 
{{ info({ variant: '${story.args.storyVariant}', theme: '${story.args.storyTheme}', content: content.portfolio.story }) }} 
{{ testimonials({ variant: '${story.args.testimonialsVariant}', theme: '${story.args.testimonialsTheme}', content: content.portfolio.testimonials }) }}
{{ action({ variant: '${story.args.actionVariant}', theme: '${story.args.actionTheme}', content: content.portfolio.action }) }}
          `
      }
    }
  },
  args: {
    headerTheme: 'background',
    heroVariant: 'angled-block-end-end-hero',
    gridTheme: 'background',
    gridVariant: 'img-grid-gallery',
    testimonialsTheme: 'background',
    testimonialsVariant: 'quote-simple-testimonials',
    actionTheme: 'background',
    actionVariant: 'img-start-action'
  }
}

export const Default = (args) =>
  `
    ${portfolio.hero[args.heroVariant]({
      storybook: true,
      props: { theme: args.headerTheme, content: args.headerContent }
    })}
    ${portfolio.grid[args.gridVariant]({
      storybook: true,
      props: { theme: args.gridTheme, content: args.gridContent }
    })}
    ${portfolio.testimonials[args.testimonialsVariant]({
      storybook: true,
      props: {
        theme: args.testimonialsTheme,
        content: args.testimonialsContent
      }
    })}
    ${portfolio.action[args.actionVariant]({ storybook: true, props: { theme: args.actionTheme } })}
  `
