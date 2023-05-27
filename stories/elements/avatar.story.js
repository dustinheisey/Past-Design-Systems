export default {
  title: 'Elements/Avatar',
  argTypes: {
    size: {
      control: 'select',
      description: 'Avatar Size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'm' }
      },
      options: ['s', 'm', 'l']
    }
  },
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'centered'
  }
}

export const Default = ({ size }) => `
  <img
    src="https://picsum.photos/200"
    class="avatar ${size === 'm' ? '' : `avatar-${size}`}"
    alt="Random Image"
  />
`

export const Small = () => `
  <img
    src="https://picsum.photos/200"
    class="avatar avatar-s"
    alt="Random Image"
  />
`

export const Medium = () => `
  <img src="https://picsum.photos/200" class="avatar" alt="Random Image" />
`

export const Large = () => `
  <img
    src="https://picsum.photos/200"
    class="avatar avatar-l"
    alt="Random Image"
  />
`
