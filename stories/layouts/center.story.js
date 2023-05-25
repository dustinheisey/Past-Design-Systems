export default {
  title: 'Layouts/Center',
  args: { intrinsic: false }
}

export const Default = ({ intrinsic }) =>
  `
    <div class="${intrinsic ? 'center-intrinsic' : 'center'} prose">
      <h2>Start your free trial today</h2>
      <p>Experience the difference for yourself</p>
      <button class="btn">Sign up now</button>
    </div>
  `

Default.parameters = {
  docs: {
    description: {
      story:
        'The Center component should be used whenever you want something to be horizontally centered. Use by default to center the container, or use the intrinsic modifier to center the content within the centered container.'
    },
    source: {
      code: `
<div class="center">
</div>
    `
    }
  }
}

export const Container = () =>
  `
    <div class="center prose">
      <h2>Start your free trial today</h2>
      <p>Experience the difference for yourself</p>
      <button class="btn">Sign up now</button>
    </div>
  `

export const Intrinsic = () =>
  `
    <div class="center-intrinsic prose">
      <h2>Start your free trial today</h2>
      <p>Experience the difference for yourself</p>
      <button class="btn">Sign up now</button>
    </div>
  `
