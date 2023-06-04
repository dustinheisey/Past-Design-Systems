import { pageRegions, themes } from '../../util/consts.js'
const { about } = pageRegions

export default {
  title: 'Pages/About',
  argTypes: {
    headerVariant: {
      control: 'select',
      options: Object.keys(about.hero),
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
    storyVariant: {
      control: 'select',
      options: Object.keys(about.story),
      table: {
        category: 'Story'
      }
    },
    storyTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Story'
      }
    },
    skillsVariant: {
      control: 'select',
      options: Object.keys(about.skills),
      table: {
        category: 'Skills'
      }
    },
    skillsTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Skills'
      }
    },
    portfolioVariant: {
      control: 'select',
      options: Object.keys(about.portfolio),
      table: {
        category: 'Portfolio'
      }
    },
    portfolioTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Portfolio'
      }
    },
    testimonialsVariant: {
      control: 'select',
      options: Object.keys(about.testimonials),
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
      options: Object.keys(about.action),
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
{{ header({ variant: '${story.args.headerVariant}', theme: '${story.args.headerTheme}', content: content.about.header }) }} 
{{ info({ variant: '${story.args.storyVariant}', theme: '${story.args.storyTheme}', content: content.about.story }) }} 
{{ stats({ variant: '${story.args.skillsVariant}', theme: '${story.args.skillsTheme}', content: content.about.skills }) }}
{{ portfolio({ variant: '${story.args.portfolioVariant}', theme: '${story.args.portfolioTheme}', content: content.about.portfolio }) }} 
{{ testimonials({ variant: '${story.args.testimonialsVariant}', theme: '${story.args.testimonialsTheme}', content: content.about.testimonials }) }}
{{ action({ variant: '${story.args.actionVariant}', theme: '${story.args.actionTheme}', content: content.about.action }) }}
          `
      }
    }
  },
  args: {
    headerTheme: 'background',
    headerVariant: 'left-hero',
    storyTheme: 'background',
    storyVariant: 'left-intro',
    skillsTheme: 'background',
    skillsVariant: 'simple-4-stats',
    portfolioTheme: 'background',
    portfolioVariant: 'card-grid-gallery',
    testimonialsTheme: 'background',
    testimonialsVariant: 'left-avatar-testimonials',
    actionTheme: 'background',
    actionVariant: 'left-bg-action'
  }
}

export const Default = (args) =>
  `
    ${about.hero[args.headerVariant]({ storybook: true, theme: args.headerTheme })} 
    ${about.story[args.storyVariant]({ storybook: true, theme: args.storyTheme })} 
    ${about.skills[args.skillsVariant]({ storybook: true, theme: args.skillsTheme })}
    ${about.portfolio[args.portfolioVariant]({ storybook: true, theme: args.portfolioTheme })} 
    ${about.testimonials[args.testimonialsVariant]({ storybook: true, theme: args.testimonialsTheme })}
    ${about.action[args.actionVariant]({ storybook: true, theme: args.actionTheme })}
  `
