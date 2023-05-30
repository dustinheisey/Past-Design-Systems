import { pageRegions, themes } from '../../util/consts.js'
const { landing } = pageRegions
export default {
  title: 'Pages/Landing',
  argTypes: {
    heroVariant: {
      control: 'select',
      options: Object.keys(landing.hero),
      table: {
        category: 'Hero'
      }
    },
    heroTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Hero'
      }
    },
    problemVariant: {
      control: 'select',
      options: Object.keys(landing.problem),
      table: {
        category: 'Problem'
      }
    },
    problemTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Problem'
      }
    },
    guideVariant: {
      control: 'select',
      options: Object.keys(landing.guide),
      table: {
        category: 'Guide'
      }
    },
    guideTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Guide'
      }
    },
    planVariant: {
      control: 'select',
      options: Object.keys(landing.plan),
      table: {
        category: 'Plan'
      }
    },
    planTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Plan'
      }
    },
    actionVariant: {
      control: 'select',
      options: Object.keys(landing.action),
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
    },
    successVariant: {
      control: 'select',
      options: Object.keys(landing.success),
      table: {
        category: 'Success'
      }
    },
    successTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Success'
      }
    },
    freebieVariant: {
      control: 'select',
      options: Object.keys(landing.freebie),
      table: {
        category: 'Freebie'
      }
    },
    freebieTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Freebie'
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
{{ hero({ variant: '${story.args.heroVariant}', theme: '${story.args.heroTheme}', content: content.index.hero }) }} 
{{ info({ variant: '${story.args.storyVariant}', theme: '${story.args.storyTheme}', content: content.index.problem }) }} 
{{ info({ variant: '${story.args.skillsVariant}', theme: '${story.args.skillsTheme}', content: content.index.guide }) }}
{{ info({ variant: '${story.args.portfolioVariant}', theme: '${story.args.portfolioTheme}', content: content.index.plan }) }} 
{{ cta({ variant: '${story.args.actionVariant}', theme: '${story.args.actionTheme}', content: content.index.cta }) }}
{{ testimonials({ variant: '${story.args.testimonialsVariant}', theme: '${story.args.testimonialsTheme}', content: content.index.testimonials }) }}
{{ cta({ variant: '${story.args.freebieVariant}', theme: '${story.args.freebieTheme}', content: content.index.freebie }) }}

          `
      }
    }
  },
  args: {
    heroTheme: 'background',
    heroVariant: 'angled-bottom-left-hero',
    problemTheme: 'background',
    problemVariant: 'center-intro',
    guideTheme: 'background',
    guideVariant: 'blurb-grid-feature',
    planTheme: 'background',
    planVariant: 'card-grid-gallery',
    actionTheme: 'background',
    actionVariant: 'center-bg-action',
    successTheme: 'background',
    successVariant: 'center-quote-testimonials',
    freebieTheme: 'background',
    freebieVariant: 'left-bg-action'
  }
}

export const Default = (args) =>
  `
    ${landing.hero[args.heroVariant]({
      props: { theme: args.heroTheme }
    })}
    ${landing.problem[args.problemVariant]({
      props: { theme: args.problemTheme }
    })}
    ${landing.guide[args.guideVariant]({
      props: { theme: args.guideTheme }
    })}
    ${landing.plan[args.planVariant]({
      props: { theme: args.planTheme }
    })}
    ${landing.action[args.actionVariant]({
      props: { theme: args.actionTheme }
    })}
    ${landing.success[args.successVariant]({
      props: { theme: args.successTheme }
    })}
    ${landing.freebie[args.freebieVariant]({
      props: { theme: args.freebieTheme }
    })}
  `
