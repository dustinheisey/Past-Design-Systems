import { pageRegions, themes } from '../../util/consts.js'
const { service } = pageRegions
export default {
  title: 'Pages/Service',
  argTypes: {
    heroVariant: {
      control: 'select',
      options: Object.keys(service.hero),
      table: {
        category: 'Header'
      }
    },
    heroTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Header'
      }
    },
    problemVariant: {
      control: 'select',
      options: Object.keys(service.problem),
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
    descriptionVariant: {
      control: 'select',
      options: Object.keys(service.description),
      table: {
        category: 'Description'
      }
    },
    descriptionTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Description'
      }
    },
    proofVariant: {
      control: 'select',
      options: Object.keys(service.proof),
      table: {
        category: 'Proof'
      }
    },
    proofTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Proof'
      }
    },
    processVariant: {
      control: 'select',
      options: Object.keys(service.process),
      table: {
        category: 'Process'
      }
    },
    processTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Process'
      }
    },
    transformationVariant: {
      control: 'select',
      options: Object.keys(service.transformation),
      table: {
        category: 'Transformation'
      }
    },
    transformationTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Transformation'
      }
    },
    faqVariant: {
      control: 'select',
      options: Object.keys(service.faq),
      table: {
        category: 'FAQ'
      }
    },
    faqTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'FAQ'
      }
    },
    actionVariant: {
      control: 'select',
      options: Object.keys(service.action),
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
{{ header({ variant: '${story.args.heroVariant}', theme: '${story.args.heroTheme}', content: content.[service name].header }) }} 
{{ info({ variant: '${story.args.problemVariant}', theme: '${story.args.problemTheme}', content: content.[service name].problem }) }} 
{{ info({ variant: '${story.args.descriptionVariant}', theme: '${story.args.descriptionTheme}', content: content.[service name].description }) }}
{{ info({ variant: '${story.args.proofVariant}', theme: '${story.args.proofTheme}', content: content.[service name].proof }) }} 
{{ timeline({ variant: '${story.args.processVariant}', theme: '${story.args.processTheme}', content: content.[service name].process }) }}
{{ info({ variant: '${story.args.transformationVariant}', theme: '${story.args.transformationTheme}', content: content.[service name].transformation }) }} 
{{ faq({ variant: '${story.args.faqVariant}', theme: '${story.args.faqTheme}', content: content.[service name].faq }) }} 
{{ cta({ variant: '${story.args.actionVariant}', theme: '${story.args.actionTheme}', content: content.[service name].cta }) }}
          `
      }
    }
  },
  args: {
    heroTheme: 'background',
    heroVariant: 'center-bg-hero',
    problemTheme: 'background',
    problemVariant: 'right-intro',
    descriptionTheme: 'background',
    descriptionVariant: 'list-feature',
    proofTheme: 'background',
    proofVariant: 'img-grid-gallery',
    processTheme: 'background',
    processVariant: 'block-staggered-timeline',
    transformationTheme: 'background',
    transformationVariant: 'offset-grid-feature',
    faqTheme: 'background',
    faqVariant: 'card-grid-3-faq',
    actionTheme: 'background',
    actionVariant: 'left-img-action'
  }
}

export const Default = (args) =>
  `
    ${service.hero[args.heroVariant]({
      props: { theme: args.heroTheme }
    })}
    ${service.problem[args.problemVariant]({
      props: { theme: args.problemTheme }
    })}
    ${service.description[args.descriptionVariant]({
      props: { theme: args.descriptionTheme }
    })}
    ${service.proof[args.proofVariant]({
      props: { theme: args.proofTheme }
    })}
    ${service.process[args.processVariant]({
      props: { theme: args.processTheme }
    })}
    ${service.transformation[args.transformationVariant]({
      props: {
        theme: args.transformationTheme
      }
    })}
    ${service.faq[args.faqVariant]({
      props: { theme: args.faqTheme }
    })}
    ${service.action[args.actionVariant]({
      props: { theme: args.actionTheme }
    })}
  `
