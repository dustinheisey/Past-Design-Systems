import { pageRegions, themes } from '../../util/consts.js'
const { services } = pageRegions
export default {
  title: 'Pages/Services',
  argTypes: {
    heroVariant: {
      control: 'select',
      options: Object.keys(services.hero),
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
    introVariant: {
      control: 'select',
      options: Object.keys(services.intro),
      table: {
        category: 'Introduction'
      }
    },
    introTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Introduction'
      }
    },
    service1Variant: {
      control: 'select',
      options: Object.keys(services.service1),
      table: {
        category: 'Service1'
      }
    },
    service1Theme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Service1'
      }
    },
    service2Variant: {
      control: 'select',
      options: Object.keys(services.service2),
      table: {
        category: 'Service2'
      }
    },
    service2Theme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Service2'
      }
    },
    service3Variant: {
      control: 'select',
      options: Object.keys(services.service3),
      table: {
        category: 'Service3'
      }
    },
    service3Theme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Service3'
      }
    },
    service4Variant: {
      control: 'select',
      options: Object.keys(services.service4),
      table: {
        category: 'Service4'
      }
    },
    service4Theme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Service4'
      }
    },
    testimonialsVariant: {
      control: 'select',
      options: Object.keys(services.testimonials),
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
      options: Object.keys(services.action),
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
{{ header({ variant: '${story.args.heroVariant}', theme: '${story.args.heroTheme}', content: content.services.header }) }} 
{{ info({ variant: '${story.args.introVariant}', theme: '${story.args.introTheme}', content: content.services.introduction }) }} 
{{ info({ variant: '${story.args.service1Variant}', theme: '${story.args.service1Theme}', content: content.services.service1 }) }}
{{ info({ variant: '${story.args.service2Variant}', theme: '${story.args.service2Theme}', content: content.services.service2 }) }} 
{{ info({ variant: '${story.args.service3Variant}', theme: '${story.args.service3Theme}', content: content.services.service3 }) }} 
{{ info({ variant: '${story.args.service4Variant}', theme: '${story.args.service4Theme}', content: content.services.service4 }) }} 
{{ testimonials({ variant: '${story.args.testimonialsVariant}', theme: '${story.args.testimonialsTheme}', content: content.services.testimonials }) }}
{{ cta({ variant: '${story.args.actionVariant}', theme: '${story.args.actionTheme}', content: content.services.cta }) }}
          `
      }
    }
  },
  args: {
    heroTheme: 'background',
    heroVariant: 'angled-top-right-hero',
    introTheme: 'background',
    introVariant: 'left-intro',
    service1Theme: 'background',
    service1Variant: 'justified-action',
    service2Theme: 'background',
    service2Variant: 'justified-action',
    service3Theme: 'background',
    service3Variant: 'justified-action',
    service4Theme: 'background',
    service4Variant: 'justified-action',
    testimonialsTheme: 'background',
    testimonialsVariant: 'simple-quote-testimonials',
    actionTheme: 'background',
    actionVariant: 'left-bg-action'
  }
}

export const Default = (args) =>
  `
    ${services.hero[args.heroVariant]({
      props: { theme: args.heroTheme }
    })}
    ${services.intro[args.introVariant]({
      props: {
        theme: args.introTheme
      }
    })}
    ${services.service1[args.service1Variant]({
      props: { theme: args.service1Theme }
    })}
    ${services.service2[args.service2Variant]({
      props: { theme: args.service2Theme }
    })}
    ${services.service3[args.service3Variant]({
      props: { theme: args.service3Theme }
    })}
    ${services.service4[args.service4Variant]({
      props: { theme: args.service4Theme }
    })}
    ${services.testimonials[args.testimonialsVariant]({
      props: {
        theme: args.testimonialsTheme
      }
    })}
    ${services.action[args.actionVariant]({
      props: { theme: args.actionTheme }
    })}
  `
