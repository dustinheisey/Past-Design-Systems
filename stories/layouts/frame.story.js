export default {
  title: 'Layouts/Frame'
}

export const Default = () =>
  `
    <div class="masonry">
      <div class="frame square">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame photo">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame video">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame full">
        <img src="https://placehold.co/600x900" alt="{product name}" />
      </div>
      <div class="frame square">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame photo">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame video">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame full">
        <img src="https://placehold.co/600x900" alt="{product name}" />
      </div>
      <div class="frame square">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame photo">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame video">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame full">
        <img src="https://placehold.co/600x900" alt="{product name}" />
      </div>
      <div class="frame square">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame photo">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame video">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame full">
        <img src="https://placehold.co/600x900" alt="{product name}" />
      </div>
      <div class="frame square">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame photo">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame video">
        <img src="https://placehold.co/600x400" alt="{product name}" />
      </div>
      <div class="frame full">
        <img src="https://placehold.co/600x900" alt="{product name}" />
      </div>
    </div>
  `

Default.parameters = {
  docs: {
    description: {
      story:
        'The Frame can be used to crop media to a desired aspect ratio and can be customized for different circumstances such as changing the aspect ratio based on viewport orientation using @media queries.'
    },
    source: {
      code: `
<div class="center">
</div>
    `
    }
  }
}
