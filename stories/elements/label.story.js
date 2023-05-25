export default {
  title: 'Elements/Label',
  argTypes: {
    required: {
      control: 'boolean',
      description: 'Input Required?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  }
}

export const Default = ({ required }) =>
  ` <label class="${required ? 'required' : ''}">Input Label</label> `

export const Required = () => ' <label class="required">Input Label</label> '

export const Optional = () => ' <label>Input Label</label> '
