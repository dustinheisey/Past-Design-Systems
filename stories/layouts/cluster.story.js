export default {
  title: 'Layouts/Cluster',
  args: {
    justify: 'start',
    align: 'center'
  },
  decorators: [(story) => ` <div style="width: 75vw">${story()}</div> `],
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'centered'
  }
}

export const Default = ({ justify, align }) =>
  `
    <ul
      class="cluster ${justify ? `justify-${justify}` : ''} ${
    align ? `align-${align}` : ''
  }"
    >
      <li><a href="#" class="link link-navigation">Link 1</a></li>
      <li><a href="#" class="link link-navigation">Link 2</a></li>
      <li><a href="#" class="link link-navigation">Link 3</a></li>
      <li><a href="#" class="link link-navigation">Link 4</a></li>
    </ul>
  `

Default.parameters = {
  docs: {
    description: {
      story:
        'The Cluster component is a layout tool that can be used to align groups of elements that differ in length and are prone to wrapping. It can align elements horizontally to the left, right, or center and can be used for buttons at the end of forms, lists of tags, or page header logos and navigation. It uses justify-content: space-between and align-items: center for optimal wrapping without the need for media breakpoints.'
    },
    source: {
      code: `
<div class="center">
</div>
    `
    }
  }
}

export const JustifyStart = () =>
  `
    <ul class="cluster justify-start">
      <li><a href="#" class="link link-navigation">Link 1</a></li>
      <li><a href="#" class="link link-navigation">Link 2</a></li>
      <li><a href="#" class="link link-navigation">Link 3</a></li>
      <li><a href="#" class="link link-navigation">Link 4</a></li>
    </ul>
  `

export const JustifyCenter = () =>
  `
    <ul class="cluster justify-center">
      <li><a href="#" class="link link-navigation">Link 1</a></li>
      <li><a href="#" class="link link-navigation">Link 2</a></li>
      <li><a href="#" class="link link-navigation">Link 3</a></li>
      <li><a href="#" class="link link-navigation">Link 4</a></li>
    </ul>
  `

export const JustifyEnd = () =>
  `
    <ul class="cluster justify-end">
      <li><a href="#" class="link link-navigation">Link 1</a></li>
      <li><a href="#" class="link link-navigation">Link 2</a></li>
      <li><a href="#" class="link link-navigation">Link 3</a></li>
      <li><a href="#" class="link link-navigation">Link 4</a></li>
    </ul>
  `
