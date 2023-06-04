import { pageRegions, themes } from '../../util/consts.js'
const { contact } = pageRegions
export default {
  title: 'Pages/Contact',
  argTypes: {
    introVariant: {
      control: 'select',
      options: Object.keys(contact.intro),
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
    formVariant: {
      control: 'select',
      options: Object.keys(contact.form),
      table: {
        category: 'Form'
      }
    },
    formTheme: {
      control: 'select',
      options: themes,
      table: {
        category: 'Form'
      }
    },
    faqVariant: {
      control: 'select',
      options: Object.keys(contact.faq),
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
{{ header({ variant: '${story.args.introVariant}', theme: '${story.args.introTheme}', content: content.contact.header }) }} 
{{ contact({ variant: '${story.args.formVariant}', theme: '${story.args.formTheme}', content: content.contact.contact }) }} 
{{ faq({ variant: '${story.args.faqVariant}', theme: '${story.args.faqTheme}', content: content.contact.faq }) }}
          `
      }
    }
  },
  args: {
    introTheme: 'background',
    introVariant: 'center-intro',
    formTheme: 'background',
    formVariant: 'center-form',
    faqTheme: 'background',
    faqVariant: 'accordion-faq'
  }
}

export const Default = (args) =>
  ` 
    ${contact.intro[args.introVariant]({ storybook: true, props: { theme: args.introTheme } })}
    ${contact.form[args.formVariant]({ storybook: true, props: { theme: args.formTheme } })}
    ${contact.faq[args.faqVariant]({ storybook: true, props: { theme: args.faqTheme } })}
  `
