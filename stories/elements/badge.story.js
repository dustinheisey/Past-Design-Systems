export default {
  title: 'Elements/Badge',
  argTypes: {
    type: {
      control: 'select',
      description: 'Badge Type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      },
      options: ['primary', 'secondary', 'tertiary']
    }
  },
  args: { type: 'primary' },
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'centered'
  }
}

export const Default = ({ type }) => `
  <span class="badge badge-${type}">Badge Text</span>
`

// Badges
export const Badges = () => `
  <div class="cluster">
    <span class="badge badge-primary">Badge Text</span>
    <span class="badge badge-secondary">Badge Text</span>
    <span class="badge badge-tertiary">Badge Text</span>
  </div>
`

// Badges with status
export const BadgesWithStatus = () => `
  <div class="cluster">
    <span class="badge badge-primary status">Badge Text</span>
    <span class="badge badge-secondary status">Badge Text</span>
    <span class="badge badge-tertiary status">Badge Text</span>
  </div>
`

export const PrimaryBadge = () => `
  <span class="badge badge-primary">Badge Text</span>
`

export const SecondaryBadge = () => `
  <span class="badge badge-secondary">Badge Text</span>
`

export const TertiaryBadge = () => `
  <span class="badge badge-tertiary">Badge Text</span>
`

export const PrimaryBadgeWithStatus = () => `
  <span class="badge badge-primary status">Badge Text</span>
`

export const SecondaryBadgeWithStatus = () => `
  <span class="badge badge-secondary status">Badge Text</span>
`

export const TertiaryBadgeWithStatus = () => `
  <span class="badge badge-tertiary status">Badge Text</span>
`
