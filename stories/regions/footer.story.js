import render from '../../macros/regions/footer.njk'
export default {
  title: 'Regions/Footer',
  decorators: [(story) => `<div style="inline-size: 90vw">${story()}</div>`],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'mission',
        'mission-dark',
        'mission-primary',
        'mission-bg',
        'mission-dark-bg',
        'mission-primary-bg',
        'newsletter',
        'newsletter-dark',
        'newsletter-primary',
        'newsletter-bg',
        'newsletter-dark-bg',
        'newsletter-primary-bg',
        'simple',
        'simple-dark',
        'simple-primary',
        'simple-bg',
        'simple-dark-bg',
        'simple-primary-bg',
        'inline',
        'inline-dark',
        'inline-primary'
      ]
    }
  }
}

const Template = (args) => {
  return render({
    storybookArgs: args
  })
}

export const Mission = Template.bind({})
export const MissionDark = Template.bind({})
export const MissionPrimary = Template.bind({})
export const MissionBg = Template.bind({})
export const MissionDarkBg = Template.bind({})
export const MissionPrimaryBg = Template.bind({})
export const Newsletter = Template.bind({})
export const NewsletterDark = Template.bind({})
export const NewsletterPrimary = Template.bind({})
export const NewsletterBg = Template.bind({})
export const NewsletterDarkBg = Template.bind({})
export const NewsletterPrimaryBg = Template.bind({})
export const Simple = Template.bind({})
export const SimpleDark = Template.bind({})
export const SimplePrimary = Template.bind({})
export const SimpleBg = Template.bind({})
export const SimpleDarkBg = Template.bind({})
export const SimplePrimaryBg = Template.bind({})
export const Inline = Template.bind({})
export const InlineDark = Template.bind({})
export const InlinePrimary = Template.bind({})

Mission.args = { variant: 'mission' }
MissionDark.args = { variant: 'mission-dark' }
MissionPrimary.args = { variant: 'mission-primary' }
MissionBg.args = { variant: 'mission-bg' }
MissionDarkBg.args = { variant: 'mission-dark-bg' }
MissionPrimaryBg.args = { variant: 'mission-primary-bg' }
Newsletter.args = { variant: 'newsletter' }
NewsletterDark.args = { variant: 'newsletter-dark' }
NewsletterPrimary.args = { variant: 'newsletter-primary' }
NewsletterBg.args = { variant: 'newsletter-bg' }
NewsletterDarkBg.args = { variant: 'newsletter-dark-bg' }
NewsletterPrimaryBg.args = { variant: 'newsletter-primary-bg' }
Simple.args = { variant: 'simple' }
SimpleDark.args = { variant: 'simple-dark' }
SimplePrimary.args = { variant: 'simple-primary' }
SimpleBg.args = { variant: 'simple-bg' }
SimpleDarkBg.args = { variant: 'simple-dark-bg' }
SimplePrimaryBg.args = { variant: 'simple-primary-bg' }
Inline.args = { variant: 'inline' }
InlineDark.args = { variant: 'inline-dark' }
InlinePrimary.args = { variant: 'inline-primary' }
