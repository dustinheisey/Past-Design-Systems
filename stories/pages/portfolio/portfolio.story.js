import { pageRegions, themes } from '../../util/consts.js'
const { portfolio } = pageRegions
export default {
  title: 'Pages/Portfolio',
  argTypes: {
    headerVariant: {
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
{{ header({ variant: '${story.args.headerVariant}', theme: '${story.args.headerTheme}', content: content.portfolio.header }) }} 
{{ info({ variant: '${story.args.storyVariant}', theme: '${story.args.storyTheme}', content: content.portfolio.story }) }} 
{{ testimonials({ variant: '${story.args.testimonialsVariant}', theme: '${story.args.testimonialsTheme}', content: content.portfolio.testimonials }) }}
{{ cta({ variant: '${story.args.actionVariant}', theme: '${story.args.actionTheme}', content: content.portfolio.cta }) }}
          `
      }
    }
  },
  args: {
    headerTheme: 'background',
    headerVariant: 'angled-bottom-left-hero',
    gridTheme: 'background',
    gridVariant: 'img-grid-gallery',
    testimonialsTheme: 'background',
    testimonialsVariant: 'simple-quote-testimonials',
    actionTheme: 'background',
    actionVariant: 'left-img-action'
  }
}

export const Default = (args) =>
  `
    ${portfolio.hero[args.headerVariant]({
      props: { theme: args.headerTheme, content: args.headerContent }
    })}
    ${portfolio.grid[args.gridVariant]({
      props: { theme: args.gridTheme, content: args.gridContent }
    })}
    ${portfolio.testimonials[args.testimonialsVariant]({
      props: {
        theme: args.testimonialsTheme,
        content: args.testimonialsContent
      }
    })}
    ${portfolio.action[args.actionVariant]({
      props: { theme: args.actionTheme }
    })}
  `
