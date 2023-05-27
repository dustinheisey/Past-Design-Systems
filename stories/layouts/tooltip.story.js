export default {
  title: 'Layouts/Tooltip',
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'centered'
  }
}

export const Default = () =>
  `
    <p>
      The
      <abbr>
        HTML
        <tool-tip tip-position="inline-start">
          Hypertext Markup Language
        </tool-tip>
      </abbr>
      abbr element.
    </p>
  `
